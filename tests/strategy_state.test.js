/**
 * Unit tests for the strategy state machine decision logic (pure, no DB).
 * Run: node --experimental-sqlite --test tests/strategy_state.test.js
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { decide, gateMet, exposureFor, CFG } from '../dashboard/strategy_state.mjs';

// baseline evidence that PASSES the promotion gate
const pass = { n: 30, t: 2.9, halfT1: 2.3, halfT2: 1.8, netMean: 0.012, rollMean: 0.012, rollT: 2.5, roll18Mean: 0.011, currentDD: -0.05 };

describe('gateMet', () => {
  it('passes a clean strategy', () => assert.equal(gateMet(pass, CFG), true));
  it('fails on too few periods', () => assert.equal(gateMet({ ...pass, n: 20 }, CFG), false));
  it('fails on t<=2', () => assert.equal(gateMet({ ...pass, t: 1.9 }, CFG), false));
  it('fails on weak half', () => assert.equal(gateMet({ ...pass, halfT2: 1.0 }, CFG), false));
  it('fails on negative net', () => assert.equal(gateMet({ ...pass, netMean: -0.001 }, CFG), false));
});

describe('exposureFor', () => {
  it('maps states to multipliers', () => {
    assert.equal(exposureFor('promoted'), 1.0);
    assert.equal(exposureFor('decaying'), 0.5);
    assert.equal(exposureFor('candidate'), 0);
    assert.equal(exposureFor('retired'), 0);
  });
});

describe('decide — manual up (no auto-apply)', () => {
  it('candidate meeting gate is RECOMMENDED promote, not auto-applied', () => {
    const r = decide('candidate', pass);
    assert.equal(r.state, 'candidate');
    assert.equal(r.recommendedAction, 'promote');
    assert.equal(r.actor, null);
    assert.equal(r.exposureMult, 0);
  });
  it('candidate failing gate gets no recommendation', () => {
    const r = decide('candidate', { ...pass, t: 1.0 });
    assert.equal(r.recommendedAction, null);
  });
});

describe('decide — auto risk-down', () => {
  it('promoted decays on rolling-12 negative', () => {
    const r = decide('promoted', { ...pass, rollMean: -0.003 });
    assert.equal(r.state, 'decaying');
    assert.equal(r.actor, 'auto');
    assert.equal(r.exposureMult, 0.5);
  });
  it('promoted decays on rolling t<1', () => {
    const r = decide('promoted', { ...pass, rollT: 0.8 });
    assert.equal(r.state, 'decaying');
  });
  it('promoted decays on DD < -20%', () => {
    const r = decide('promoted', { ...pass, currentDD: -0.22 });
    assert.equal(r.state, 'decaying');
  });
  it('retires on rolling-18 negative (sustained)', () => {
    const r = decide('promoted', { ...pass, roll18Mean: -0.002 });
    assert.equal(r.state, 'retired');
    assert.equal(r.exposureMult, 0);
  });
  it('retires on DD <= -30% circuit-breaker regardless of rolling', () => {
    const r = decide('promoted', { ...pass, currentDD: -0.31 });
    assert.equal(r.state, 'retired');
    assert.equal(r.actor, 'auto');
  });
  it('decaying retires on DD floor', () => {
    const r = decide('decaying', { ...pass, currentDD: -0.31 });
    assert.equal(r.state, 'retired');
  });
});

describe('decide — no auto up', () => {
  it('retired with recovered rolling is RECOMMENDED, not auto-promoted', () => {
    const r = decide('retired', { ...pass, rollT: 2.6, rollMean: 0.01 });
    assert.equal(r.state, 'retired');
    assert.equal(r.recommendedAction, 'promote');
    assert.equal(r.actor, null);
  });
  it('healthy promoted stays promoted, full exposure', () => {
    const r = decide('promoted', pass);
    assert.equal(r.state, 'promoted');
    assert.equal(r.exposureMult, 1.0);
    assert.equal(r.actor, null);
  });
});
