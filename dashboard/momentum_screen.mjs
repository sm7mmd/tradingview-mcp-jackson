/**
 * momentum_screen.mjs — LIVE monthly buy-list for the validated AVENUE 4 edge.
 *
 * The strategy that cleared every honest bar on the account's real constraints
 * (Derayah 0.11% cost + Sharia-compliant universe): rank compliant, liquid,
 * established (≥2y-listed) TASI names by 6-1 month momentum, hold the top quintile,
 * rebalance monthly. Validated: excess +10–15%/yr vs equal-weight compliant basket,
 * Newey-West t 2.6–3.2, OOS-stable, drawdown better than the basket (see
 * scripts/momentum_sharia.mjs + memory/edge_validation_findings.md).
 *
 * This returns the CURRENT picks (a snapshot at the latest bar), not a backtest.
 * Prices come from the on-disk Yahoo cache (scripts/bars_cache.mjs); first call after
 * the cache goes stale (>18h) refetches the compliant universe (~30s), then it's instant.
 */
import { getBars, warm, iso } from '../scripts/bars_cache.mjs';
import { TASI_STOCKS, toYahooSym } from '../scripts/tasi_screener.mjs';
import { getShariaStatus } from './sharia.mjs';
import { getState } from './strategy_state.mjs';

const sd = a => { if (a.length < 2) return NaN; const m = a.reduce((x, y) => x + y, 0) / a.length; return Math.sqrt(a.reduce((s, x) => s + (x - m) ** 2, 0) / (a.length - 1)); };
const mean = a => a.length ? a.reduce((x, y) => x + y, 0) / a.length : NaN;
const MONTHS = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Scheme-D gross exposure: vol-target (cap 1, scale so realized vol ≈ targetVol) ×
// seasonal sit-out (0 in a weak month) × state-machine governor (candidate/retired 0,
// decaying 0.5, promoted 1). Pure so the money math is unit-testable.
export function schemeDExposure({ realizedVol, targetVol = 0.15, inSeason, stateMult }) {
  let e = realizedVol && realizedVol > 0 ? Math.min(1, targetVol / realizedVol) : 1;
  if (!inSeason) e = 0;                               // weak month → sit out
  return e * stateMult;
}

// Plain-language sizing note. Pure so the two zero-exposure causes (weak month vs
// not-live) and the seasonal+candidate combo are unit-testable without bars.
export function sizingNote({ exposure, exposurePct, stateMult, inSeason, targetVol = 0.15, nHoldings = 1 }) {
  if (exposure === 0) {
    if (stateMult === 0) {
      return inSeason
        ? `Strategy not live yet (state-machine status: candidate/retired) — 0% deployed. Promote it in the Lab's Strategy Edge card to go live.`
        : `Strategy not live yet (candidate/retired) AND a seasonal weak month — 0% deployed. Even after promoting, sizing stays 0% until the weak month passes.`;
    }
    return `Weak month — model says HOLD CASH (0% invested).`;
  }
  const perPos = (exposurePct / Math.max(1, nHoldings)).toFixed(1);
  return `Put ${exposurePct}% of the account to work (≈${perPos}% per name), keep ${100 - exposurePct}% cash. Sizing caps risk to a ${(targetVol * 100).toFixed(0)}% volatility budget${stateMult < 1 ? ' and is HALVED because the strategy is decaying' : ''}.`;
}

export async function getMomentumScreen({ quintileFrac = 0.2, liquidFrac = 0.5, minListingDays = 504, targetVol = 0.15 } = {}) {
  const compliant = TASI_STOCKS.filter(s => getShariaStatus(s.sym).status === 'compliant');
  const ysyms = compliant.map(s => toYahooSym(s.sym));
  await warm(ysyms, '10y');                       // cache-aware; refetches only if stale

  const rows = [];
  const monthRet = {};                              // calendar-month → daily returns (basket seasonality)
  for (const s of compliant) {
    const b = await getBars(toYahooSym(s.sym), '10y');
    if (b.length < 60) continue;
    const c = b.map(x => x.c), v = b.map(x => x.v);
    for (let k = 1; k < c.length; k++) {            // accumulate seasonality from full history
      const r = c[k] / c[k - 1] - 1;
      if (isFinite(r)) { const m = new Date(b[k].t * 1000).getUTCMonth() + 1; (monthRet[m] ||= []).push(r); }
    }
    if (b.length < minListingDays) continue;        // ≥2y listed — exclude fresh IPOs
    const i = c.length - 1;
    if (i < 126) continue;
    const mom6 = c[i - 21] / c[i - 126] - 1;        // 6-1 month momentum (skip last month)
    if (!isFinite(mom6)) continue;
    let liq = 0, n = 0; for (let k = Math.max(0, i - 59); k <= i; k++) { liq += c[k] * (v[k] || 0); n++; }
    const vol = []; for (let k = i - 59; k <= i; k++) if (k > 0) vol.push(c[k] / c[k - 1] - 1);
    rows.push({ sym: s.sym, code: s.sym.replace('TADAWUL:', ''), name: s.name || s.sym, price: +c[i].toFixed(2), mom6, ret1m: c[i] / c[i - 21] - 1, liq: liq / n, vol60: sd(vol), asOf: iso(b[i].t) });
  }
  if (!rows.length) return { success: false, error: 'No eligible names — cache may be cold. Run: node scripts/bars_cache.mjs warm.' };

  const liquid = [...rows].sort((a, b) => b.liq - a.liq).slice(0, Math.ceil(rows.length * liquidFrac));
  const ranked = [...liquid].sort((a, b) => b.mom6 - a.mom6);
  const k = Math.max(5, Math.floor(ranked.length * quintileFrac));
  const holdings = ranked.slice(0, k).map((r, idx) => ({
    rank: idx + 1, sym: r.sym, code: r.code, name: r.name, price: r.price,
    mom6: +(r.mom6 * 100).toFixed(1), ret1m: +(r.ret1m * 100).toFixed(1),
    sharia: getShariaStatus(r.sym).basis,
  }));

  // ── Position sizing — Scheme D (vol-target + seasonal sit-out), validated in
  // scripts/momentum_sizing_test.mjs: cuts worst year −21%→−8%, maxDD −26%→−15% at ~same
  // Sharpe. Scale gross exposure so the holdings' realized vol ≈ targetVol; go to cash in
  // a weak month. Equal-weight within holdings (inverse-vol added nothing in the test).
  const asOf = rows.map(r => r.asOf).sort().at(-1);
  const d = new Date(asOf);
  const nextRebalance = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 1)).toISOString().slice(0, 10);
  const weight = +(100 / holdings.length).toFixed(1);

  // Seasonal overlay (avenue 2): the 2 historically-weakest calendar months. Sit out the
  // current month if it's one of them — cuts drawdown ~5pp with no return cost (OOS-validated).
  const monthMean = {};
  for (let m = 1; m <= 12; m++) monthMean[m] = +(mean(monthRet[m] || []) * 100).toFixed(3);
  const weakest = Object.entries(monthMean).sort((a, b) => a[1] - b[1]).slice(0, 2).map(e => +e[0]);
  const currentMonth = d.getUTCMonth() + 1;
  const seasonal = {
    currentMonth, currentMonthName: MONTHS[currentMonth],
    weakestMonths: weakest, weakestMonthNames: weakest.map(m => MONTHS[m]),
    inSeason: !weakest.includes(currentMonth),
    note: weakest.includes(currentMonth)
      ? `${MONTHS[currentMonth]} is a historically weak month — overlay says SIT OUT (hold cash) to dodge drawdown.`
      : `${MONTHS[currentMonth]} is not a weak month — overlay says STAY INVESTED.`,
  };

  // ── Position sizing — Scheme D (vol-target + seasonal sit-out), validated in
  // scripts/momentum_sizing_test.mjs: cuts worst year −21%→−8%, maxDD −26%→−15% at ~same
  // Sharpe. Scale gross exposure so the holdings' realized vol ≈ targetVol; cash in a weak
  // month. Equal-weight within holdings (inverse-vol added nothing in the test).
  const dayRet = {};                                  // date → [holding daily returns]
  for (const h of holdings) {
    const b = await getBars(toYahooSym(h.sym), '10y'); if (b.length < 95) continue;
    const c = b.map(x => x.c);
    for (let k = c.length - 90; k < c.length; k++) { if (k < 1) continue; const r = c[k] / c[k - 1] - 1; if (isFinite(r)) (dayRet[b[k].t] ||= []).push(r); }
  }
  const portDaily = Object.keys(dayRet).sort().map(t => mean(dayRet[t])).filter(isFinite);
  const realizedVol = portDaily.length >= 20 ? sd(portDaily) * Math.sqrt(252) : null;
  // State-machine governor: candidate/retired→0, decaying→×0.5, promoted→×1.0
  const stateMult = getState('momentum-sharia').exposure_mult;
  const exposure = schemeDExposure({ realizedVol, targetVol, inSeason: seasonal.inSeason, stateMult });
  const exposurePct = +(exposure * 100).toFixed(0);
  const sizing = {
    model: 'vol-target + seasonal sit-out (Scheme D)',
    targetVolPct: +(targetVol * 100).toFixed(0),
    realizedVolPct: realizedVol ? +(realizedVol * 100).toFixed(0) : null,
    exposurePct, cashPct: 100 - exposurePct,
    perPositionPct: +(exposurePct / Math.max(1, holdings.length)).toFixed(1),
    note: sizingNote({ exposure, exposurePct, stateMult, inSeason: seasonal.inSeason, targetVol, nHoldings: holdings.length }),
  };

  return {
    success: true, asOf, nextRebalance,
    universe: { compliant: compliant.length, eligible: rows.length, liquid: liquid.length, holdings: holdings.length },
    params: { lookback: '6mo (skip last 1mo)', minListing: '≥2y listed', liquidFilter: 'liquid half', quintile: 'top 20%', rebalance: 'monthly', cost: '0.11% RT (Derayah)', weighting: `equal-weight (~${weight}% each)` },
    validated: { excessPerYr: '+10 to +15%/yr', absCagr: '15–25%/yr', nwT: '2.6–3.2', maxDD: '~−26% (better than basket)', caveat: 'OOS-stable; survivorship haircut ~1–1.5%/yr; confirm AAOIFI financial ratios per name before buying.' },
    seasonal,
    sizing,
    holdings,
  };
}
