/**
 * contract_flow_signal.mjs — LIVE "follow the government contract awards" signal (validated edge #4).
 *
 * Validated (scripts/contract_flow_test.mjs, full 5-year history): a company that wins a
 * GOVERNMENT / Vision-2030 contract drifts up ~+1.15% over the next ~20 sessions, net of cost
 * (NW-t 2.94, n=375, trim-one stable). Private-sector awards show NO such drift (the control),
 * so the edge is the public-sector counterparty specifically. Modest but real.
 *
 * This returns govt/Vision-2030 contract awards still inside their ~20-session drift window,
 * with a liquidity flag (the edge was validated on the liquid half). Source = catalyst_events
 * (type='contract'), the same feed the harvester maintains. Prices/liquidity from bars_cache.
 */
import { getBars, warm, iso } from '../scripts/bars_cache.mjs';
import { toYahooSym, TASI_STOCKS } from '../scripts/tasi_screener.mjs';
import { getShariaStatus } from './sharia.mjs';
import { classifyCounterparty, isContractHeadline } from './contract_flow.mjs';
import { db } from './db.js';

const HOLD = 20;                  // ~1-month drift window the edge was validated at
const LIQUID_ADV = 3_000_000;     // ≥3M SAR/day avg traded value ≈ "liquid" (validated cut was liquid-half)
const NAME = Object.fromEntries(TASI_STOCKS.map(s => [s.sym, s.name]));

export async function getContractFlowSignal() {
  // recent contract events only (active 20-session window + buffer)
  const cutoff = new Date(Date.now() - 40 * 86400000).toISOString().slice(0, 10);
  const rows = db.prepare(
    "SELECT sym, event_date, headline FROM catalyst_events WHERE type='contract' AND event_date >= ? ORDER BY event_date DESC"
  ).all(cutoff);

  // keep only real awards (anti-leakage), dedup to one per (sym,date)
  let dataAsOf = '';
  const ev = new Map();
  for (const r of rows) {
    if (r.event_date > dataAsOf) dataAsOf = r.event_date;
    if (!isContractHeadline(r.headline)) continue;
    const k = r.sym + '|' + r.event_date;
    if (!ev.has(k)) ev.set(k, { sym: r.sym, date: r.event_date, headline: r.headline, counterparty: classifyCounterparty(r.headline) });
  }
  const events = [...ev.values()];
  if (!events.length) {
    return { success: true, asOf: dataAsOf, signals: [], other: [], universe: { contracts: 0 },
      note: 'No contract awards in the last ~6 weeks (or the catalyst feed is stale — re-run the harvester).' };
  }

  // need bars for window position + drift + liquidity
  const ysyms = [...new Set(events.map(e => toYahooSym(e.sym)))];
  await warm(ysyms, '10y');

  const govt = [], other = [];
  for (const e of events) {
    const b = await getBars(toYahooSym(e.sym), '10y');
    if (b.length < 25) continue;
    const dates = b.map(x => iso(x.t)), c = b.map(x => x.c), v = b.map(x => x.v || 0);
    const i = dates.findIndex(x => x >= e.date);
    if (i < 0) continue;
    const lastIdx = c.length - 1;
    const held = lastIdx - i;                       // trading sessions since the award
    if (held > HOLD) continue;                       // drift window expired — no longer actionable
    // liquidity: 20-session avg traded value (close × volume) up to the award day
    const lo = Math.max(0, i - 19);
    let adv = 0, nadv = 0;
    for (let k = lo; k <= i; k++) { adv += c[k] * v[k]; nadv++; }
    adv = nadv ? adv / nadv : 0;
    const rec = {
      sym: e.sym, code: e.sym.replace('TADAWUL:', ''), name: NAME[e.sym] || e.sym,
      awardDate: e.date, counterparty: e.counterparty,
      headline: e.headline,
      currentPrice: +c[lastIdx].toFixed(2),
      sessionsHeld: held, sessionsLeft: HOLD - held,
      sinceAwardPct: +((c[lastIdx] / c[i] - 1) * 100).toFixed(1),
      advM: +(adv / 1e6).toFixed(1), liquid: adv >= LIQUID_ADV,
      sharia: getShariaStatus(e.sym).status,
    };
    if (e.counterparty === 'govt') govt.push(rec);
    else other.push(rec);
  }
  // collapse to one per stock — keep the freshest active award (most sessions left)
  const collapse = (arr) => {
    const m = new Map();
    for (const s of arr) { const cur = m.get(s.sym); if (!cur || s.sessionsLeft > cur.sessionsLeft) m.set(s.sym, s); }
    return [...m.values()];
  };
  const signals = collapse(govt);
  // sort: liquid first, then compliant, then freshest (the validated cut = govt ∩ liquid)
  signals.sort((a, b) =>
    (a.liquid ? 0 : 1) - (b.liquid ? 0 : 1) ||
    (a.sharia === 'compliant' ? 0 : 1) - (b.sharia === 'compliant' ? 0 : 1) ||
    b.sessionsLeft - a.sessionsLeft);

  return {
    success: true, asOf: dataAsOf,
    params: {
      trigger: 'government / Vision-2030 contract award', hold: '~20 sessions (1 month)',
      universe: 'liquid names (≥3M SAR/day) preferred — the validated cut', cost: '0.11% RT (Derayah)',
      note: 'private-sector awards show no drift (the control) and are listed separately, not signalled',
    },
    validated: {
      drift: '+1.15%/award net (20-session, govt ∩ liquid)',
      significance: 'NW-t 2.94, n=375, trim-one stable (1.38–1.64%)',
      control: 'private-sector awards ≈ 0 net — the govt counterparty is the edge (+1.17% spread)',
      honesty: 'modest — the early n=22 estimate (+4.15%) was small-sample inflation; real effect ~+1.15%',
      caveats: 'survivorship haircut on the absolute leg; confirm the award is real + AAOIFI per name before acting',
    },
    universe: { contracts: events.length, govtActive: signals.length, privateActive: collapse(other).length },
    signals, other: collapse(other),
    note: 'Modest event-driven overlay. The signal = govt/Vision-2030 awards still inside the ~20-session window; liquid+compliant first.',
  };
}
