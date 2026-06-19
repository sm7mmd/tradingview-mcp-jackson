/**
 * Money-path tests — the two functions that actually decide buy/sell and grade edge:
 *   scoreBias   (scripts/tasi_screener.mjs) — pure 9-pt swing / 8-pt breakout scorer
 *   gradePending(dashboard/validation.mjs)  — forward excess vs equal-weight basket
 * Run: node --experimental-sqlite --test tests/moneypath.test.js
 * (--experimental-sqlite needed because validation.mjs → db.js opens SQLite.)
 */
import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { scoreBias, computeSeasonality } from '../scripts/tasi_screener.mjs';
import { logSignal, gradePending } from '../dashboard/validation.mjs';
import { schemeDExposure } from '../dashboard/momentum_screen.mjs';
import { db } from '../dashboard/db.js';

// ── scoreBias (pure) ────────────────────────────────────────────────────────
describe('scoreBias — swing mode (9-pt)', () => {
  const ctxBull = { obv_trend: 'rising', vwap20: 108, isTasi: true, avgVolume: 1e6 };

  it('full bull stack → STRONG BUY at max score 9', () => {
    const r = scoreBias(
      { ema13: 110, ema34: 105, ema89: 100, ema200: 90 },
      65, { hist: 0.5, prevHist: 0.2 }, { ratio: 2.0 }, 115, 'swing', null, ctxBull);
    assert.equal(r.bias, 'STRONG BUY');
    assert.equal(r.maxScore, 9);
    assert.equal(r.score, 9);
    assert.equal(r.bullish_score, 9);
  });

  it('full bear stack → STRONG SELL', () => {
    const r = scoreBias(
      { ema13: 90, ema34: 95, ema89: 100, ema200: 110 },
      30, { hist: -0.5, prevHist: -0.2 }, { ratio: 2.0 }, 85, 'swing', null,
      { obv_trend: 'falling', vwap20: 95, isTasi: true, avgVolume: 1e6 });
    assert.equal(r.bias, 'STRONG SELL');
    assert.equal(r.score, 9);
    assert.equal(r.bearish_score, 9);
  });

  it('neutral, nothing aligned → SKIP at score 0', () => {
    const r = scoreBias(
      { ema13: 100, ema34: 100, ema89: 100, ema200: 100 },
      48, { hist: 0, prevHist: 0 }, { ratio: 1.0 }, 100, 'swing', null,
      { obv_trend: 'flat', isTasi: true, avgVolume: 1e6 });
    assert.equal(r.bias, 'SKIP');
    assert.equal(r.score, 0);
  });

  it('null RSI is handled (no points, no throw)', () => {
    const r = scoreBias(
      { ema13: 110, ema34: 105, ema89: 100, ema200: 90 },
      null, { hist: 0.5, prevHist: 0.2 }, { ratio: 2.0 }, 115, 'swing', null, ctxBull);
    // bull = stack2 + ema200_1 + obv1 + macd1 + vol1 + vwap1 = 7 (RSI's 2 pts withheld)
    assert.equal(r.bullish_score, 7);
    assert.equal(r.bias, 'STRONG BUY');
    assert.equal(r.proximity.rsi, null);
  });

  it('volume ratio counts toward whichever side wins, not double-labels direction', () => {
    // identical-EMA neutral but high volume: +1 bull AND +1 bear → tie → SKIP
    const r = scoreBias(
      { ema13: 100, ema34: 100, ema89: 100, ema200: 100 },
      48, { hist: 0, prevHist: 0 }, { ratio: 3.0 }, 100, 'swing', null,
      { obv_trend: 'flat', isTasi: true, avgVolume: 1e6 });
    assert.equal(r.bullish_score, 1);
    assert.equal(r.bearish_score, 1);
    assert.equal(r.bias, 'SKIP');
  });
});

describe('scoreBias — breakout mode (8-pt)', () => {
  it('volume+RS breakout → STRONG BUY at max score 8', () => {
    const r = scoreBias(
      { ema13: 110, ema34: 105, ema89: 100, ema200: 90 },
      60, { hist: 0.5, prevHist: -0.1 }, { ratio: 2.5 }, 115, 'breakout', 5.0,
      { isTasi: true, avgVolume: 1e6 });
    assert.equal(r.maxScore, 8);
    assert.equal(r.bias, 'STRONG BUY');
    assert.equal(r.score, 8);
  });
});

// ── gradePending (DB round-trip, stubbed bars) ──────────────────────────────
describe('gradePending — forward excess vs equal-weight basket', () => {
  const SIG = '__MP_SIG__', BASK = '__MP_BASK__';
  const wipe = () => db.exec(`DELETE FROM signal_outcomes WHERE sym IN ('${SIG}','${BASK}')`);

  // 25 sequential daily bars from 2026-01-01; close = base + step*i
  const mkBars = (n, step) => {
    const out = []; let d = new Date('2026-01-01T00:00:00Z');
    for (let i = 0; i < n; i++) { out.push({ date: d.toISOString().slice(0, 10), close: 100 + step * i }); d = new Date(d.getTime() + 86400000); }
    return out;
  };
  // signal +1/bar, basket +0.5/bar → at h=5: sig 0.05, basket 0.025, excess 0.025
  const barsBySym = { [SIG]: mkBars(25, 1), [BASK]: mkBars(25, 0.5) };
  const getBars = async (s) => barsBySym[s];   // unknown syms → undefined (left pending, untouched)

  before(wipe);
  after(wipe);

  it('grades a signal by excess net of cost and persists the row', async () => {
    wipe();
    logSignal({ sym: SIG, source: 'test', signal_type: 'STRONG_BUY', entry_date: '2026-01-01', entry_price: 100 });
    const res = await gradePending({ getBars, universe: [BASK], cost: 0.001 });
    assert.ok(res.graded >= 3, `expected ≥3 graded, got ${res.graded}`);

    const row = db.prepare(`SELECT * FROM signal_outcomes WHERE sym=? AND horizon=5`).get(SIG);
    assert.ok(row.graded_at, 'row should be graded');
    const approx = (a, b) => Math.abs(a - b) < 1e-6;
    assert.ok(approx(row.signal_ret, 0.05), `signal_ret ${row.signal_ret}`);
    assert.ok(approx(row.basket_ret, 0.025), `basket_ret ${row.basket_ret}`);
    assert.ok(approx(row.excess, 0.025), `excess ${row.excess}`);
    assert.ok(approx(row.excess_net, 0.024), `excess_net ${row.excess_net}`);
  });

  it('signal with no elapsed horizon stays pending (not graded)', async () => {
    wipe();
    // entry beyond the bar range → fwdAt returns null → stays pending
    logSignal({ sym: SIG, source: 'test', signal_type: 'STRONG_BUY', entry_date: '2027-01-01', entry_price: 100 });
    await gradePending({ getBars, universe: [BASK], cost: 0.001 });
    const row = db.prepare(`SELECT * FROM signal_outcomes WHERE sym=? AND horizon=5`).get(SIG);
    assert.equal(row.graded_at, null);
  });
});

// ── schemeDExposure (pure sizing math) ──────────────────────────────────────
describe('schemeDExposure — vol-target × seasonal × state governor', () => {
  it('low vol caps exposure at 1.0 when promoted & in-season', () => {
    // targetVol/realizedVol = 0.15/0.10 = 1.5 → capped to 1 → ×1
    assert.equal(schemeDExposure({ realizedVol: 0.10, targetVol: 0.15, inSeason: true, stateMult: 1 }), 1);
  });
  it('high vol scales exposure down (0.15/0.30 = 0.5)', () => {
    assert.equal(schemeDExposure({ realizedVol: 0.30, targetVol: 0.15, inSeason: true, stateMult: 1 }), 0.5);
  });
  it('weak month forces 0 regardless of vol/state', () => {
    assert.equal(schemeDExposure({ realizedVol: 0.10, targetVol: 0.15, inSeason: false, stateMult: 1 }), 0);
  });
  it('candidate/retired (stateMult 0) forces 0', () => {
    assert.equal(schemeDExposure({ realizedVol: 0.10, targetVol: 0.15, inSeason: true, stateMult: 0 }), 0);
  });
  it('decaying halves the vol-target exposure (0.5 × 0.5)', () => {
    assert.equal(schemeDExposure({ realizedVol: 0.30, targetVol: 0.15, inSeason: true, stateMult: 0.5 }), 0.25);
  });
  it('null realizedVol defaults the vol term to 1 (then × state)', () => {
    assert.equal(schemeDExposure({ realizedVol: null, targetVol: 0.15, inSeason: true, stateMult: 1 }), 1);
  });
});

// ── computeSeasonality (per-month avg daily return %) ────────────────────────
describe('computeSeasonality — monthly average daily return', () => {
  it('separates a +1%/day January from a -2%/day February', () => {
    // The return at index i is labeled by times[i]'s month, so make every
    // Feb-timestamped step the -2% drop (incl. the Jan→Feb boundary step).
    const day = 86400, closes = [100], times = [Date.UTC(2025, 0, 1) / 1000];
    let t = times[0];
    for (let i = 1; i < 15; i++) { t += day; times.push(t); closes.push(closes[i - 1] * 1.01); }   // Jan +1%/day
    let tf = Date.UTC(2025, 1, 1) / 1000;
    for (let i = 0; i < 15; i++) { times.push(tf); closes.push(closes[closes.length - 1] * 0.98); tf += day; } // Feb -2%/day
    const s = computeSeasonality(closes, times);
    assert.equal(s[1], 1);    // January = +1.00%/day
    assert.equal(s[2], -2);   // February = -2.00%/day
  });
});
