/**
 * strategy_state.mjs — the strategy lifecycle governor.
 *
 * Pure decision logic (decide/gateMet/exposureFor) + thin DB persistence.
 * Asymmetric: the machine only AUTO-moves a strategy DOWN (cut risk); every move
 * UP (add risk), including recovery, requires a confirmed user action.
 * Spec: docs/superpowers/specs/2026-06-17-strategy-state-machine-design.md
 */

export const CFG = {
  PROMOTE_MIN_N: 24, PROMOTE_T: 2.0, PROMOTE_HALF_T: 1.5,
  ROLL_WINDOW: 12, DECAY_ROLL_T: 1.0, DECAY_DD: -0.20,
  RETIRE_WINDOW: 18, RETIRE_DD: -0.30,
};

const EXPOSURE = { promoted: 1.0, decaying: 0.5, candidate: 0, retired: 0 };
export const exposureFor = (state) => EXPOSURE[state] ?? 0;

export function gateMet(ev, cfg = CFG) {
  return ev.n >= cfg.PROMOTE_MIN_N && ev.t > cfg.PROMOTE_T &&
    ev.halfT1 > cfg.PROMOTE_HALF_T && ev.halfT2 > cfg.PROMOTE_HALF_T && ev.netMean > 0;
}

// Pure: given current state + evidence, return resulting state after AUTO risk-down,
// plus a manual up-recommendation if applicable. Never auto-applies an up-move.
export function decide(currentState, ev, cfg = CFG) {
  let state = currentState, actor = null, reason = null;
  const pc = v => (v * 100).toFixed(2) + '%';

  if (currentState === 'promoted' || currentState === 'decaying') {
    if (ev.currentDD <= cfg.RETIRE_DD) {
      state = 'retired'; actor = 'auto'; reason = `drawdown ${pc(ev.currentDD)} ≤ ${pc(cfg.RETIRE_DD)} circuit-breaker`;
    } else if (ev.roll18Mean != null && ev.roll18Mean < 0) {
      state = 'retired'; actor = 'auto'; reason = `rolling-${cfg.RETIRE_WINDOW} excess ${pc(ev.roll18Mean)} < 0 (sustained)`;
    } else if (currentState === 'promoted' &&
      (ev.rollMean < 0 || (ev.rollT != null && ev.rollT < cfg.DECAY_ROLL_T) || ev.currentDD < cfg.DECAY_DD)) {
      state = 'decaying'; actor = 'auto';
      reason = `rolling-${cfg.ROLL_WINDOW} weakening (mean ${pc(ev.rollMean)}, t ${ev.rollT}, DD ${pc(ev.currentDD)})`;
    }
  }

  let recommendedAction = null;
  if (state === 'candidate') {
    if (gateMet(ev, cfg)) recommendedAction = 'promote';
  } else if (state === 'decaying' || state === 'retired') {
    if (ev.rollT != null && ev.rollT > cfg.PROMOTE_T && ev.rollMean > 0) recommendedAction = 'promote'; // recovery
  }

  return { state, exposureMult: exposureFor(state), actor, reason, recommendedAction };
}
