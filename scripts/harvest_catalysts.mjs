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

// Best-effort: fill the "By Time Period" from/to date inputs and apply. Returns true if it
// found something to fill. Heuristic across input types — the site is a jQuery DataTables page;
// if this misses, use --pause and set the filter by hand.
async function setDateRange(page, fromISO, toISO) {
  const toSite = (iso) => { const [y, m, d] = iso.split('-'); return { iso, ddmmyyyy: `${d}/${m}/${y}` }; };
  const f = toSite(fromISO), t = toSite(toISO);
  const filled = await page.evaluate(({ f, t }) => {
    const norm = s => (s || '').toLowerCase();
    const inputs = [...document.querySelectorAll('input')];
    const find = (kws) => inputs.find(i => {
      const hay = norm(i.name) + norm(i.id) + norm(i.placeholder) + norm(i.getAttribute('aria-label'));
      return kws.some(k => hay.includes(k));
    });
    const setVal = (el, val) => { if (!el) return false; el.value = val; el.dispatchEvent(new Event('input', { bubbles: true })); el.dispatchEvent(new Event('change', { bubbles: true })); return true; };
    const dateInputs = inputs.filter(i => (i.type || '').toLowerCase() === 'date');
    let okF = false, okT = false;
    if (dateInputs.length >= 2) { okF = setVal(dateInputs[0], f.iso); okT = setVal(dateInputs[1], t.iso); }
    else {
      okF = setVal(find(['from', 'start', 'fromdate', 'datefrom']), f.ddmmyyyy);
      okT = setVal(find(['to', 'end', 'todate', 'dateto']), t.ddmmyyyy);
    }
    return okF || okT;
  }, { f, t });
  if (!filled) return false;
  // click an apply/search/go button
  for (const sel of ['button:has-text("Search")', 'button:has-text("Apply")', 'button:has-text("Go")', 'a:has-text("Search")', 'input[type="submit"]', '#search', '.search-btn']) {
    const el = page.locator(sel).first();
    if (await el.count().catch(() => 0)) { await el.click().catch(() => {}); break; }
  }
  await waitRows(page);
  return true;
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
      const ok = await setDateRange(page, FROM, TO);
      console.error(ok ? `date filter set ${FROM}→${TO} (verify in the browser)` : 'could not locate date inputs — falling back to current view; consider --pause');
    }
    if (PAUSE) {
      console.error('\n>>> Set the date range + any filters in the browser window, then press Enter here to harvest…');
      await askEnter('');
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
