/**
 * TASI Strategy Dashboard — HTTP Server
 * Usage: node dashboard/server.mjs
 */

import { createServer } from "node:http";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import CDP from "chrome-remote-interface";
import { getRules, updateRules } from "../src/rules-engine.js";
import { scoreHistory as dbScoreHistory, positions as dbPositions, alertRules as dbAlertRules, virtualPortfolio as dbVirtual, insiderBuys as dbInsiderBuys, blockDeals as dbBlockDeals } from "./db.js";
import * as dataCore from "../src/core/data.js";
import Anthropic from "@anthropic-ai/sdk";
import { runBacktest } from "./backtest.mjs";
import { runScreener, getUniverseByMarket, TASI_STOCKS, US_EQUITY_STOCKS, ETF_STOCKS, CRYPTO_STOCKS, COMMODITY_STOCKS, INDEX_FOR_MARKET, emaArray, calcRsi, atrCalc, rsiSeries, macdHist, volumeCheck, scoreBias, findSRLevels, detectDivergence, computeSeasonality, toYahooSym, fetchYahooOHLCV } from "../scripts/tasi_screener.mjs";
import { runBrief } from "../src/core/morning.js";
import { getFundamentals, scoreFundamentals } from "./fundamentals.mjs";
import { getShariaStatus, getAllStatuses } from "./sharia.mjs";
import * as chartCore from "../src/core/chart.js";
import { create as createAlert } from "../src/core/alerts.js";

const __dirname      = dirname(fileURLToPath(import.meta.url));
const PORT           = process.env.PORT || 3000;
const SCAN_CACHE     = join(__dirname, "scan-cache.json");
const PREV_SCAN_CACHE= join(__dirname, "prev-scan-cache.json");
const BRIEF_CACHE    = join(__dirname, "brief-cache.json");
const RULES_PATH     = resolve(__dirname, "../rules.json");
const UNIVERSE_PATH   = join(__dirname, "universe.json");
const SETTINGS_PATH   = join(__dirname, "settings.json");
const POSITIONS_PATH  = join(__dirname, "positions.json");
const VIRTUAL_PATH       = join(__dirname, "virtual_portfolio.json");
const SCORE_HISTORY_PATH    = join(__dirname, "score_history.json");
const ALERT_RULES_PATH      = join(__dirname, "alert_rules.json");
const AUTO_SCAN_LOG_PATH    = join(__dirname, "auto_scan_log.json");
const LAST_BLOCK_DEALS_PATH = join(__dirname, "last_block_deals.json");
const BLOCK_DEAL_LOG_PATH = join(__dirname, "block_deal_log.json");
const INSIDER_BUYS_PATH = join(__dirname, 'insider_buys.json');
const SCREENSHOTS_DIR = join(__dirname, "screenshots");
mkdirSync(SCREENSHOTS_DIR, { recursive: true });

// ── Auth ──────────────────────────────────────────────────────────────────────
const API_KEY = process.env.DASHBOARD_API_KEY || '';
if (!API_KEY) console.warn('[auth] DASHBOARD_API_KEY not set — dashboard is unprotected. Add it to .env to enable.');

function tickerDisplay(sym) { const i = sym.indexOf(":"); return i >= 0 ? sym.slice(i + 1) : sym; }

// ── Telegram ──────────────────────────────────────────────────────────────────
async function sendTelegram(token, chatId, text) {
  try {
    const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
    });
    return r.json();
  } catch (e) { return { ok: false, description: e.message }; }
}

// ── Claude AI Analysis ────────────────────────────────────────────────────────
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

async function getClaudeAnalysis(data) {
  const { name, sym, bias, score, maxScore, price, emas, rsi, macd_hist, vol_ratio, atr, rs_score, weekly, sharia, mode } = data;
  const isBear = ["STRONG SELL","SELL","AVOID"].includes(bias);
  const stop  = atr ? (isBear ? price + 1.5*atr : price - 1.5*atr) : null;
  const tgt1  = atr ? (isBear ? price - 1.5*atr : price + 1.5*atr) : null;
  const tgt2  = atr ? (isBear ? price - 3*atr   : price + 3*atr)   : null;
  const fmt   = v => v?.toFixed(2) ?? "N/A";

  const prompt = `You are a professional technical analyst reviewing a trading signal. Be specific, reference the actual numbers, no generic advice.

Stock: ${name} (${sym})
Signal: ${bias} | Score: ${score}/${maxScore} | Mode: ${mode === 'position' ? 'Long-Term (Daily + Weekly)' : mode === 'breakout' ? 'Breakout Hunter (Volume + RS)' : 'Short-Term Swing (Daily)'}

Technical data:
- Price: ${fmt(price)} | ATR(14): ${fmt(atr)}
- EMA stack: ${emas?.ema13 > emas?.ema34 && emas?.ema34 > emas?.ema89 ? "✓ Aligned (13>34>89)" : "✗ Not aligned"} | Above EMA 200: ${price > emas?.ema200 ? "✓" : "✗"} (200 EMA: ${fmt(emas?.ema200)})
- RSI(14): ${rsi?.toFixed(1) ?? "N/A"} | MACD histogram: ${macd_hist?.toFixed(4) ?? "N/A"} (${macd_hist > 0 ? "positive" : "negative"})
- Volume: ${vol_ratio}× average | RS vs index: ${rs_score != null ? (rs_score > 0 ? "+" : "") + rs_score + "%" : "N/A"}
${weekly ? `- Weekly EMA stack: ${weekly.ema_stack ? "✓" : "✗"} | Weekly above EMA 200: ${weekly.above200 == null ? "N/A" : weekly.above200 ? "✓" : "✗"} (${weekly.score}/4 pts)` : ""}
- Trade levels: Stop ${fmt(stop)} | Target 1 ${fmt(tgt1)} | Target 2 ${fmt(tgt2)}
${sharia ? `- Sharia: ${sharia.status} — ${sharia.basis}` : ""}

Write exactly 3 short paragraphs (no headers, no bullets):
1. WHY this signal is forming — what specific combination of indicators is creating this setup
2. KEY RISKS — what specific levels or conditions would invalidate this setup
3. TIMING — whether to enter now or wait, and what confirmation to look for

Max 130 words total. Be precise about prices and levels.`;

  const msg = await anthropic.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 280,
    messages: [{ role: "user", content: prompt }],
  });
  return msg.content[0].text;
}

// ── Market Regime ─────────────────────────────────────────────────────────────
async function getSymbolMetrics(meta) {
  // meta has { sym, label, flag, category, yahoo }
  const yahooSym = meta.yahoo || toYahooSym(meta.sym);
  const bars = await fetchYahooOHLCV(yahooSym, '1d', 260);
  if (!bars || bars.length < 20) return null;
  const closes = bars.map(b => b.close);
  const highs  = bars.map(b => b.high);
  const lows   = bars.map(b => b.low);
  const price  = closes[closes.length - 1];
  const prev   = closes[closes.length - 2];
  const change_pct = +((price - prev) / prev * 100).toFixed(2);
  const e13  = emaArray(closes, 13), e34 = emaArray(closes, 34);
  const e89  = emaArray(closes, 89), e200 = emaArray(closes, 200);
  const ema13 = e13[e13.length-1], ema34 = e34[e34.length-1];
  const ema89 = e89[e89.length-1], ema200 = e200[e200.length-1];
  const ema_stack = ema13 > ema34 && ema34 > ema89;
  const above_200 = ema200 ? price > ema200 : null;
  const rsiVals = rsiSeries(closes, 14);
  const rsiVal  = +(rsiVals[rsiVals.length-1] || 50).toFixed(1);
  const atr     = atrCalc(highs, lows, closes, 14);
  const atr_pct = atr ? +(atr / price * 100).toFixed(2) : null;
  const sl52 = bars.slice(-252);
  const hi52 = +Math.max(...sl52.map(b => b.high)).toFixed(2);
  const lo52 = +Math.min(...sl52.map(b => b.low)).toFixed(2);
  const pos52 = hi52 > lo52 ? Math.round((price - lo52) / (hi52 - lo52) * 100) : null;
  const perf20d = closes.length >= 21
    ? +((price - closes[closes.length-21]) / closes[closes.length-21] * 100).toFixed(2)
    : null;
  let trend = "ranging";
  if (ema_stack && above_200 && rsiVal > 52) trend = "bullish";
  else if (!ema_stack && above_200 === false && rsiVal < 48) trend = "bearish";
  return {
    sym: meta.sym, price: +price.toFixed(4), change_pct, trend, ema_stack, above_200,
    ema13: +ema13.toFixed(2), ema34: +ema34.toFixed(2), ema89: +ema89.toFixed(2),
    ema200: ema200 ? +ema200.toFixed(2) : null, rsi: rsiVal,
    atr: atr ? +atr.toFixed(4) : null, atr_pct, hi52, lo52, pos52, perf20d,
  };
}

async function computeRegime(market) {
  const yahoo = { tasi:'^TASI.SR', us:'^GSPC', etf:'^GSPC', crypto:'BTC-USD', commodity:'GC=F' };
  const yahooSym = yahoo[market] || '^TASI.SR';
  const meta = { sym: INDEX_FOR_MARKET[market] || INDEX_FOR_MARKET.tasi, yahoo: yahooSym };
  const data = await getSymbolMetrics(meta);
  if (!data) return null;
  return { ...data, market };
}

const OVERVIEW_SYMBOLS = [
  { sym: "TADAWUL:TASI",    label: "TASI",      flag: "🇸🇦", category: "index",     yahoo: "^TASI.SR" },
  { sym: "NYSE:SPY",        label: "S&P 500",   flag: "🇺🇸", category: "index",     yahoo: "SPY"      },
  { sym: "NASDAQ:QQQ",      label: "NASDAQ",    flag: "🇺🇸", category: "index",     yahoo: "QQQ"      },
  { sym: "TVC:USOIL",       label: "Oil (WTI)", flag: "🛢",  category: "commodity", yahoo: "CL=F"     },
  { sym: "TVC:GOLD",        label: "Gold",      flag: "🥇",  category: "commodity", yahoo: "GC=F"     },
  { sym: "TVC:SILVER",      label: "Silver",    flag: "🥈",  category: "commodity", yahoo: "SI=F"     },
  { sym: "BITSTAMP:BTCUSD", label: "Bitcoin",   flag: "₿",   category: "crypto",    yahoo: "BTC-USD"  },
];
let overviewCache = { data: null, ts: 0 };
const OVERVIEW_TTL = 20 * 60 * 1000;

// ── Finnhub Calendar ──────────────────────────────────────────────────────────
async function getEarningsCalendar(sym) {
  const token = state.settings?.finnhub_token;
  if (!token) return null;
  const base = sym.includes(":") ? sym.split(":")[1] : sym;
  const today = new Date().toISOString().split("T")[0];
  const ahead = new Date(Date.now() + 35 * 864e5).toISOString().split("T")[0];
  try {
    const r = await fetch(`https://finnhub.io/api/v1/calendar/earnings?from=${today}&to=${ahead}&symbol=${base}&token=${token}`);
    const d = await r.json();
    return d?.earningsCalendar?.[0] || null;
  } catch (_) { return null; }
}

// ── Macro Calendar ────────────────────────────────────────────────────────────
// Hardcoded 2025-2026 macro events. Add new rows each year.
// impact: 'high' | 'medium' | 'low'
// tasiImpact: 'bullish' | 'bearish' | 'neutral' | 'closed' | null (unknown until event)
const MACRO_EVENTS = [
  // ── Saudi Public Holidays 2026 (TASI closed) ──────────────────────────────
  { date: '2026-02-22', type: 'holiday', label: 'Saudi Founding Day', detail: 'TASI closed', impact: 'low', tasiImpact: 'closed' },
  { date: '2026-03-28', type: 'holiday', label: 'Eid Al-Fitr Holiday', detail: 'TASI closed (approx)', impact: 'low', tasiImpact: 'closed' },
  { date: '2026-03-29', type: 'holiday', label: 'Eid Al-Fitr Holiday', detail: 'TASI closed', impact: 'low', tasiImpact: 'closed' },
  { date: '2026-03-30', type: 'holiday', label: 'Eid Al-Fitr Holiday', detail: 'TASI closed', impact: 'low', tasiImpact: 'closed' },
  { date: '2026-03-31', type: 'holiday', label: 'Eid Al-Fitr Holiday', detail: 'TASI closed', impact: 'low', tasiImpact: 'closed' },
  { date: '2026-04-01', type: 'holiday', label: 'Eid Al-Fitr Holiday', detail: 'TASI closed', impact: 'low', tasiImpact: 'closed' },
  { date: '2026-06-04', type: 'holiday', label: 'Eid Al-Adha Holiday', detail: 'TASI closed (approx)', impact: 'low', tasiImpact: 'closed' },
  { date: '2026-06-05', type: 'holiday', label: 'Eid Al-Adha Holiday', detail: 'TASI closed', impact: 'low', tasiImpact: 'closed' },
  { date: '2026-06-06', type: 'holiday', label: 'Eid Al-Adha Holiday', detail: 'TASI closed', impact: 'low', tasiImpact: 'closed' },
  { date: '2026-06-07', type: 'holiday', label: 'Eid Al-Adha Holiday', detail: 'TASI closed', impact: 'low', tasiImpact: 'closed' },
  { date: '2026-09-23', type: 'holiday', label: 'Saudi National Day', detail: 'TASI closed', impact: 'low', tasiImpact: 'closed' },
  // ── US Federal Reserve (FOMC) 2026 ────────────────────────────────────────
  { date: '2026-01-28', type: 'fed',     label: 'FOMC Rate Decision', detail: 'US Federal Reserve interest rate decision', impact: 'high', tasiImpact: null },
  { date: '2026-03-18', type: 'fed',     label: 'FOMC Rate Decision', detail: 'US Federal Reserve interest rate decision', impact: 'high', tasiImpact: null },
  { date: '2026-05-06', type: 'fed',     label: 'FOMC Rate Decision', detail: 'US Federal Reserve interest rate decision', impact: 'high', tasiImpact: null },
  { date: '2026-06-17', type: 'fed',     label: 'FOMC Rate Decision', detail: 'US Federal Reserve interest rate decision', impact: 'high', tasiImpact: null },
  { date: '2026-07-29', type: 'fed',     label: 'FOMC Rate Decision', detail: 'US Federal Reserve interest rate decision', impact: 'high', tasiImpact: null },
  { date: '2026-09-16', type: 'fed',     label: 'FOMC Rate Decision', detail: 'US Federal Reserve interest rate decision', impact: 'high', tasiImpact: null },
  { date: '2026-11-04', type: 'fed',     label: 'FOMC Rate Decision', detail: 'US Federal Reserve interest rate decision', impact: 'high', tasiImpact: null },
  { date: '2026-12-16', type: 'fed',     label: 'FOMC Rate Decision', detail: 'US Federal Reserve interest rate decision', impact: 'high', tasiImpact: null },
  // ── SAMA (Saudi Central Bank) ─────────────────────────────────────────────
  // SAMA typically moves in sync with Fed; exact dates announced closer to meeting
  { date: '2026-03-19', type: 'sama',    label: 'SAMA Rate Decision', detail: 'Saudi Central Bank — follows Fed direction', impact: 'high', tasiImpact: null },
  { date: '2026-06-18', type: 'sama',    label: 'SAMA Rate Decision', detail: 'Saudi Central Bank — follows Fed direction', impact: 'high', tasiImpact: null },
  { date: '2026-09-17', type: 'sama',    label: 'SAMA Rate Decision', detail: 'Saudi Central Bank — follows Fed direction', impact: 'high', tasiImpact: null },
  { date: '2026-12-17', type: 'sama',    label: 'SAMA Rate Decision', detail: 'Saudi Central Bank — follows Fed direction', impact: 'high', tasiImpact: null },
  // ── OPEC / OPEC+ ─────────────────────────────────────────────────────────
  { date: '2026-05-28', type: 'opec',    label: 'OPEC+ Meeting', detail: 'Oil output policy decision — directly affects Saudi Aramco & energy sector', impact: 'high', tasiImpact: null },
  { date: '2026-11-26', type: 'opec',    label: 'OPEC+ Meeting', detail: 'Oil output policy decision — directly affects Saudi Aramco & energy sector', impact: 'high', tasiImpact: null },
  // ── US CPI (inflation) ────────────────────────────────────────────────────
  { date: '2026-01-15', type: 'cpi',     label: 'US CPI (Dec)', detail: 'US inflation data — influences Fed path & global risk appetite', impact: 'medium', tasiImpact: null },
  { date: '2026-02-12', type: 'cpi',     label: 'US CPI (Jan)', detail: 'US inflation data — influences Fed path & global risk appetite', impact: 'medium', tasiImpact: null },
  { date: '2026-03-12', type: 'cpi',     label: 'US CPI (Feb)', detail: 'US inflation data — influences Fed path & global risk appetite', impact: 'medium', tasiImpact: null },
  { date: '2026-04-10', type: 'cpi',     label: 'US CPI (Mar)', detail: 'US inflation data — influences Fed path & global risk appetite', impact: 'medium', tasiImpact: null },
  { date: '2026-05-12', type: 'cpi',     label: 'US CPI (Apr)', detail: 'US inflation data — influences Fed path & global risk appetite', impact: 'medium', tasiImpact: null },
  { date: '2026-06-11', type: 'cpi',     label: 'US CPI (May)', detail: 'US inflation data — influences Fed path & global risk appetite', impact: 'medium', tasiImpact: null },
  { date: '2026-07-15', type: 'cpi',     label: 'US CPI (Jun)', detail: 'US inflation data — influences Fed path & global risk appetite', impact: 'medium', tasiImpact: null },
  { date: '2026-08-13', type: 'cpi',     label: 'US CPI (Jul)', detail: 'US inflation data — influences Fed path & global risk appetite', impact: 'medium', tasiImpact: null },
  { date: '2026-09-11', type: 'cpi',     label: 'US CPI (Aug)', detail: 'US inflation data — influences Fed path & global risk appetite', impact: 'medium', tasiImpact: null },
  { date: '2026-10-14', type: 'cpi',     label: 'US CPI (Sep)', detail: 'US inflation data — influences Fed path & global risk appetite', impact: 'medium', tasiImpact: null },
  { date: '2026-11-12', type: 'cpi',     label: 'US CPI (Oct)', detail: 'US inflation data — influences Fed path & global risk appetite', impact: 'medium', tasiImpact: null },
  { date: '2026-12-11', type: 'cpi',     label: 'US CPI (Nov)', detail: 'US inflation data — influences Fed path & global risk appetite', impact: 'medium', tasiImpact: null },
  // ── US Non-Farm Payrolls ──────────────────────────────────────────────────
  { date: '2026-01-09', type: 'nfp',     label: 'US Jobs (NFP)', detail: 'Non-Farm Payrolls — labor market strength affects Fed policy', impact: 'medium', tasiImpact: null },
  { date: '2026-02-06', type: 'nfp',     label: 'US Jobs (NFP)', detail: 'Non-Farm Payrolls — labor market strength affects Fed policy', impact: 'medium', tasiImpact: null },
  { date: '2026-03-06', type: 'nfp',     label: 'US Jobs (NFP)', detail: 'Non-Farm Payrolls — labor market strength affects Fed policy', impact: 'medium', tasiImpact: null },
  { date: '2026-04-03', type: 'nfp',     label: 'US Jobs (NFP)', detail: 'Non-Farm Payrolls — labor market strength affects Fed policy', impact: 'medium', tasiImpact: null },
  { date: '2026-05-01', type: 'nfp',     label: 'US Jobs (NFP)', detail: 'Non-Farm Payrolls — labor market strength affects Fed policy', impact: 'medium', tasiImpact: null },
  { date: '2026-06-05', type: 'nfp',     label: 'US Jobs (NFP)', detail: 'Non-Farm Payrolls — labor market strength affects Fed policy', impact: 'medium', tasiImpact: null },
  { date: '2026-07-02', type: 'nfp',     label: 'US Jobs (NFP)', detail: 'Non-Farm Payrolls — labor market strength affects Fed policy', impact: 'medium', tasiImpact: null },
  { date: '2026-08-07', type: 'nfp',     label: 'US Jobs (NFP)', detail: 'Non-Farm Payrolls — labor market strength affects Fed policy', impact: 'medium', tasiImpact: null },
  { date: '2026-09-04', type: 'nfp',     label: 'US Jobs (NFP)', detail: 'Non-Farm Payrolls — labor market strength affects Fed policy', impact: 'medium', tasiImpact: null },
  { date: '2026-10-02', type: 'nfp',     label: 'US Jobs (NFP)', detail: 'Non-Farm Payrolls — labor market strength affects Fed policy', impact: 'medium', tasiImpact: null },
  { date: '2026-11-06', type: 'nfp',     label: 'US Jobs (NFP)', detail: 'Non-Farm Payrolls — labor market strength affects Fed policy', impact: 'medium', tasiImpact: null },
  { date: '2026-12-04', type: 'nfp',     label: 'US Jobs (NFP)', detail: 'Non-Farm Payrolls — labor market strength affects Fed policy', impact: 'medium', tasiImpact: null },
  // ── Saudi TASI Earnings Season ────────────────────────────────────────────
  { date: '2026-01-20', type: 'earnings', label: 'TASI Q4 Earnings Season', detail: 'Major Saudi companies report Q4 2025 results — expect elevated volatility', impact: 'medium', tasiImpact: null },
  { date: '2026-04-20', type: 'earnings', label: 'TASI Q1 Earnings Season', detail: 'Major Saudi companies report Q1 2026 results — expect elevated volatility', impact: 'medium', tasiImpact: null },
  { date: '2026-07-20', type: 'earnings', label: 'TASI Q2 Earnings Season', detail: 'Major Saudi companies report Q2 2026 results — expect elevated volatility', impact: 'medium', tasiImpact: null },
  { date: '2026-10-20', type: 'earnings', label: 'TASI Q3 Earnings Season', detail: 'Major Saudi companies report Q3 2026 results — expect elevated volatility', impact: 'medium', tasiImpact: null },
  // ── Jackson Hole (Fed annual symposium) ────────────────────────────────────
  { date: '2026-08-27', type: 'fed',     label: 'Jackson Hole Symposium', detail: 'Fed Chair annual speech — major policy signal for markets globally', impact: 'high', tasiImpact: null },
  // ── Saudi Vision 2030 / Saudi GDP ─────────────────────────────────────────
  { date: '2026-03-15', type: 'macro',   label: 'Saudi GDP Q4 2025', detail: 'Saudi quarterly GDP release — signals domestic economic health', impact: 'medium', tasiImpact: null },
  { date: '2026-06-15', type: 'macro',   label: 'Saudi GDP Q1 2026', detail: 'Saudi quarterly GDP release — signals domestic economic health', impact: 'medium', tasiImpact: null },
  { date: '2026-09-15', type: 'macro',   label: 'Saudi GDP Q2 2026', detail: 'Saudi quarterly GDP release — signals domestic economic health', impact: 'medium', tasiImpact: null },
  { date: '2026-12-15', type: 'macro',   label: 'Saudi GDP Q3 2026', detail: 'Saudi quarterly GDP release — signals domestic economic health', impact: 'medium', tasiImpact: null },
];

function getUpcomingEvents(daysAhead = 21) {
  const nowKSA   = new Date(Date.now() + 3 * 3600 * 1000);
  const todayStr = nowKSA.toISOString().slice(0, 10);
  const endDate  = new Date(nowKSA.getTime() + daysAhead * 86400 * 1000).toISOString().slice(0, 10);
  return MACRO_EVENTS
    .filter(e => e.date >= todayStr && e.date <= endDate)
    .sort((a, b) => a.date.localeCompare(b.date));
}

// Claude macro brief — cached for 24h per date
const MACRO_BRIEF_CACHE_PATH = join(__dirname, 'macro_brief_cache.json');
let macroBriefCache = { date: null, brief: null };

function loadMacroBriefCache() {
  try {
    if (existsSync(MACRO_BRIEF_CACHE_PATH))
      macroBriefCache = JSON.parse(readFileSync(MACRO_BRIEF_CACHE_PATH, 'utf8'));
  } catch (_) {}
}

async function getMacroBrief(forceRefresh = false) {
  const todayStr = new Date(Date.now() + 3 * 3600 * 1000).toISOString().slice(0, 10);
  if (!forceRefresh && macroBriefCache.date === todayStr && macroBriefCache.brief) {
    return macroBriefCache.brief;
  }

  const upcoming = getUpcomingEvents(14);
  const eventList = upcoming.length
    ? upcoming.map(e => `${e.date}: ${e.label} (${e.impact} impact)`).join('\n')
    : 'No major scheduled events in the next 14 days.';

  const prompt = `You are a macro analyst writing a single-sentence daily briefing for Saudi TASI equity traders.

Today: ${todayStr} (Saudi time)
Upcoming macro events (next 14 days):
${eventList}

Write ONE concise sentence (max 40 words) that:
1. Names the most market-moving event in the window
2. States whether the current macro backdrop is broadly risk-on or risk-off for TASI
3. Gives ONE specific thing traders should watch

No preamble. No "Note:". Just the sentence.`;

  try {
    const msg = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 120,
      messages: [{ role: 'user', content: prompt }],
    });
    const brief = msg.content[0]?.text?.trim() || '';
    macroBriefCache = { date: todayStr, brief };
    try { writeFileSync(MACRO_BRIEF_CACHE_PATH, JSON.stringify(macroBriefCache, null, 2)); } catch (_) {}
    return brief;
  } catch (e) {
    return `Macro brief unavailable: ${e.message}`;
  }
}

loadMacroBriefCache();

// ── SSE broadcast ─────────────────────────────────────────────────────────────
const sseClients = new Set();
function broadcastSSE(data) {
  const msg = `data: ${JSON.stringify(data)}\n\n`;
  for (const c of sseClients) {
    try { c.write(msg); } catch (_) { sseClients.delete(c); }
  }
}

// ── Live scanner ──────────────────────────────────────────────────────────────
let liveTimer = null;
let liveInterval = 10; // minutes

// ── Auto-scan scheduler (KSA = UTC+3, trading days Sun-Thu) ──────────────────
const AUTO_SCAN_TIMES = [
  { h: 10, m: 15, slot: 'open'      },
  { h: 11, m: 30, slot: 'morning'   },
  { h: 12, m: 45, slot: 'midday'    },
  { h: 14, m:  0, slot: 'afternoon' },
  { h: 15, m: 15, slot: 'closing'   },
];

let autoScanLog = {}; // { 'YYYY-MM-DD': ['morning', 'midday', 'afternoon'] }

function loadAutoScanLog() {
  try {
    if (existsSync(AUTO_SCAN_LOG_PATH)) autoScanLog = JSON.parse(readFileSync(AUTO_SCAN_LOG_PATH, 'utf8'));
  } catch (_) { autoScanLog = {}; }
}

function saveAutoScanLog() {
  try { writeFileSync(AUTO_SCAN_LOG_PATH, JSON.stringify(autoScanLog, null, 2)); } catch (_) {}
}

function getNextAutoScanSlot() {
  const nowKSA = new Date(Date.now() + 3 * 3600 * 1000);
  const day    = nowKSA.getUTCDay();
  const hKSA   = nowKSA.getUTCHours();
  const mKSA   = nowKSA.getUTCMinutes();
  const dateStr = nowKSA.toISOString().slice(0, 10);
  const done    = autoScanLog[dateStr] || [];

  // Check remaining slots today (if trading day and market hours)
  if (day >= 0 && day <= 4) {
    for (const { h, m, slot } of AUTO_SCAN_TIMES) {
      if (done.includes(slot)) continue;
      const slotMin = h * 60 + m;
      const nowMin  = hKSA * 60 + mKSA;
      if (slotMin > nowMin) {
        const msUntil = (slotMin - nowMin) * 60 * 1000 - nowKSA.getUTCSeconds() * 1000;
        return { slot, h, m, dateStr, msUntil };
      }
    }
  }

  // Find next trading day
  let daysAhead = 1;
  while (daysAhead <= 7) {
    const futureDay = (day + daysAhead) % 7;
    if (futureDay >= 0 && futureDay <= 4) {
      const first = AUTO_SCAN_TIMES[0];
      return { slot: first.slot, h: first.h, m: first.m, daysAhead };
    }
    daysAhead++;
  }
  return null;
}

function checkAutoScan() {
  const nowKSA = new Date(Date.now() + 3 * 3600 * 1000);
  const day    = nowKSA.getUTCDay(); // 0=Sun … 4=Thu; 5=Fri, 6=Sat
  if (day === 5 || day === 6) return; // weekend

  const hKSA   = nowKSA.getUTCHours();
  const mKSA   = nowKSA.getUTCMinutes();
  if (hKSA < 10 || hKSA >= 16) return; // outside market window

  const dateStr = nowKSA.toISOString().slice(0, 10);
  if (!autoScanLog[dateStr]) autoScanLog[dateStr] = [];

  for (const { h, m, slot } of AUTO_SCAN_TIMES) {
    if (autoScanLog[dateStr].includes(slot)) continue;
    const nowMin  = hKSA * 60 + mKSA;
    const slotMin = h * 60 + m;
    // Fire within a 5-minute window after scheduled time
    if (nowMin >= slotMin && nowMin < slotMin + 5) {
      autoScanLog[dateStr].push(slot);
      saveAutoScanLog();
      console.log(`[Auto-scan] Firing ${slot} slot at KSA ${hKSA}:${String(mKSA).padStart(2,'0')}`);
      broadcastSSE({ type: 'auto_scan_starting', slot, dateStr });
      startScan(null, state.scan.currentMarket || 'tasi', state.scan.mode || 'swing');
      break;
    }
  }
}

setInterval(checkAutoScan, 60 * 1000);
loadAutoScanLog();

// ── Screenshot ────────────────────────────────────────────────────────────────
async function captureScreenshot(filename) {
  let client;
  try {
    client = await CDP({ port: process.env.CDP_PORT || 9222 });
    const { data } = await client.Page.captureScreenshot({ format: "jpeg", quality: 75 });
    const fp = join(SCREENSHOTS_DIR, filename);
    writeFileSync(fp, Buffer.from(data, "base64"));
    return fp;
  } finally {
    if (client) { try { await client.close(); } catch (_) {} }
  }
}

const BIAS_RANK = { "STRONG BUY":0,"BUY":1,"WATCH":2,"SKIP":3,"AVOID":4,"SELL":5,"STRONG SELL":6 };
const BEAR_BIASES = new Set(["STRONG SELL","SELL","AVOID"]);

function getCritPasses(r) {
  const { ema13, ema34, ema89, ema200 } = r.emas || {};
  const bear = BEAR_BIASES.has(r.bias);
  return {
    emaStack: bear ? (ema13 < ema34 && ema34 < ema89) : (ema13 > ema34 && ema34 > ema89),
    ema200:   bear ? r.price < ema200 : r.price > ema200,
    rsi:      bear ? (r.rsi > 22 && r.rsi <= 48) : (r.rsi >= 52 && r.rsi < 78),
    macd:     bear ? r.macd_hist < 0 : r.macd_hist > 0,
    vol:      r.vol_ratio >= 1.2,
  };
}

const CRIT_LABELS = {
  emaStack: { pts: 2, bull: "EMA stack aligned (13>34>89)", bear: "EMA stack inverted (13<34<89)" },
  ema200:   { pts: 2, bull: "Price above EMA 200",         bear: "Price below EMA 200" },
  rsi:      { pts: 2, bull: "RSI in momentum zone (52–78)", bear: "RSI in weak zone (22–48)" },
  macd:     { pts: 1, bull: "MACD histogram positive",      bear: "MACD histogram negative" },
  vol:      { pts: 1, bull: "Volume above 1.2×",            bear: "Volume above 1.2×" },
};

function computeDelta(newResults, prevResults) {
  if (!prevResults?.length) return [];
  const prevMap = new Map(prevResults.map(r => [r.sym, r]));
  return newResults
    .map(r => {
      const prev = prevMap.get(r.sym);
      if (!prev) return null;
      const prevRank = BIAS_RANK[prev.bias] ?? 3;
      const currRank = BIAS_RANK[r.bias] ?? 3;
      if (prev.bias === r.bias && r.score === prev.score) return null;

      const prevCrit = getCritPasses(prev);
      const currCrit = getCritPasses(r);
      const bear = BEAR_BIASES.has(r.bias);
      const criteria_changes = Object.keys(CRIT_LABELS).map(key => {
        const was = !!prevCrit[key];
        const now = !!currCrit[key];
        if (was === now) return null;
        const { pts, bull, bear: bearLabel } = CRIT_LABELS[key];
        return { key, label: bear ? bearLabel : bull, pts, was, now };
      }).filter(Boolean);

      // Detect rapid direction reversal (e.g. STRONG SELL → BUY in one scan)
      const prevBearish = BEAR_BIASES.has(prev.bias);
      const currBearish = BEAR_BIASES.has(r.bias);
      const prevBullish = ['STRONG BUY','BUY','WATCH'].includes(prev.bias);
      const currBullish = ['STRONG BUY','BUY','WATCH'].includes(r.bias);
      const crossed_direction = (prevBearish && currBullish) || (prevBullish && currBearish);
      const rapid_reversal = crossed_direction && prev.score >= 5;

      // Count consecutive scans in previous direction from score history
      const hist = state.score_history[r.sym] || [];
      let prev_streak = 0;
      for (let i = hist.length - 1; i >= 0; i--) {
        const h = hist[i];
        const hBear = BEAR_BIASES.has(h.b);
        if ((prevBearish && hBear) || (prevBullish && !hBear && !BEAR_BIASES.has(h.b))) {
          prev_streak++;
        } else break;
      }

      const prev_metrics = {
        rsi:       prev.rsi,
        macd_hist: prev.macd_hist,
        vol_ratio: prev.vol_ratio,
        price:     prev.price,
        emas:      prev.emas,
      };

      // Score trajectory over last 3 scans (to show trend direction)
      const trajectory = hist.slice(-3).map(h => ({ d: h.d, s: h.s, b: h.b }));

      return {
        sym: r.sym, name: r.name,
        prev_bias: prev.bias, curr_bias: r.bias,
        prev_score: prev.score, curr_score: r.score,
        score_delta: r.score - prev.score,
        direction: currRank < prevRank ? "improved" : "degraded",
        criteria_changes,
        prev_metrics,
        rapid_reversal,
        prev_streak,      // how many scans stock was in its previous direction
        trajectory,       // last 3 scan scores for context
      };
    })
    .filter(Boolean)
    .sort((a, b) => Math.abs(b.score_delta) - Math.abs(a.score_delta));
}

const DEFAULT_UNIVERSE = {
  tasi:      TASI_STOCKS,
  us:        US_EQUITY_STOCKS,
  etf:       ETF_STOCKS,
  crypto:    CRYPTO_STOCKS,
  commodity: COMMODITY_STOCKS,
};

// ── In-memory state ───────────────────────────────────────────────────────────
const state = {
  scan:      { running: false, progress: 0, total: 0, results: [], lastRun: null, error: null, delta: [], currentMarket: "tasi", mode: 'swing', investMode: false, quickScan: false, quickSkipped: 0 },
  brief:     { running: false, results: null, lastRun: null, error: null },
  universe:  {},
  settings:  {},
  positions: {},
  virtual:       { cash: 100000, balance_start: 100000, positions: {}, trades: [] },
  score_history: {},
  alert_rules:   [],
};

function loadSettings() {
  if (existsSync(SETTINGS_PATH)) {
    try { state.settings = JSON.parse(readFileSync(SETTINGS_PATH, "utf8")); return; } catch (_) {}
  }
  state.settings = { telegram: { enabled: false, token: "", chat_id: "" }, notifications: { on_strong_buy: true, on_strong_sell: true }, finnhub_token: "", account_balance: 100000, risk_percent: 1.5 };
  writeFileSync(SETTINGS_PATH, JSON.stringify(state.settings, null, 2));
}

function loadPositions() {
  state.positions = dbPositions.getAll();
}

function loadVirtual() {
  state.virtual = dbVirtual.get();
}

function loadScoreHistory() {
  state.score_history = dbScoreHistory.allGrouped();
}

function updateScoreHistory(results) {
  const date = new Date().toISOString().split("T")[0];
  results.forEach(r => {
    const entry = { d: date, s: r.score, m: r.maxScore || 8, b: r.bias, p: r.price,
      md: state.scan.mode || 'swing',
      vc: r.vol_compression?.is_compressed || false,
      rb: r.rsi_buildup?.is_building || false,
      wh: r.whale_score || 0,
    };
    dbScoreHistory.upsert(r.sym, entry);
    if (!state.score_history[r.sym]) state.score_history[r.sym] = [];
    state.score_history[r.sym] = state.score_history[r.sym].filter(h => h.d !== date);
    state.score_history[r.sym].push(entry);
    state.score_history[r.sym] = state.score_history[r.sym].slice(-15);
  });
}

function loadAlertRules() {
  state.alert_rules = dbAlertRules.getAll();
}

function checkAlertRules(results) {
  if (!state.alert_rules.length) return;
  const today = new Date().toISOString().split("T")[0];
  const tg = state.settings?.telegram;
  let changed = false;
  state.alert_rules.forEach(rule => {
    if (rule.lastTriggered === today) return;
    const r = results.find(x => x.sym === rule.sym);
    if (!r) return;
    let triggered = false;
    if (rule.field === "score" && rule.op === "gte" && r.score >= rule.threshold) triggered = true;
    if (rule.field === "score" && rule.op === "lte" && r.score <= rule.threshold) triggered = true;
    if (rule.field === "rsi"   && rule.op === "gte" && r.rsi   >= rule.threshold) triggered = true;
    if (rule.field === "rsi"   && rule.op === "lte" && r.rsi   <= rule.threshold) triggered = true;
    if (rule.field === "bias"  && rule.op === "is"  && r.bias  === rule.threshold) triggered = true;
    if (!triggered) return;
    rule.lastTriggered = today; changed = true;
    dbAlertRules.upsert(rule);
    broadcastSSE({ type: "alert_rule_triggered", sym: r.sym, name: r.name, ruleName: rule.name, bias: r.bias, score: r.score });
    if (tg?.enabled && tg.token && tg.chat_id) {
      const msg = `📋 <b>Smart Alert: ${rule.name}</b>\n${r.name} (${tickerDisplay(r.sym)})\nScore: ${r.score}/${r.maxScore||8} | ${r.bias} | RSI: ${r.rsi?.toFixed(1)}`;
      sendTelegram(tg.token, tg.chat_id, msg).catch(() => {});
    }
  });
}

function toFinnhubSym(sym) {
  if (sym.startsWith("TADAWUL:")) return sym.replace("TADAWUL:", "") + ".SR";
  return sym.includes(":") ? sym.split(":")[1] : sym;
}

function loadUniverse() {
  if (existsSync(UNIVERSE_PATH)) {
    try { state.universe = JSON.parse(readFileSync(UNIVERSE_PATH, "utf8")); return; } catch (_) {}
  }
  state.universe = JSON.parse(JSON.stringify(DEFAULT_UNIVERSE));
  writeFileSync(UNIVERSE_PATH, JSON.stringify(state.universe, null, 2));
}

function loadCaches() {
  if (existsSync(SCAN_CACHE)) {
    try { const c = JSON.parse(readFileSync(SCAN_CACHE, "utf8")); state.scan.results = c.results || []; state.scan.lastRun = c.scanned_at || null; } catch (_) {}
  }
  if (existsSync(BRIEF_CACHE)) {
    try { const c = JSON.parse(readFileSync(BRIEF_CACHE, "utf8")); state.brief.results = c; state.brief.lastRun = c.generated_at || null; } catch (_) {}
  }
}
loadCaches();
loadUniverse();
loadSettings();
loadPositions();
loadVirtual();
loadScoreHistory();
loadAlertRules();

// ── Block Deals — Argaam HTML Scraper + Manual Fallback ──────────────────────
let blockDealsCache = { data: [], ts: 0, source: null, error: null };
const BLOCK_DEALS_TTL = 10 * 60 * 1000; // refresh every 10 min
const MANUAL_DEALS_PATH = join(__dirname, "block_deals.json");

// Arabic company name keywords → TADAWUL code
const ARABIC_NAME_MAP = {
  'الراجحي': '1120', 'راجحي': '1120',
  'الأهلي السعودي': '1180', 'البنك الأهلي': '1180', 'الأهلي': '1180',
  'بنك الرياض': '1010', 'الرياض': '1010',
  'ساب': '1030',
  'البنك السعودي الفرنسي': '1050', 'الفرنسي': '1050',
  'البنك العربي الوطني': '1080', 'العربي الوطني': '1080',
  'البلاد': '1140',
  'الإنماء': '1150', 'انماء': '1150',
  'السعودي للاستثمار': '1060',
  'الجزيرة': '1020',
  'أرامكو': '2222', 'ارامكو': '2222', 'أرامكو السعودية': '2222',
  'سابك': '2010',
  'تكنولوجيا': '2060', 'تصنيع': '2060',
  'صحارى': '2310',
  'بترورابغ': '2380', 'بترو رابغ': '2380',
  'كيان': '2350',
  'الاتصالات السعودية': '7010', 'stc': '7010',
  'موبايلي': '7020',
  'زين السعودية': '7030', 'زين': '7030',
  'إلم': '7203',
  'كهرباء': '5110', 'السعودية للكهرباء': '5110',
  'أكوا': '2082', 'اكوا': '2082',
  'المراعي': '2280', 'مراعي': '2280',
  'سافولا': '2050',
  'هرفي': '6002',
  'التنمية الغذائية': '2281',
  'جرير': '4190',
  'فتيحي': '4180',
  'إكسترا': '4003', 'اكسترا': '4003',
  'الدريس': '4200',
  'الحمادي': '4007',
  'دلة': '4004',
  'موواساة': '2160', 'مواساة': '2160',
  'الحبيب': '4013', 'سليمان الحبيب': '4013',
  'النخبة': '4005',
  'فقيه': '4017',
  'دار الأركان': '4300', 'دار أركان': '4300',
  'إعمار': '4310', 'اعمار الاقتصادية': '4310',
  'الرياض التنمية': '4150',
  'أسمنت السعودية': '3010', 'الأسمنت السعودية': '3010',
  'أسمنت ينبع': '3020', 'ينبع للأسمنت': '3020',
  'أسمنت العربية': '3030', 'العربية للأسمنت': '3030',
  'أسمنت المنطقة الجنوبية': '3040', 'الجنوبية للأسمنت': '3040',
  'أسمنت القصيم': '3050',
  'الكابلات السعودية': '2110',
  'صناعات متقدمة': '2120',
  'ألجين': '2170', 'الجين': '2170',
  'الخدمات الأرضية': '4031',
  'التعاونية': '8010', 'تاونية': '8010',
  'بوبا': '8020',
  'الراجحي للتأمين': '8230',
};

// Build a combined lookup: code → English name (for display)
const CODE_TO_NAME = {};
TASI_STOCKS.forEach(s => {
  const code = s.sym.split(':')[1];
  if (code) CODE_TO_NAME[code] = s.name;
});

function resolveArabicName(arabicName) {
  if (!arabicName) return null;
  const normalized = arabicName.trim();
  // Direct match
  if (ARABIC_NAME_MAP[normalized]) return ARABIC_NAME_MAP[normalized];
  // Substring match (longest key that appears in the name wins)
  let best = null, bestLen = 0;
  for (const [kw, code] of Object.entries(ARABIC_NAME_MAP)) {
    if (normalized.includes(kw) && kw.length > bestLen) {
      best = code; bestLen = kw.length;
    }
  }
  return best;
}

// Extract text content from a <td> cell (strip inner HTML tags)
function tdText(tdInner) {
  return tdInner.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').replace(/&nbsp;/g, ' ').trim();
}

// Parse daily summary article: "تاسي: N صفقة خاصة بقيمة X"
// Returns array of deals (one per company, aggregated across all sub-deals)
function parseSummaryArticle(html, pubDate) {
  const cells = [...html.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map(m => tdText(m[1]));

  const byCompany = {};
  let currentCode = null;
  let prevWasQty  = false;

  for (const cell of cells) {
    const num = parseFloat(cell);
    if (isNaN(num) || cell.length === 0) {
      const code = resolveArabicName(cell);
      if (code) {
        currentCode = code;
        prevWasQty  = false;
        if (!byCompany[code]) byCompany[code] = { price: 0, qty: 0, value: 0 };
      } else if (cell.length > 2) {
        // Unrecognized company name — stop accumulating under previous company
        currentCode = null;
        prevWasQty  = false;
      }
    } else if (currentCode) {
      const isInt   = Number.isInteger(num);
      const isLarge = num > 1000;
      if (isLarge && isInt) {
        byCompany[currentCode].qty += num;
        prevWasQty = true;
      } else if (!isLarge && !isInt && prevWasQty) {
        byCompany[currentCode].value += num * 1_000_000;
        prevWasQty = false;
      } else {
        // Small float = price / deal price
        if (!byCompany[currentCode].price) byCompany[currentCode].price = num;
        prevWasQty = false;
      }
    }
  }

  const ts = pubDate ? pubDate.toISOString() : new Date().toISOString();
  return Object.entries(byCompany)
    .filter(([, d]) => d.price > 0 && d.qty > 0 && d.value > 0)
    .map(([code, d]) => ({
      sym: `TADAWUL:${code}`,
      name: CODE_TO_NAME[code] || code,
      price: +d.price.toFixed(4),
      qty: d.qty,
      value: Math.round(d.value),
      time: ts,
      source: 'Argaam',
      arabicCompany: null,
    }));
}

// Parse an individual deal article: "صفقة خاصة على [COMPANY] بقيمة X"
// Returns a single deal object or null
function parseArgaamArticle(html, articleId, todayStr) {
  // Date check — Argaam format: "2026/05/07"
  let pubDate = null;
  const ldMatch = html.match(/"datePublished"\s*:\s*"([^"]+)"/);
  if (ldMatch) pubDate = new Date(ldMatch[1].replace(/\//g, '-'));
  if (pubDate && todayStr && pubDate.toISOString().slice(0, 10) !== todayStr) return null;

  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1].replace(/&[^;]+;/g, ' ').trim() : '';

  // Individual deal articles: "صفقة خاصة على [COMPANY] بقيمة"
  const companyMatch = title.match(/صفقة خاصة على (.+?) بقيمة/);
  if (!companyMatch) return null; // summary article — caller handles separately
  const arabicCompany = companyMatch[1].trim();

  const stockCode = resolveArabicName(arabicCompany);
  if (!stockCode) return null;

  // Value from title
  let value = 0;
  const valMatch = title.match(/بقيمة\s+([\d\.,]+)\s*(مليون|مليار)?/);
  if (valMatch) {
    let v = parseFloat(valMatch[1].replace(/,/g, ''));
    if (valMatch[2] === 'مليون') v *= 1_000_000;
    else if (valMatch[2] === 'مليار') v *= 1_000_000_000;
    value = v;
  }

  // Numbers from deal table: after "كمية الصفقة" heading until "وبحسب تداول"
  let price = 0, qty = 0;
  const tableSection = html.match(/كمية الصفقة[\s\S]{0,3000}?وبحسب تداول/);
  if (tableSection) {
    const nums = [...tableSection[0].matchAll(/>(\d[\d,\.]*)</g)]
      .map(m => parseFloat(m[1].replace(/,/g, '')))
      .filter(v => !isNaN(v) && v > 0);
    const priceCands = nums.filter(v => v <= 2000 && v >= 0.5 && !Number.isInteger(v));
    const qtyCands   = nums.filter(v => Number.isInteger(v) && v >= 100);
    if (priceCands.length) price = priceCands[0];
    if (qtyCands.length)   qty   = qtyCands[0];
    if (value === 0 && nums.length) {
      // last small float × 1M
      const lastSmall = nums.filter(v => v < 10000 && !Number.isInteger(v)).pop();
      if (lastSmall) value = lastSmall * 1_000_000;
    }
  }

  if (qty === 0 && value > 0 && price > 0) qty = Math.round(value / price);
  if (value === 0 && qty > 0 && price > 0) value = price * qty;
  if (price <= 0) return null;

  return {
    sym:  `TADAWUL:${stockCode}`,
    name: CODE_TO_NAME[stockCode] || arabicCompany,
    price: +price.toFixed(4),
    qty:   Math.round(qty),
    value: Math.round(value),
    time:  pubDate ? pubDate.toISOString() : new Date().toISOString(),
    source: 'Argaam',
    articleId,
    arabicCompany,
  };
}

async function fetchArgaamBlockDeals() {
  const BASE    = 'https://www.argaam.com';
  const TAG_URL = `${BASE}/ar/tags/id/24779/1/%D8%A7%D9%84%D8%B5%D9%81%D9%82%D8%A7%D8%AA-%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9`;
  const HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml',
    'Accept-Language': 'ar,en;q=0.8',
    'Referer': 'https://www.argaam.com/',
  };

  // Today in Saudi time (UTC+3)
  const todayStr = new Date(Date.now() + 3 * 3600 * 1000).toISOString().slice(0, 10);

  // Fetch tag page
  let tagHtml;
  try {
    const res = await fetch(TAG_URL, { headers: HEADERS, signal: AbortSignal.timeout(20000) });
    if (!res.ok) throw new Error(`Tag page HTTP ${res.status}`);
    tagHtml = await res.text();
  } catch (e) {
    return { deals: [], error: `Argaam tag page failed: ${e.message}` };
  }

  // Extract article IDs in page order, with their dates
  const articleIds = [...new Set(
    [...tagHtml.matchAll(/\/ar\/article\/articledetail\/id\/(\d+)/g)].map(m => m[1])
  )];
  if (!articleIds.length) return { deals: [], error: 'No article links found on Argaam tag page' };

  // Build date map: "2026/05/07" appears in a <div class="date"> before each article link
  const articleDateMap = {};
  const tagDatePat = /(\d{4}\/\d{2}\/\d{2})[\s\S]{0,500}?\/ar\/article\/articledetail\/id\/(\d+)/g;
  let dm;
  while ((dm = tagDatePat.exec(tagHtml)) !== null) {
    const [, d, id] = dm;
    if (!articleDateMap[id]) articleDateMap[id] = d.replace(/\//g, '-');
  }

  // Determine target articles (today's or fallback to most recent)
  const hasDates = Object.keys(articleDateMap).length > 0;
  const todayIds = hasDates ? articleIds.filter(id => articleDateMap[id] === todayStr) : [];
  const targetIds = todayIds.length ? todayIds : articleIds.slice(0, 8);

  const deals = [];
  const seenSyms = new Set();

  // Fetch each article and classify by its own <title> tag.
  // "صفقة خاصة على [company] بقيمة" → single-company article → parseArgaamArticle
  // Everything else on this tag page uses a table with multiple companies → parseSummaryArticle
  for (const id of targetIds) {
    try {
      const url = `${BASE}/ar/article/articledetail/id/${id}`;
      const res = await fetch(url, { headers: HEADERS, signal: AbortSignal.timeout(15000) });
      if (!res.ok) continue;
      const html = await res.text();

      const ldMatch  = html.match(/"datePublished"\s*:\s*"([^"]+)"/);
      const pubDate  = ldMatch ? new Date(ldMatch[1].replace(/\//g, '-')) : null;

      // Date guard: skip old articles when we have today's IDs
      if (pubDate && todayIds.length && pubDate.toISOString().slice(0, 10) !== todayStr) {
        await new Promise(r => setTimeout(r, 200)); continue;
      }

      const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
      const title = titleMatch ? titleMatch[1].trim() : '';

      if (/صفقة خاصة على .+ بقيمة/.test(title)) {
        // Single-company article
        const deal = parseArgaamArticle(html, id, todayStr);
        if (deal && !seenSyms.has(deal.sym)) { deals.push(deal); seenSyms.add(deal.sym); }
      } else {
        // Table-format article (TASI summary, نمو aggregate, etc.)
        const parsed = parseSummaryArticle(html, pubDate);
        parsed.forEach(d => { if (!seenSyms.has(d.sym)) { deals.push(d); seenSyms.add(d.sym); } });
      }
      await new Promise(r => setTimeout(r, 350));
    } catch (_) { /* skip */ }
  }

  return {
    deals,
    error: deals.length ? null : 'No TASI block deals found in today\'s Argaam articles. Market may be closed or no deals reported yet.',
  };
}

function loadManualDeals() {
  try {
    const data = JSON.parse(readFileSync(MANUAL_DEALS_PATH, "utf8"));
    const cutoff = Date.now() - 7 * 24 * 3600 * 1000; // keep 7 days for reference
    return data.filter(d => new Date(d.time).getTime() > cutoff);
  } catch (_) { return []; }
}

function saveManualDeals(deals) {
  writeFileSync(MANUAL_DEALS_PATH, JSON.stringify(deals, null, 2));
}

// Persist the last Argaam fetch that had results so we can show it when market is closed
function loadLastArgaamDeals() {
  return dbBlockDeals.getLastDeals();
}
function saveLastArgaamDeals(deals, date) {
  dbBlockDeals.setLastDeals(deals, date);
}

function loadInsiderBuys() {
  return dbInsiderBuys.getAll();
}
function saveInsiderBuys(data) {
  dbInsiderBuys.syncAll(data);
}

function appendBlockDealLog(deals, dateStr) {
  if (deals && deals.length) dbBlockDeals.appendDeals(deals, dateStr);
  return dbBlockDeals.getFrequency();
}

function getBlockDealFrequency(syms) {
  const log = dbBlockDeals.getFrequency();
  const cutoff7  = new Date(Date.now() -  7 * 86400 * 1000).toISOString().slice(0, 10);
  const cutoff30 = new Date(Date.now() - 30 * 86400 * 1000).toISOString().slice(0, 10);
  const result = {};
  for (const sym of syms) {
    const all  = (log[sym] || []).filter(d => d >= cutoff30);
    const week = all.filter(d => d >= cutoff7);
    if (all.length > 0) {
      result[sym] = {
        count30: all.length,
        count7:  week.length,
        days:    all,
        label:   week.length > 1 ? `${week.length}× this week` : all.length > 1 ? `${all.length}× in 30d` : null,
      };
    }
  }
  return result;
}

async function refreshBlockDeals() {
  if (Date.now() - blockDealsCache.ts < BLOCK_DEALS_TTL) return blockDealsCache;

  const manual = loadManualDeals();

  // Try Argaam automated fetch
  let argaamDeals = [], argaamError = null;
  try {
    const result = await fetchArgaamBlockDeals();
    argaamDeals = result.deals || [];
    argaamError = result.error || null;
  } catch (e) {
    argaamError = `Argaam fetch error: ${e.message}`;
  }

  // Persist if we got fresh Argaam deals today
  let staleArgaamDeals = [], staleDate = null;
  if (argaamDeals.length) {
    const todayStr = new Date(Date.now() + 3 * 3600 * 1000).toISOString().slice(0, 10);
    saveLastArgaamDeals(argaamDeals, todayStr);
    appendBlockDealLog(argaamDeals, todayStr);
  } else {
    // No deals today — load last known good
    const last = loadLastArgaamDeals();
    if (last?.deals?.length) {
      staleArgaamDeals = last.deals;
      staleDate = last.date;
    }
  }

  // Use today's Argaam deals if available, otherwise fall back to stale
  const argaamSource = argaamDeals.length ? argaamDeals : staleArgaamDeals;
  const isStale = argaamDeals.length === 0 && staleArgaamDeals.length > 0;

  // Merge with manual (deduplicate)
  const all = [...argaamSource];
  for (const m of manual) {
    const isDup = argaamSource.some(a =>
      a.sym === m.sym && Math.abs(new Date(a.time) - new Date(m.time)) < 3600000
    );
    if (!isDup) all.push(m);
  }

  const sources = [];
  if (argaamDeals.length)  sources.push(`Argaam today (${argaamDeals.length})`);
  else if (isStale)        sources.push(`Argaam ${staleDate} (last available)`);
  if (manual.length)       sources.push(`Manual (${manual.length})`);

  const allSyms = all.map(d => d.sym);
  const frequency = getBlockDealFrequency(allSyms);

  blockDealsCache = {
    data: all.sort((a, b) => b.value - a.value),
    ts: Date.now(),
    source: sources.length ? sources.join(' + ') : null,
    stale: isStale,
    stale_date: isStale ? staleDate : null,
    error: all.length === 0
      ? (argaamError || 'No block deals found. Market may be closed. Enter manually if needed.')
      : (isStale ? null : argaamError),
    frequency,
  };
  return blockDealsCache;
}

// ── Quick-scan: only re-scan stocks worth watching (BUY/WATCH + recent SELL signals) ─
function buildQuickScanList(market) {
  const cached = state.scan.results || [];
  if (!cached.length) return null; // No prior scan — need full scan first

  const universe = state.universe[market] || getUniverseByMarket(market);
  const QUICK_BIASES = new Set(["STRONG BUY", "BUY", "WATCH", "SELL", "STRONG SELL", "AVOID"]);

  // Include: stocks with actionable signals + any with recent score changes
  const quickSyms = new Set();
  cached.forEach(r => {
    if (QUICK_BIASES.has(r.bias)) quickSyms.add(r.sym);
  });
  // Also include ERROR/NO_DATA stocks to retry them
  cached.filter(r => r.bias === "ERROR" || r.bias === "NO_DATA").forEach(r => quickSyms.add(r.sym));
  // Always include at least top-scored SKIP stocks near promotion threshold
  cached.filter(r => r.bias === "SKIP" && r.score >= 4).forEach(r => quickSyms.add(r.sym));

  return universe.filter(s => quickSyms.has(s.sym));
}

// ── Runners ───────────────────────────────────────────────────────────────────
function startScan(symbols, market, mode = 'swing', isQuick = false) {
  if (state.scan.running) return { ok: false, message: "Scan already running" };
  const fullUniverse = state.universe[market || "tasi"] || getUniverseByMarket(market || "tasi");
  if (!symbols && market && market !== "all") {
    symbols = fullUniverse;
  }
  state.scan.running = true;
  state.scan.progress = 0;
  state.scan.results = [];
  state.scan.error = null;
  state.scan.currentMarket = market || "tasi";
  state.scan.mode = mode || 'swing';
  state.scan.investMode = state.scan.mode === 'position';
  state.scan.quickScan = isQuick;
  state.scan.quickSkipped = isQuick ? Math.max(0, fullUniverse.length - (symbols?.length || 0)) : 0;

  // Save previous cache for delta comparison
  if (existsSync(SCAN_CACHE)) {
    try { writeFileSync(PREV_SCAN_CACHE, readFileSync(SCAN_CACHE, "utf8")); } catch (_) {}
  }

  (async () => {
    try {
      const results = await runScreener({
        symbols,
        market: state.scan.currentMarket,
        mode: state.scan.mode,
        investMode: state.scan.investMode,
        onProgress(current, total, result) {
          state.scan.progress = current;
          state.scan.total = total;
          state.scan.results.push(result);
        },
      });
      state.scan.results = results;
      state.scan.lastRun = new Date().toISOString();

      // Stamp freshly scanned results with scan timestamp
      results.forEach(r => { r.scanned_at = state.scan.lastRun; });

      // Merge with existing cache for partial scans
      if (symbols && symbols.length > 0 && existsSync(SCAN_CACHE)) {
        try {
          const scannedSyms = new Set(symbols.map(s => (typeof s === "object" ? s.sym : s)));
          const cached = JSON.parse(readFileSync(SCAN_CACHE, "utf8"));
          // Preserve scanned_at on cached (stale) results so UI can flag them
          const existing = (cached.results || []).filter(r => !scannedSyms.has(r.sym));
          const merged = [...existing, ...results].sort((a, b) => (b.score || 0) - (a.score || 0));
          writeFileSync(SCAN_CACHE, JSON.stringify({ scanned_at: state.scan.lastRun, results: merged }, null, 2));
          state.scan.results = merged;
        } catch (_) {}
      } else {
        writeFileSync(SCAN_CACHE, JSON.stringify({ scanned_at: state.scan.lastRun, results }, null, 2));
      }

      // Broadcast score changes via SSE
      if (sseClients.size > 0 && state.scan.delta?.length > 0) {
        for (const d of state.scan.delta) {
          broadcastSSE({ type: "score_change", sym: d.sym, name: d.name, prev_bias: d.prev_bias, curr_bias: d.curr_bias, score_delta: d.score_delta, direction: d.direction });
        }
      }
      broadcastSSE({ type: "scan_complete", count: results.length, lastRun: state.scan.lastRun, quickScan: state.scan.quickScan, quickSkipped: state.scan.quickSkipped });

      // Compute delta vs previous scan
      try {
        const prev = existsSync(PREV_SCAN_CACHE) ? JSON.parse(readFileSync(PREV_SCAN_CACHE, "utf8")) : null;
        state.scan.delta = computeDelta(results, prev?.results || []);
      } catch (_) { state.scan.delta = []; }

      // Telegram notifications
      const tg = state.settings?.telegram;
      if (tg?.enabled && tg.token && tg.chat_id) {
        const cfg = state.settings.notifications || {};
        const sb = cfg.on_strong_buy  !== false ? results.filter(r => r.bias === "STRONG BUY")  : [];
        const ss = cfg.on_strong_sell !== false ? results.filter(r => r.bias === "STRONG SELL") : [];
        if (sb.length + ss.length > 0) {
          let msg = `🔔 <b>Mawjah Scan Alert</b>\n${new Date().toLocaleString("en-SA")}\n\n`;
          if (sb.length) {
            msg += `🟢 <b>STRONG BUY (${sb.length})</b>\n`;
            sb.slice(0, 8).forEach(r => { msg += `• <b>${tickerDisplay(r.sym)}</b> ${r.name} — ${r.score}/8\n`; });
            msg += "\n";
          }
          if (ss.length) {
            msg += `🔴 <b>STRONG SELL (${ss.length})</b>\n`;
            ss.slice(0, 8).forEach(r => { msg += `• <b>${tickerDisplay(r.sym)}</b> ${r.name} — ${r.score}/8\n`; });
          }
          sendTelegram(tg.token, tg.chat_id, msg).catch(() => {});
        }
      }

      // Score history + smart alert rules
      updateScoreHistory(state.scan.results);
      checkAlertRules(state.scan.results);

    } catch (err) {
      state.scan.error = err.message;
    } finally {
      state.scan.running = false;
    }
  })();

  return { ok: true, message: symbols ? `Scanning ${symbols.length} stocks` : "Scanning all stocks" };
}

function startBrief() {
  if (state.brief.running) return { ok: false, message: "Brief already running" };
  state.brief.running = true;
  state.brief.error = null;
  (async () => {
    try {
      const result = await runBrief();
      state.brief.results = result;
      state.brief.lastRun = new Date().toISOString();
      writeFileSync(BRIEF_CACHE, JSON.stringify(result, null, 2));
    } catch (err) {
      state.brief.error = err.message;
    } finally {
      state.brief.running = false;
    }
  })();
  return { ok: true, message: "Brief started" };
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function json(res, data, status = 200) {
  res.writeHead(status, { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" });
  res.end(JSON.stringify(data));
}

function html(res, filePath) {
  try {
    const content = readFileSync(filePath, "utf8");
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(content);
  } catch { res.writeHead(404); res.end("Not found"); }
}

function readBody(req) {
  return new Promise((resolve) => {
    let body = "";
    req.on("data", c => body += c);
    req.on("end", () => {
      try { resolve(body ? JSON.parse(body) : {}); } catch { resolve({}); }
    });
  });
}

// ── Server ────────────────────────────────────────────────────────────────────
const server = createServer(async (req, res) => {
  const url    = new URL(req.url, `http://localhost:${PORT}`);
  const path   = url.pathname;
  const method = req.method;

  if (method === "OPTIONS") {
    res.writeHead(204, { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE", "Access-Control-Allow-Headers": "Content-Type, Authorization, X-API-Key" });
    return res.end();
  }

  if (path === "/" || path === "/index.html") return html(res, join(__dirname, "index.html"));

  // Auth — protect all /api/* routes when DASHBOARD_API_KEY is set
  if (API_KEY && path.startsWith('/api/')) {
    const authHeader = req.headers['authorization'] || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : (req.headers['x-api-key'] || '');
    if (token !== API_KEY) {
      res.writeHead(401, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      return res.end(JSON.stringify({ error: 'Unauthorized' }));
    }
  }

  // Status
  if (path === "/api/status" && method === "GET") {
    return json(res, {
      scan:  { running: state.scan.running, progress: state.scan.progress, total: state.scan.total, count: state.scan.results.length, lastRun: state.scan.lastRun, error: state.scan.error, mode: state.scan.mode || 'swing' },
      brief: { running: state.brief.running, lastRun: state.brief.lastRun, error: state.brief.error },
    });
  }

  // Scan
  if (path === "/api/scan/results" && method === "GET") {
    return json(res, { scanned_at: state.scan.lastRun, running: state.scan.running, progress: state.scan.progress, total: state.scan.total, mode: state.scan.mode || 'swing', results: state.scan.results });
  }
  if (path === "/api/scan/start" && method === "POST") {
    const body = await readBody(req);
    return json(res, startScan(body.symbols || null, body.market || null, body.mode || (body.investMode ? 'position' : 'swing')));
  }

  if (path === "/api/scan/quick" && method === "POST") {
    const body = await readBody(req);
    const market = body.market || state.scan.currentMarket || "tasi";
    const quickList = buildQuickScanList(market);
    if (!quickList) return json(res, { ok: false, message: "No previous scan — run a full scan first" });
    const fullCount = (state.universe[market] || getUniverseByMarket(market)).length;
    return json(res, { ok: true, scanning: quickList.length, full: fullCount,
      ...startScan(quickList, market, state.scan.mode || 'swing', true) });
  }

  if (path === "/api/whale/activity" && method === "GET") {
    const results = (state.scan.results || [])
      .filter(r => r.whale_score != null && r.whale_score > 0)
      .sort((a, b) => (b.whale_score || 0) - (a.whale_score || 0))
      .map(r => {
        // Count consecutive recent scans with elevated whale activity
        const hist = (state.score_history[r.sym] || []).slice(-10);
        // Use bias as proxy: count consecutive recent BUY/STRONG BUY/WATCH scans from latest
        const bullishStreak = [...hist].reverse().findIndex(h => !['STRONG BUY','BUY','WATCH'].includes(h.b));
        const streak = bullishStreak === -1 ? hist.length : bullishStreak;
        return { ...r, streak };
      });
    return json(res, { results, lastRun: state.scan.lastRun });
  }

  if (path === "/api/whale/block-deals" && method === "GET") {
    blockDealsCache.ts = 0; // force refresh to include latest manual deals
    const cache = await refreshBlockDeals();
    return json(res, { deals: cache.data, source: cache.source, error: cache.error, ts: cache.ts, frequency: cache.frequency });
  }

  if (path === "/api/whale/block-deals/add" && method === "POST") {
    const body = await readBody(req);
    const code = (body.sym||'').toString().replace(/[^0-9]/g,'');
    if (!code || !body.price || !body.qty)
      return json(res, { ok: false, error: "sym, price and qty are required" }, 400);
    const existing = loadManualDeals();
    const deal = {
      sym:   `TADAWUL:${code}`,
      name:  body.name || (state.universe?.tasi || []).find(s => s.sym === `TADAWUL:${code}`)?.name || code,
      price: parseFloat(body.price),
      qty:   parseInt(body.qty),
      value: parseFloat(body.price) * parseInt(body.qty),
      time:  body.time || new Date().toISOString(),
      note:  body.note || '',
      source: 'Manual',
    };
    existing.unshift(deal);
    saveManualDeals(existing.slice(0, 100)); // keep last 100
    blockDealsCache.ts = 0; // invalidate cache
    return json(res, { ok: true, deal });
  }

  if (path === "/api/whale/block-deals/delete" && method === "POST") {
    const body = await readBody(req);
    // Match by sym + time (manual deals only — Argaam deals are not persisted)
    const deals = loadManualDeals().filter(d =>
      !(d.sym === body.sym && d.time === body.time)
    );
    saveManualDeals(deals);
    blockDealsCache.ts = 0;
    return json(res, { ok: true });
  }

  // Brief
  if (path === "/api/brief/results" && method === "GET") {
    return json(res, state.brief.results || { symbols_scanned: [], rules: {} });
  }
  if (path === "/api/brief/start" && method === "POST") {
    return json(res, startBrief());
  }

  // Rules — GET
  if (path === "/api/rules" && method === "GET") {
    try {
      const rules = getRules();
      return json(res, {
        bias_criteria: rules.bias_criteria || {},
        risk_rules:    rules.risk_rules    || [],
      });
    } catch (err) { return json(res, { error: err.message }, 500); }
  }

  // Rules — PUT (update bias_criteria and/or risk_rules)
  if (path === "/api/rules" && method === "PUT") {
    const body = await readBody(req);
    try {
      updateRules(body);
      return json(res, { ok: true });
    } catch (err) { return json(res, { error: err.message }, 500); }
  }

  // Fundamentals
  if (path === "/api/fundamentals" && method === "GET") {
    const sym = url.searchParams.get("sym");
    if (!sym) return json(res, { error: "sym param required" }, 400);
    try {
      const data  = await getFundamentals(sym);
      const sector = sym.includes("1010") || sym.includes("1020") || sym.includes("1030") ||
                     sym.includes("1050") || sym.includes("1060") || sym.includes("1070") ||
                     sym.includes("1080") ? "banking" : "general";
      const score = scoreFundamentals(data, sector);
      return json(res, { success: true, data, score });
    } catch (err) { return json(res, { success: false, error: err.message }, 502); }
  }

  // Market regime
  if (path === "/api/regime" && method === "GET") {
    const market = url.searchParams.get("market") || "tasi";
    try {
      const regime = await computeRegime(market);
      return json(res, regime || { error: "Could not compute regime" });
    } catch (err) { return json(res, { error: err.message }, 500); }
  }

  // Seasonality (fetches extra bars for the requested symbol)
  if (path === "/api/seasonality" && method === "GET") {
    const sym = url.searchParams.get("sym");
    if (!sym) return json(res, { error: "sym required" }, 400);
    try {
      await chartCore.setSymbol({ symbol: sym });
      await new Promise(r => setTimeout(r, 800));
      const ohlcv = await dataCore.getOhlcv({ count: 750 }); // ~3 years
      const bars = ohlcv.bars || [];
      const closes = bars.map(b => b.close);
      const times  = bars.map(b => b.time);
      const monthly = {};
      for (let i = 1; i < closes.length; i++) {
        const m = new Date((times[i] || 0) * 1000).getMonth() + 1;
        if (!monthly[m]) monthly[m] = [];
        monthly[m].push((closes[i] - closes[i-1]) / closes[i-1] * 100);
      }
      const seasonality = {};
      for (const [m, arr] of Object.entries(monthly)) {
        seasonality[m] = { avg: +(arr.reduce((a,b)=>a+b,0)/arr.length).toFixed(2), n: arr.length };
      }
      return json(res, { success: true, seasonality, bars: bars.length });
    } catch (err) { return json(res, { success: false, error: err.message }, 500); }
  }

  // Correlation (computes pairwise correlation from returns_20d in scan results)
  if (path === "/api/correlation" && method === "POST") {
    const body = await readBody(req);
    const syms = body.syms || [];
    const rows = syms.map(s => state.scan.results.find(r => r.sym === s)).filter(Boolean);
    if (rows.length < 2) return json(res, { matrix: [], syms: [] });
    const matrix = rows.map(a => rows.map(b => {
      const ra = a.returns_20d, rb = b.returns_20d;
      if (!ra || !rb || ra.length < 2) return null;
      const n = Math.min(ra.length, rb.length);
      const ma = ra.slice(0,n).reduce((s,v)=>s+v,0)/n;
      const mb = rb.slice(0,n).reduce((s,v)=>s+v,0)/n;
      let num=0, da=0, db=0;
      for (let i=0;i<n;i++){num+=(ra[i]-ma)*(rb[i]-mb);da+=(ra[i]-ma)**2;db+=(rb[i]-mb)**2;}
      const denom = Math.sqrt(da*db);
      return denom ? +(num/denom).toFixed(2) : null;
    }));
    return json(res, { matrix, syms: rows.map(r => r.sym), names: rows.map(r => r.name) });
  }

  // Claude AI analysis
  if (path === "/api/analyze" && method === "POST") {
    const body = await readBody(req);
    if (!process.env.ANTHROPIC_API_KEY) return json(res, { error: "ANTHROPIC_API_KEY not set" }, 400);
    try {
      const text = await getClaudeAnalysis({ ...body, mode: state.scan.mode || 'swing' });
      return json(res, { success: true, text });
    } catch (err) { return json(res, { success: false, error: err.message }, 500); }
  }

  // Backtest
  if (path === "/api/backtest" && method === "POST") {
    const body = await readBody(req);
    const { sym } = body;
    if (!sym) return json(res, { error: "sym required" }, 400);
    try {
      await chartCore.setSymbol({ symbol: sym });
      await new Promise(r => setTimeout(r, 1000));
      const ohlcv = await dataCore.getOhlcv({ count: 500 });
      const result = runBacktest(ohlcv.bars || [], { minScore: 7, holdBars: 40 });
      return json(res, result);
    } catch (err) { return json(res, { error: err.message }, 500); }
  }

  // Economic calendar (Finnhub)
  if (path === "/api/calendar" && method === "GET") {
    const sym = url.searchParams.get("sym");
    if (!sym) return json(res, { error: "sym required" }, 400);
    const event = await getEarningsCalendar(sym);
    return json(res, { event });
  }

  // SSE event stream
  if (path === "/api/events" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/event-stream", "Cache-Control": "no-cache", "Connection": "keep-alive", "Access-Control-Allow-Origin": "*" });
    res.write(`data: ${JSON.stringify({ type: "connected" })}\n\n`);
    sseClients.add(res);
    req.on("close", () => sseClients.delete(res));
    return; // keep connection open
  }

  // Live mode
  if (path === "/api/live/start" && method === "POST") {
    const body = await readBody(req);
    liveInterval = body.interval || 10;
    if (liveTimer) clearInterval(liveTimer);
    liveTimer = setInterval(() => {
      if (!state.scan.running) startScan(null, state.scan.currentMarket || "tasi", state.scan.mode || 'swing');
    }, liveInterval * 60 * 1000);
    broadcastSSE({ type: "live_started", interval: liveInterval });
    return json(res, { ok: true, interval: liveInterval });
  }
  if (path === "/api/live/stop" && method === "POST") {
    if (liveTimer) { clearInterval(liveTimer); liveTimer = null; }
    broadcastSSE({ type: "live_stopped" });
    return json(res, { ok: true });
  }
  if (path === "/api/live/status" && method === "GET") {
    return json(res, { active: !!liveTimer, interval: liveInterval });
  }

  // Settings
  if (path === "/api/settings" && method === "GET") { return json(res, state.settings); }
  if (path === "/api/settings" && method === "PUT") {
    const body = await readBody(req);
    try {
      state.settings = { ...state.settings, ...body };
      writeFileSync(SETTINGS_PATH, JSON.stringify(state.settings, null, 2));
      return json(res, { ok: true });
    } catch (err) { return json(res, { error: err.message }, 500); }
  }

  // Positions
  if (path === "/api/positions" && method === "GET") { return json(res, state.positions); }
  if (path === "/api/positions" && method === "PUT") {
    const body = await readBody(req);
    try {
      state.positions = body;
      dbPositions.setAll(state.positions);
      return json(res, { ok: true });
    } catch (err) { return json(res, { error: err.message }, 500); }
  }

  // Telegram test
  if (path === "/api/notify/test" && method === "POST") {
    const tg = state.settings?.telegram;
    if (!tg?.token || !tg?.chat_id) return json(res, { ok: false, error: "Token and chat_id required" }, 400);
    const r = await sendTelegram(tg.token, tg.chat_id, "✅ <b>Mawjah</b> — Notifications connected!");
    return json(res, r);
  }

  // Live quote (sets chart to sym, reads quote)
  if (path === "/api/quote" && method === "GET") {
    const sym = url.searchParams.get("sym");
    if (!sym) return json(res, { error: "sym required" }, 400);
    try {
      await chartCore.setSymbol({ symbol: sym });
      await new Promise(r => setTimeout(r, 800));
      const q = await dataCore.getQuote({});
      return json(res, q);
    } catch (err) { return json(res, { success: false, error: err.message }, 502); }
  }

  // Chart screenshot
  if (path === "/api/chart/screenshot" && method === "POST") {
    const body = await readBody(req);
    try {
      if (body.sym) {
        await chartCore.setSymbol({ symbol: body.sym });
        await new Promise(r => setTimeout(r, 1500));
      }
      const filename = `chart-${Date.now()}.jpg`;
      await captureScreenshot(filename);
      return json(res, { success: true, url: `/screenshots/${filename}` });
    } catch (err) { return json(res, { success: false, error: err.message }, 500); }
  }

  // Serve screenshot files
  if (path.startsWith("/screenshots/") && method === "GET") {
    const filename = path.slice("/screenshots/".length).replace(/[^a-zA-Z0-9._-]/g, "");
    const fp = join(SCREENSHOTS_DIR, filename);
    if (existsSync(fp)) {
      res.writeHead(200, { "Content-Type": "image/jpeg", "Cache-Control": "max-age=3600" });
      return res.end(readFileSync(fp));
    }
    res.writeHead(404); return res.end("Not found");
  }

  // Scan delta
  if (path === "/api/scan/delta" && method === "GET") {
    return json(res, { delta: state.scan.delta || [], lastRun: state.scan.lastRun });
  }

  // Pre-signal: stocks approaching a BUY or SELL signal
  if (path === "/api/scan/presignal" && method === "GET") {
    const results = state.scan.results || [];

    // ── Helpers ────────────────────────────────────────────────────────────────
    // Linear regression slope over score history (positive = improving)
    function histSlope(hist) {
      if (hist.length < 2) return 0;
      const n = hist.length, mx = (n-1)/2;
      const my = hist.reduce((a,b) => a+b.s, 0) / n;
      let num = 0, den = 0;
      hist.forEach(({s}, x) => { num += (x-mx)*(s-my); den += (x-mx)**2; });
      return den === 0 ? 0 : +(num/den).toFixed(2);
    }

    // Consecutive scans with a flag true (most recent first)
    function accumDuration(sym, field) {
      const hist = (state.score_history[sym] || []).slice().reverse();
      let n = 0;
      for (const h of hist) { if (h[field]) n++; else break; }
      return n;
    }

    // Confidence score 0–10 for ranking within a category
    function confidence(r, approaching, slope) {
      let c = 0;
      if (approaching === 'BUY' || approaching === 'EXIT_RISK') {
        c += Math.max(0, 2 - (r.proximity?.pts_to_buy || 2)) * 2;
      } else if (approaching === 'SELL') {
        c += Math.max(0, 2 - (r.proximity?.pts_to_sell || 2)) * 2;
      }
      c += Math.min(3, Math.max(0, Math.abs(slope) * 2));
      if (r.vol_compression?.is_compressed) c += 1;
      if (r.rsi_buildup?.is_building)       c += 1;
      if (r.whale_score >= 5) c += 2; else if (r.whale_score >= 3) c += 1;
      if ((approaching === 'BUY' || approaching === 'ACCUMULATION') && r.market_regime === 'bull') c += 1;
      return Math.min(10, Math.round(c));
    }

    // Is this sym held in real or virtual portfolio?
    function isHeld(sym) {
      return !!(state.positions?.[sym] || state.virtual?.positions?.[sym]);
    }

    // Plain-language description of what to watch for
    function watchFor(approaching, r, slope, vcDur, rbDur) {
      if (approaching === 'BUY') {
        const pts = r.proximity?.pts_to_buy || 0;
        return `${pts} point${pts!==1?'s':''} from BUY — watch for ${r.proximity?.emaStack < 0 ? 'EMA 13 crossing above EMA 34' : 'volume surge above 1.5×'} to confirm`;
      }
      if (approaching === 'SELL') {
        return `${r.proximity?.pts_to_sell || 0} pts from SELL — watch for MACD turning negative and RSI breaking below 48`;
      }
      if (approaching === 'RECOVERY') {
        return `Bear score shrinking — watch for MACD histogram crossing zero as confirmation of reversal`;
      }
      if (approaching === 'EXIT_RISK') {
        return `Score declining ${Math.abs(slope).toFixed(1)} pts/scan — consider reducing if RSI drops below 50 or MACD turns negative`;
      }
      if (approaching === 'ACCUMULATION') {
        const parts = [];
        if (r.vol_compression?.is_compressed) parts.push(`coiling ${vcDur} scan${vcDur!==1?'s':''}`);
        if (r.rsi_buildup?.is_building)       parts.push(`RSI building ${rbDur} scan${rbDur!==1?'s':''}`);
        return `${parts.join(' · ')} — watch for volume spike above 2× average as breakout trigger`;
      }
      return '';
    }

    const presignal = [];

    for (const r of results) {
      if (!r.proximity && !r.vol_compression && !r.rsi_buildup) continue;
      const hist = (state.score_history[r.sym] || []).slice(-7);
      const slope = histSlope(hist);
      const held  = isHeld(r.sym);
      const vcDur = accumDuration(r.sym, 'vc');
      const rbDur = accumDuration(r.sym, 'rb');

      // ── EXIT RISK: bullish stock whose score is declining ─────────────────
      if (held && ['STRONG BUY','BUY','WATCH'].includes(r.bias) && slope < -0.3 && hist.length >= 3) {
        const last3 = hist.slice(-3);
        const decliningTwice = last3[2].s < last3[1].s && last3[1].s < last3[0].s;
        const rsiWeakening   = r.rsi != null && r.rsi < 60;
        if (decliningTwice || (slope < -0.5 && rsiWeakening)) {
          presignal.push({
            sym: r.sym, name: r.name, ar: r.ar||null, bias: r.bias, score: r.score, maxScore: r.maxScore || 8,
            approaching: 'EXIT_RISK', trend: slope, history: hist,
            rsi: r.rsi, macd_hist: r.macd_hist, whale_score: r.whale_score,
            proximity: r.proximity, held: true,
            confidence: confidence(r, 'EXIT_RISK', slope),
            watch_for: watchFor('EXIT_RISK', r, slope, vcDur, rbDur),
            accum_duration: 0,
          });
          continue;
        }
      }

      // ── APPROACHING BUY ───────────────────────────────────────────────────
      // WATCH or SKIP (score ≥ 3) — not AVOID which is bearish territory
      if (['WATCH','SKIP'].includes(r.bias) && r.score >= 3 &&
          r.proximity?.pts_to_buy <= 2 && slope >= 0 && r.proximity?.emaStack > -2) {
        presignal.push({
          sym: r.sym, name: r.name, ar: r.ar||null, bias: r.bias, score: r.score, maxScore: r.maxScore || 8,
          approaching: 'BUY', trend: slope, history: hist,
          rsi: r.rsi, macd_hist: r.macd_hist, whale_score: r.whale_score,
          proximity: r.proximity, held,
          vol_compression: r.vol_compression || null, rsi_buildup: r.rsi_buildup || null,
          confidence: confidence(r, 'BUY', slope),
          watch_for: watchFor('BUY', r, slope, vcDur, rbDur),
          accum_duration: Math.max(vcDur, rbDur),
        });
        continue;
      }

      // ── APPROACHING SELL ──────────────────────────────────────────────────
      if (['WATCH','SKIP'].includes(r.bias) &&
          r.proximity?.pts_to_sell <= 2 && slope <= 0 && r.proximity?.emaStack < 2) {
        presignal.push({
          sym: r.sym, name: r.name, ar: r.ar||null, bias: r.bias, score: r.score, maxScore: r.maxScore || 8,
          approaching: 'SELL', trend: slope, history: hist,
          rsi: r.rsi, macd_hist: r.macd_hist, whale_score: r.whale_score,
          proximity: r.proximity, held,
          confidence: confidence(r, 'SELL', slope),
          watch_for: watchFor('SELL', r, slope, vcDur, rbDur),
          accum_duration: 0,
        });
        continue;
      }

      // ── RECOVERY (bearish stock with shrinking bear score) ─────────────────
      if (['STRONG SELL','SELL','AVOID'].includes(r.bias) && hist.length >= 2 &&
          slope < 0 && r.proximity?.macd != null) {
        // MACD normalised to price — threshold 0.05% of price
        const macdThresh = -(r.price || 10) * 0.0005;
        if (r.proximity.macd > macdThresh) {
          presignal.push({
            sym: r.sym, name: r.name, ar: r.ar||null, bias: r.bias, score: r.score, maxScore: r.maxScore || 8,
            approaching: 'RECOVERY', trend: slope, history: hist,
            rsi: r.rsi, macd_hist: r.macd_hist, whale_score: r.whale_score,
            proximity: r.proximity, held,
            confidence: confidence(r, 'RECOVERY', slope),
            watch_for: watchFor('RECOVERY', r, slope, vcDur, rbDur),
            accum_duration: 0,
          });
          continue;
        }
      }

      // ── ACCUMULATION (compression or RSI buildup, not already captured) ───
      if (r.vol_compression?.is_compressed || r.rsi_buildup?.is_building) {
        // Normalise duration threshold: only show if building for ≥2 scans
        if (vcDur >= 2 || rbDur >= 2) {
          presignal.push({
            sym: r.sym, name: r.name, ar: r.ar||null, bias: r.bias, score: r.score, maxScore: r.maxScore || 8,
            approaching: 'ACCUMULATION', trend: slope, history: hist,
            rsi: r.rsi, macd_hist: r.macd_hist, whale_score: r.whale_score,
            proximity: r.proximity || null, held,
            vol_compression: r.vol_compression || null, rsi_buildup: r.rsi_buildup || null,
            confidence: confidence(r, 'ACCUMULATION', slope),
            watch_for: watchFor('ACCUMULATION', r, slope, vcDur, rbDur),
            accum_duration: Math.max(vcDur, rbDur),
          });
        }
      }
    }

    // Sort: EXIT_RISK first (most urgent), then by category order, then by confidence desc
    const order = { EXIT_RISK:0, BUY:1, RECOVERY:2, ACCUMULATION:3, SELL:4 };
    presignal.sort((a, b) => {
      const catDiff = (order[a.approaching]??5) - (order[b.approaching]??5);
      if (catDiff !== 0) return catDiff;
      return b.confidence - a.confidence; // higher confidence first within category
    });

    return json(res, { presignal, lastRun: state.scan.lastRun, count: presignal.length });
  }

  // Alert creation
  if (path === "/api/alert/create" && method === "POST") {
    const body = await readBody(req);
    try {
      if (body.sym) {
        await chartCore.setSymbol({ symbol: body.sym });
        await new Promise(r => setTimeout(r, 800));
      }
      const result = await createAlert({
        condition: body.condition || "crossing",
        price: body.price,
        message: body.message || `${tickerDisplay(body.sym || "")} @ ${body.price}`,
      });
      return json(res, result);
    } catch (err) { return json(res, { success: false, error: err.message }, 500); }
  }

  // Universe — GET all
  if (path === "/api/universe" && method === "GET") {
    return json(res, state.universe);
  }

  // Universe — PUT (save one market's list)
  if (path === "/api/universe" && method === "PUT") {
    const body = await readBody(req);
    try {
      if (body.market && Array.isArray(body.symbols)) {
        state.universe[body.market] = body.symbols;
        writeFileSync(UNIVERSE_PATH, JSON.stringify(state.universe, null, 2));
        return json(res, { ok: true, count: body.symbols.length });
      }
      return json(res, { error: "market and symbols required" }, 400);
    } catch (err) { return json(res, { error: err.message }, 500); }
  }

  // Universe — reset one market to built-in defaults
  if (path === "/api/universe/reset" && method === "POST") {
    const body = await readBody(req);
    const mkt = body.market;
    if (mkt && DEFAULT_UNIVERSE[mkt]) {
      state.universe[mkt] = DEFAULT_UNIVERSE[mkt];
      writeFileSync(UNIVERSE_PATH, JSON.stringify(state.universe, null, 2));
      return json(res, { ok: true, count: DEFAULT_UNIVERSE[mkt].length });
    }
    return json(res, { error: "Unknown market" }, 400);
  }

  // Score history
  if (path === "/api/score-history" && method === "GET") {
    return json(res, state.score_history);
  }

  // Finnhub News
  if (path === "/api/news" && method === "GET") {
    const sym = url.searchParams.get("sym");
    const token = state.settings?.finnhub_token;
    if (!sym || !token) return json(res, { articles: [] });
    const fSym = toFinnhubSym(sym);
    const to   = new Date().toISOString().split("T")[0];
    const from = new Date(Date.now() - 7*864e5).toISOString().split("T")[0];
    try {
      const r = await fetch(`https://finnhub.io/api/v1/company-news?symbol=${fSym}&from=${from}&to=${to}&token=${token}`);
      const d = await r.json();
      return json(res, { articles: Array.isArray(d) ? d.slice(0,6) : [] });
    } catch (e) { return json(res, { articles: [], error: e.message }); }
  }

  // Finnhub Dividends
  if (path === "/api/dividends" && method === "GET") {
    const sym = url.searchParams.get("sym");
    const token = state.settings?.finnhub_token;
    if (!sym || !token) return json(res, { dividends: [] });
    const fSym = toFinnhubSym(sym);
    try {
      const r = await fetch(`https://finnhub.io/api/v1/stock/dividend2?symbol=${fSym}&token=${token}`);
      const d = await r.json();
      return json(res, { dividends: d?.data?.slice(0,4) || [] });
    } catch (e) { return json(res, { dividends: [], error: e.message }); }
  }

  // Open symbol on TradingView chart
  if (path === "/api/tv/open-symbol" && method === "POST") {
    const body = await readBody(req);
    if (!body.sym) return json(res, { error: "sym required" }, 400);
    try { await chartCore.setSymbol({ symbol: body.sym }); return json(res, { ok: true }); }
    catch (e) { return json(res, { ok: false, error: e.message }); }
  }

  // Multi-timeframe alignment (4H + D + W)
  if (path === "/api/tf-align" && method === "GET") {
    const sym = url.searchParams.get("sym");
    if (!sym) return json(res, { error: "sym required" }, 400);
    const result = {};
    const calcTF = (bars) => {
      if (!bars || bars.length < 20) return null;
      const c = bars.map(b => b.close);
      const e13 = emaArray(c,13), e34 = emaArray(c,34), e89 = emaArray(c,89), e200 = emaArray(c,200);
      const rv = rsiSeries(c,14);
      return { ema_stack: e13[e13.length-1] > e34[e34.length-1] && e34[e34.length-1] > e89[e89.length-1], above_200: e200.length ? c[c.length-1] > e200[e200.length-1] : null, rsi: +(rv[rv.length-1]||50).toFixed(1) };
    };
    try {
      await chartCore.setSymbol({ symbol: sym });
      await new Promise(r => setTimeout(r, 700));
      for (const tf of ["240","D","W"]) {
        try {
          await chartCore.setTimeframe({ timeframe: tf });
          await new Promise(r => setTimeout(r, 600));
          const bars = (await dataCore.getOhlcv({ count: 150 })).bars || [];
          result[tf === "240" ? "h4" : tf === "D" ? "d" : "w"] = calcTF(bars);
        } catch (_) {}
      }
      // Restore daily
      try { await chartCore.setTimeframe({ timeframe: "D" }); } catch (_) {}
      return json(res, { success: true, sym, ...result });
    } catch (e) { return json(res, { error: e.message }); }
  }

  // Smart Alert Rules
  if (path === "/api/alert-rules" && method === "GET") { return json(res, state.alert_rules); }

  if (path === "/api/alert-rules" && method === "POST") {
    const body = await readBody(req);
    if (!body.sym || !body.field || !body.op) return json(res, { error: "sym, field, op required" }, 400);
    const rule = { id: Date.now().toString(), ...body, lastTriggered: null };
    state.alert_rules.push(rule);
    dbAlertRules.upsert(rule);
    return json(res, { ok: true, rule });
  }

  if (path.startsWith("/api/alert-rules/") && method === "DELETE") {
    const id = path.split("/").pop();
    state.alert_rules = state.alert_rules.filter(r => r.id !== id);
    dbAlertRules.delete(id);
    return json(res, { ok: true });
  }

  // Global Markets Overview
  if (path === "/api/markets/overview" && method === "GET") {
    const force = url.searchParams.get("force") === "1";
    if (!force && overviewCache.data && Date.now() - overviewCache.ts < OVERVIEW_TTL) {
      return json(res, { success: true, data: overviewCache.data, cached: true, ts: overviewCache.ts });
    }
    try {
      const results = [];
      for (const meta of OVERVIEW_SYMBOLS) {
        try {
          const m = await getSymbolMetrics(meta);
          results.push(m ? { ...m, ...meta } : { ...meta, error: "No data" });
        } catch (e) { results.push({ ...meta, error: e.message }); }
      }
      overviewCache = { data: results, ts: Date.now() };
      return json(res, { success: true, data: results, cached: false, ts: overviewCache.ts });
    } catch (err) { return json(res, { error: err.message }, 500); }
  }

  // Virtual Portfolio
  if (path === "/api/virtual" && method === "GET") {
    return json(res, state.virtual);
  }

  if (path === "/api/virtual/buy" && method === "POST") {
    const body = await readBody(req);
    const { sym, name, shares, price } = body;
    if (!sym || !shares || !price) return json(res, { error: "sym, shares, price required" }, 400);
    const result = dbVirtual.buy({ sym, name, shares, price });
    if (result.error) return json(res, { error: result.error }, 400);
    state.virtual = dbVirtual.get();
    return json(res, { ok: true, virtual: state.virtual });
  }

  if (path === "/api/virtual/sell" && method === "POST") {
    const body = await readBody(req);
    const { sym, shares, price } = body;
    if (!sym || !shares || !price) return json(res, { error: "sym, shares, price required" }, 400);
    const result = dbVirtual.sell({ sym, shares, price });
    if (result.error) return json(res, { error: result.error }, 400);
    state.virtual = dbVirtual.get();
    return json(res, { ok: true, virtual: state.virtual });
  }

  if (path === "/api/virtual/reset" && method === "POST") {
    const body = await readBody(req);
    const balance = parseFloat(body.balance) || 100000;
    dbVirtual.reset(balance);
    state.virtual = dbVirtual.get();
    return json(res, { ok: true, virtual: state.virtual });
  }

  // Sharia compliance
  if (path === "/api/sharia" && method === "GET") {
    const sym = url.searchParams.get("sym");
    if (sym) return json(res, getShariaStatus(sym));
    return json(res, getAllStatuses());
  }

  // Macro calendar + brief
  if (path === "/api/macro/events" && method === "GET") {
    const days = parseInt(url.searchParams.get("days") || "21");
    return json(res, { events: getUpcomingEvents(days) });
  }
  if (path === "/api/macro/brief" && method === "GET") {
    const force = url.searchParams.get("refresh") === "1";
    const brief = await getMacroBrief(force);
    const todayStr = new Date(Date.now() + 3 * 3600 * 1000).toISOString().slice(0, 10);
    return json(res, { brief, date: todayStr, cached: macroBriefCache.date === todayStr });
  }

  // Auto-scan status
  if (path === "/api/auto-scan/status" && method === "GET") {
    const next = getNextAutoScanSlot();
    return json(res, {
      log: autoScanLog,
      schedule: AUTO_SCAN_TIMES,
      next: next ? { slot: next.slot, h: next.h, m: next.m, msUntil: next.msUntil ?? null, daysAhead: next.daysAhead ?? 0 } : null,
    });
  }

  // Insider buys
  if (path === '/api/insider-buys' && method === 'GET') {
    return json(res, { buys: loadInsiderBuys() });
  }
  if (path === '/api/insider-buys/add' && method === 'POST') {
    const body = await readBody(req);
    const { sym, name, person, role, shares, price, date, notes } = body;
    if (!sym || !date) return json(res, { error: 'sym and date required' }, 400);
    const existing = loadInsiderBuys();
    existing.unshift({
      sym: sym.includes(':') ? sym : `TADAWUL:${sym}`,
      name: name || sym,
      person: person || 'Unknown',
      role:   role   || 'Insider',
      shares: +shares || 0,
      price:  +price  || 0,
      value:  (+shares||0)*(+price||0),
      date,
      notes:  notes || '',
      added:  new Date().toISOString(),
    });
    saveInsiderBuys(existing);
    return json(res, { ok: true, buys: existing });
  }
  if (path === '/api/insider-buys/delete' && method === 'POST') {
    const body = await readBody(req);
    const { sym, date } = body;
    const filtered = loadInsiderBuys().filter(b => !(b.sym.endsWith(sym) && b.date === date));
    saveInsiderBuys(filtered);
    return json(res, { ok: true });
  }

  res.writeHead(404);
  res.end("Not found");
});

server.listen(PORT, () => {
  console.log(`\n  TASI Strategy Dashboard`);
  console.log(`  http://localhost:${PORT}\n`);
});
