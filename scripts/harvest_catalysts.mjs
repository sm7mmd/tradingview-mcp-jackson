/**
 * harvest_catalysts.mjs — Playwright harvester for the official Tadawul issuer-announcements
 * feed (the only method past the site's 403). Ingests via catalysts.mjs (idempotent dedup).
 *
 * THREE modes:
 *   1. Page mode (default) — paginate ?page=N. Simple but SHALLOW (~5 days / 16 pages), so it's
 *      for daily top-ups, not history.
 *   2. Date-range mode (--from/--to) — drive the site's "By Time Period" date filter, then
 *      click through the results' Next pagination. The way to BULK-BACKFILL 2024–2025 history.
 *   3. Manual-assist (--pause) — open the headed browser, you set the date range + any filters
 *      by hand, press Enter, and it harvests the filtered result set via Next pagination.
 *      Use this if the auto date-filter selectors miss (the site DOM may change) — it always works.
 *
 * Usage (run HEADED on a real desktop — Akamai blocks headless; needs --experimental-sqlite):
 *   HEADLESS=false node --experimental-sqlite scripts/harvest_catalysts.mjs                  # 5 pages, daily
 *   HEADLESS=false node --experimental-sqlite scripts/harvest_catalysts.mjs --pages 60       # page-mode bulk
 *   HEADLESS=false node --experimental-sqlite scripts/harvest_catalysts.mjs --from 2024-01-01 --to 2025-12-31 --pages 400
 *   HEADLESS=false node --experimental-sqlite scripts/harvest_catalysts.mjs --pause --pages 400   # set filter by hand
 *
 * After a backfill, re-run the study:  node --experimental-sqlite scripts/contract_flow_test.mjs
 *
 * IMPORTANT — Tadawul is behind Akamai. HEADLESS chromium gets "Access Denied"; run HEADED
 * (HEADLESS=false, needs a display). For server automation use Firecrawl stealth instead.
 *
 * RECAPTCHA — the announcements table loads via a reCAPTCHA-gated search (window fn
 * `..._getAnnouncementList`). Automated clicks/calls trip the challenge and return nothing;
 * a real human clicking Search usually passes the invisible check silently. So the reliable
 * path on this page is --pause: YOU pick a period (5Y preset = ~5 years) / set From–To, click
 * Search, solve any captcha, wait for the table, then press Enter and the script harvests +
 * paginates the loaded result set. The auto --from/--to fill is best-effort and will abort
 * (exit 2) if verifyDateRange confirms the filter didn't take.
 * Real selectors (verified 2026-06-21): #fromDate (name=start) / #toDate (name=end) bootstrap
 * input-daterange; period presets are buttons id="1D|1W|1M|1Y|5Y".
 * Requires: playwright (devDependencies).
 */
import { chromium } from 'playwright';
import { createInterface } from 'node:readline';
import { ingestCatalysts, catalystsSummary } from '../dashboard/catalysts.mjs';

const arg = (flag) => { const i = process.argv.indexOf(flag); return i > -1 ? process.argv[i + 1] : null; };
const has = (flag) => process.argv.includes(flag);
const PAGES = +(arg('--pages') || 5);          // page-mode pages, or max Next-clicks in filter modes
const FROM = arg('--from');                     // YYYY-MM-DD
const TO = arg('--to');                         // YYYY-MM-DD
const PAUSE = has('--pause');
const HEADLESS = process.env.HEADLESS !== 'false';
const URL = 'https://www.saudiexchange.sa/wps/portal/saudiexchange/newsandreports/issuer-news/issuer-announcements?locale=en';
const BASE_PAGED = URL + '&page=';
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

// Runs in the page: extract one view's announcements from the rendered DOM.
const EXTRACT = () => {
  const blocks = [...document.querySelectorAll('div,li,a,tr')].map(e => (e.innerText || '').trim())
    .filter(t => /\n\d{4,5}\n/.test(t) && /\d{2}\/\d{2}\/20\d\d/.test(t) && t.length < 800);
  const seen = new Set(), out = [];
  for (const t of blocks) {
    const code = (t.match(/\n(\d{4,5})\n/) || [])[1];
    const date = (t.match(/(\d{2}\/\d{2}\/20\d\d)/) || [])[1];
    const headline = t.split('\n').filter(l => l.trim().length > 25)[0] || '';
    const k = code + '|' + date + '|' + headline.slice(0, 25);
    if (code && date && headline && !seen.has(k)) { seen.add(k); out.push({ code, date, headline: headline.slice(0, 240) }); }
  }
  return out;
};

const isDenied = (page) => page.evaluate(() => /access denied/i.test(document.body.innerText) && document.body.innerText.length < 600);
const waitRows = (page) => page.waitForFunction(
  () => /\n\d{4,5}\n[\s\S]*\d{2}\/\d{2}\/20\d\d/.test(document.body.innerText), { timeout: 15000 }).catch(() => {});

// Parse the feed's DD/MM/YYYY date cells to an ISO string for range checks.
const ddmmyyyyToISO = (s) => { const m = /(\d{2})\/(\d{2})\/(20\d\d)/.exec(s || ''); return m ? `${m[3]}-${m[2]}-${m[1]}` : null; };

// Verify the date filter actually took: sample the visible rows' dates and check they fall
// inside [from, to] (with a 7-day grace for boundary rows). Returns a report the caller logs
// so a silent miss (still showing the latest/current view) is caught BEFORE harvesting.
async function verifyDateRange(page, fromISO, toISO) {
  const rows = await page.evaluate(EXTRACT).catch(() => []);
  const dates = rows.map(r => ddmmyyyyToISO(r.date)).filter(Boolean).sort();
  if (!dates.length) return { ok: false, reason: 'no dated rows visible', sample: 0 };
  const grace = 7 * 864e5;
  const lo = +new Date(fromISO) - grace, hi = +new Date(toISO) + grace;
  const inRange = dates.filter(d => { const t = +new Date(d); return t >= lo && t <= hi; }).length;
  const frac = inRange / dates.length;
  return { ok: frac >= 0.6, frac: +frac.toFixed(2), sample: dates.length, min: dates[0], max: dates[dates.length - 1], inRange };
}

// Best-effort: fill the "By Time Period" from/to date inputs and apply. The site is a jQuery
// DataTables page; selectors are heuristic across input types. Hardened: wider keyword/name
// matching, readonly + datepicker handling, multi-format (ISO + DD/MM/YYYY), broader apply
// buttons (incl Arabic). Returns {filled, fromSet, toSet}. The caller VERIFIES with
// verifyDateRange afterwards — if that fails, fall back to --pause and set the range by hand.
async function setDateRange(page, fromISO, toISO) {
  const toSite = (iso) => { const [y, m, d] = iso.split('-'); return { iso, ddmmyyyy: `${d}/${m}/${y}`, ddmmyyyyDash: `${d}-${m}-${y}` }; };
  const f = toSite(fromISO), t = toSite(toISO);
  const res = await page.evaluate(({ f, t }) => {
    const norm = s => (s || '').toLowerCase();
    const inputs = [...document.querySelectorAll('input')];
    // Score-rank candidates by how "from/start" vs "to/end" their attributes look.
    const attrs = i => norm(i.name) + ' ' + norm(i.id) + ' ' + norm(i.placeholder) + ' ' +
      norm(i.getAttribute('aria-label')) + ' ' + norm(i.className);
    const FROM_KW = ['from', 'start', 'fromdate', 'datefrom', 'date1', 'startdate', 'txtfrom', 'min', 'fdate', 'من', 'بداية'];
    const TO_KW = ['to', 'end', 'todate', 'dateto', 'date2', 'enddate', 'txtto', 'max', 'tdate', 'إلى', 'نهاية'];
    const find = (kws, exclude = []) => inputs.find(i => {
      const hay = attrs(i);
      return kws.some(k => hay.includes(k)) && !exclude.some(k => hay.includes(k));
    });
    // Set a value robustly: strip readonly, set, and fire the full event chain a datepicker
    // or DataTables filter might listen for.
    const setVal = (el, val) => {
      if (!el) return false;
      try { el.removeAttribute('readonly'); el.readOnly = false; } catch {}
      el.focus();
      el.value = val;
      for (const type of ['input', 'keydown', 'keyup', 'change', 'blur']) el.dispatchEvent(new Event(type, { bubbles: true }));
      return el.value === val;
    };
    const dateInputs = inputs.filter(i => (i.type || '').toLowerCase() === 'date');
    let fromSet = false, toSet = false;
    if (dateInputs.length >= 2) {
      // Native date inputs want ISO.
      fromSet = setVal(dateInputs[0], f.iso); toSet = setVal(dateInputs[1], t.iso);
    } else {
      // Text inputs: try DD/MM/YYYY first, then dashed, then ISO — whichever the field keeps.
      const setMulti = (el, fmts) => { for (const v of fmts) if (setVal(el, v)) return true; return false; };
      const fromEl = find(FROM_KW, TO_KW), toEl = find(TO_KW, FROM_KW);
      fromSet = setMulti(fromEl, [f.ddmmyyyy, f.ddmmyyyyDash, f.iso]);
      toSet = setMulti(toEl, [t.ddmmyyyy, t.ddmmyyyyDash, t.iso]);
    }
    return { filled: fromSet || toSet, fromSet, toSet };
  }, { f, t });
  if (!res.filled) return res;
  // click an apply/search/filter button — broadened, incl Arabic labels and generic submits.
  const btnSels = ['button:has-text("Search")', 'button:has-text("Apply")', 'button:has-text("Filter")',
    'button:has-text("Go")', 'button:has-text("Submit")', 'button:has-text("بحث")', 'button:has-text("تطبيق")',
    'a:has-text("Search")', 'a:has-text("Apply")', 'input[type="submit"]', 'input[type="button"][value*="earch" i]',
    '#search', '.search-btn', '.btn-search', '[onclick*="earch" i]'];
  for (const sel of btnSels) {
    const el = page.locator(sel).first();
    if (await el.count().catch(() => 0)) { await el.click().catch(() => {}); break; }
  }
  await page.waitForTimeout(1200);   // let the filter re-render the table
  await waitRows(page);
  return res;
}

// Click the DataTables "Next" control (or common variants). Returns true if it advanced.
async function clickNext(page) {
  const before = await page.evaluate(() => document.body.innerText.slice(0, 4000));
  const sels = ['a.paginate_button.next:not(.disabled)', 'li.next:not(.disabled) a', 'a.next:not(.disabled)',
    'button[aria-label="Next"]:not([disabled])', 'a[aria-label="Next"]', '.dataTables_paginate .next:not(.disabled)'];
  let clicked = false;
  for (const s of sels) {
    const el = page.locator(s).first();
    if (await el.count().catch(() => 0)) { await el.click().catch(() => {}); clicked = true; break; }
  }
  if (!clicked) return false;
  await page.waitForTimeout(800);
  const after = await page.evaluate(() => document.body.innerText.slice(0, 4000));
  return after !== before; // content changed → advanced
}

// Harvest the currently-displayed filtered result set by click-through pagination.
async function harvestClickThrough(page, maxClicks) {
  const all = [];
  for (let i = 0; i <= maxClicks; i++) {
    await waitRows(page);
    const rows = await page.evaluate(EXTRACT);
    all.push(...rows);
    console.error(`view ${i}: ${rows.length} rows (total ${all.length})`);
    if (i < maxClicks) { const adv = await clickNext(page); if (!adv) { console.error('no further Next — done'); break; } }
  }
  return all;
}

function askEnter(msg) {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(res => rl.question(msg, () => { rl.close(); res(); }));
}

async function main() {
  if ((FROM && !TO) || (!FROM && TO)) { console.error('Provide BOTH --from and --to (YYYY-MM-DD).'); process.exit(1); }
  const browser = await chromium.launch({ headless: HEADLESS, args: ['--disable-blink-features=AutomationControlled'] });
  const ctx = await browser.newContext({ userAgent: UA, locale: 'en-US', viewport: { width: 1440, height: 900 } });
  await ctx.addInitScript(() => { Object.defineProperty(navigator, 'webdriver', { get: () => undefined }); });
  const page = await ctx.newPage();
  let all = [];

  if (PAUSE || (FROM && TO)) {
    // ── Date-range / manual-assist mode ──
    await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 30000 });
    if (await isDenied(page)) { denied(); await browser.close(); process.exit(1); }
    await waitRows(page);
    if (FROM && TO) {
      const r = await setDateRange(page, FROM, TO);
      if (!r.filled) {
        console.error(`⚠ could not locate date inputs (from=${r.fromSet} to=${r.toSet}). Re-run with --pause and set the range by hand.`);
      } else {
        const v = await verifyDateRange(page, FROM, TO);
        if (v.ok) {
          console.error(`✓ date filter applied ${FROM}→${TO} — visible rows ${v.min}…${v.max} (${v.inRange}/${v.sample} in range, ${(v.frac * 100) | 0}%)`);
        } else {
          console.error(`⚠ date filter did NOT take — visible rows ${v.min || '?'}…${v.max || '?'} (${v.reason || (v.frac * 100 | 0) + '% in range'}).`);
          if (!PAUSE) {
            console.error('  This would harvest the WRONG (current) view. Re-run with --pause and set the range by hand:');
            console.error(`  HEADLESS=false node --experimental-sqlite scripts/harvest_catalysts.mjs --pause --pages ${PAGES}`);
            await browser.close();
            process.exit(2);
          }
          console.error('  --pause set: fix the range by hand in the browser below, then press Enter.');
        }
      }
    }
    if (PAUSE) {
      console.error('\n>>> In the browser window:');
      console.error('    1. Click a period preset (5Y covers ~5 years) OR set the From/To dates by hand.');
      console.error('    2. Click Search. Solve the reCAPTCHA if one appears (automation trips it; a human usually passes silently).');
      console.error('    3. Wait for the announcements table to fill, then press Enter here to harvest.');
      await askEnter('');
      // Post-Enter sanity: confirm the table actually loaded a multi-day range before harvesting.
      const rows = await page.evaluate(EXTRACT).catch(() => []);
      const dates = rows.map(r => ddmmyyyyToISO(r.date)).filter(Boolean).sort();
      if (dates.length < 5) {
        console.error(`⚠ only ${rows.length} rows visible — the table may not have loaded (reCAPTCHA / search not run). Harvesting anyway; re-run if the result is thin.`);
      } else {
        console.error(`✓ table loaded — visible rows span ${dates[0]}…${dates[dates.length - 1]} (${rows.length} on this view). Harvesting…`);
      }
    }
    all = await harvestClickThrough(page, PAGES);
  } else {
    // ── Page mode (default, shallow) ──
    let emptyStreak = 0;
    for (let p = 1; p <= PAGES; p++) {
      try {
        await page.goto(BASE_PAGED + p, { waitUntil: 'domcontentloaded', timeout: 30000 });
        if (await isDenied(page)) { denied(); break; }
        await waitRows(page);
        const rows = await page.evaluate(EXTRACT);
        if (!rows.length) { if (++emptyStreak >= 3) { console.error(`stopping: ${emptyStreak} empty pages`); break; } }
        else emptyStreak = 0;
        all.push(...rows);
        console.error(`page ${p}: ${rows.length} events (total ${all.length})`);
        await page.waitForTimeout(400);
      } catch (e) { console.error(`page ${p} error: ${e.message}`); }
    }
  }
  await browser.close();

  const r = ingestCatalysts(all, 'tadawul');
  console.log('harvest+ingest:', JSON.stringify(r));
  console.log('db summary:', JSON.stringify(catalystsSummary()));
  process.exit(0);
}

function denied() {
  console.error('\n  Akamai "Access Denied" — Tadawul blocked this browser.');
  console.error('  Re-run HEADED on a real desktop:  HEADLESS=false node scripts/harvest_catalysts.mjs');
  console.error('  (headless/server is blocked; use Firecrawl stealth for automation.)\n');
}

main().catch(e => { console.error('FATAL', e.message); process.exit(1); });
