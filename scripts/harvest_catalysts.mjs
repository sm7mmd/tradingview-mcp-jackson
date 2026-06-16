/**
 * harvest_catalysts.mjs — scheduled Playwright harvester for the official Tadawul
 * issuer-announcements feed (the only method past the site's 403).
 *
 * Paginates ?page=N (URL pagination works), reads the JS-rendered DOM for each
 * announcement's 4-digit code + date + headline, and ingests via catalysts.mjs.
 * Dedup is idempotent, so it's safe to run daily (a few pages) or as a one-off
 * bulk backfill (many pages) to seed history for the event study.
 *
 * Usage:
 *   HEADLESS=false node scripts/harvest_catalysts.mjs            # 5 pages (daily)
 *   HEADLESS=false node scripts/harvest_catalysts.mjs --pages 60 # bulk backfill (~1mo)
 *
 * IMPORTANT — Tadawul is behind Akamai bot protection. HEADLESS chromium gets
 * "Access Denied". This harvester must run HEADED on a real desktop (HEADLESS=false,
 * needs a display — e.g. your Mac), where the real browser passes Akamai. For a true
 * headless/server cron, the working alternative is Firecrawl's stealth proxy (the
 * project's web-data provider) hitting the same URL — see scripts/import_catalysts.mjs
 * for the ingest side; point a firecrawl_scrape/extract at the feed and pipe events in.
 *
 * Requires: playwright (already in devDependencies).
 */
import { chromium } from 'playwright';
import { ingestCatalysts, catalystsSummary } from '../dashboard/catalysts.mjs';

const PAGES = (() => { const i = process.argv.indexOf('--pages'); return i > -1 ? +process.argv[i + 1] : 5; })();
const HEADLESS = process.env.HEADLESS !== 'false'; // default headless; set false on a real desktop to pass Akamai
const BASE = 'https://www.saudiexchange.sa/wps/portal/saudiexchange/newsandreports/issuer-news/issuer-announcements?locale=en&page=';
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

// Runs in the page: extract one page's announcements from the rendered DOM.
const EXTRACT = () => {
  const blocks = [...document.querySelectorAll('div,li,a')].map(e => (e.innerText || '').trim())
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

async function main() {
  const browser = await chromium.launch({ headless: HEADLESS, args: ['--disable-blink-features=AutomationControlled'] });
  const ctx = await browser.newContext({ userAgent: UA, locale: 'en-US', viewport: { width: 1440, height: 900 } });
  await ctx.addInitScript(() => { Object.defineProperty(navigator, 'webdriver', { get: () => undefined }); });
  const page = await ctx.newPage();
  const all = [];
  let emptyStreak = 0;

  for (let p = 1; p <= PAGES; p++) {
    try {
      await page.goto(BASE + p, { waitUntil: 'domcontentloaded', timeout: 30000 });
      if (await page.evaluate(() => /access denied/i.test(document.body.innerText) && document.body.innerText.length < 600)) {
        console.error('\n  Akamai "Access Denied" — Tadawul blocked this browser.');
        console.error('  Re-run HEADED on a real desktop:  HEADLESS=false node scripts/harvest_catalysts.mjs');
        console.error('  (headless/server is blocked; use Firecrawl stealth for automation.)\n');
        break;
      }
      // announcements are JS-injected — wait for at least one code/date block
      await page.waitForFunction(() => /\n\d{4,5}\n[\s\S]*\d{2}\/\d{2}\/20\d\d/.test(document.body.innerText), { timeout: 15000 }).catch(() => {});
      const rows = await page.evaluate(EXTRACT);
      if (!rows.length) { emptyStreak++; if (emptyStreak >= 3) { console.error(`stopping: ${emptyStreak} empty pages`); break; } }
      else emptyStreak = 0;
      all.push(...rows);
      console.error(`page ${p}: ${rows.length} events (total ${all.length})`);
      await page.waitForTimeout(400);
    } catch (e) { console.error(`page ${p} error: ${e.message}`); }
  }
  await browser.close();

  const r = ingestCatalysts(all, 'tadawul');
  console.log('harvest+ingest:', JSON.stringify(r));
  console.log('db summary:', JSON.stringify(catalystsSummary()));
  process.exit(0);
}
main().catch(e => { console.error('FATAL', e.message); process.exit(1); });
