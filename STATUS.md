# Project Status

_Last updated: 2026-06-21_

## Strategy state machine (live)

- **momentum-sharia** — **PROMOTED, auto-tempered to `decaying` (×0.5)**.
  - Manually promoted 2026-06-21; the promotion gate was met: excess t=2.46 (>2), 65 rebalance periods (≥24), both halves stable (1.64 / 1.82 > 1.5).
  - The daily auto-governor immediately risk-halved it to `decaying` because the rolling-12 window is soft (mean +1.01%/period, t 1.86 < 2, drawdown −24.5%).
  - **Effect:** live at **half sizing** — the momentum screen deploys ~48% (Scheme-D vol-target × in-season × 0.5) instead of 0%.
  - Auto-restores to ×1.0 when the rolling window strengthens; auto-cuts further if it weakens. No manual demote endpoint by design (downgrade is automatic only).
  - State persists in the local SQLite DB (not version-controlled).

## Validated edge

- **Sharia momentum** (top-quintile 6-1mo, monthly, equal-weight, liquid-half, ≥2y-listed) on Derayah (0.11% RT) is the **one validated edge**: excess ~+10–15%/yr, **passes the shared `portfolioGuillotine` with per-period t ≈ 2.4–2.7** (varies with each bar-cache refresh; consistently >2 across cuts — showdown 2.71, momentum_sharia 2.25–2.62), OOS both halves. (An earlier run reported t=3.60; the gate is the live source of truth now.) Absolute CAGR carries an accepted ~1–1.5%/yr survivorship haircut (disclosed in the Lab). Sizing = **Scheme-D** (vol-target 15% + seasonal sit-out), governed by the state machine above.
- **Govt contract-flow — TESTED & FAILED (2026-06-21), not an edge.** Briefly thought confirmed on a pooled NW-t 2.94, but that was cross-sectional-clustering + wrong-benchmark (^TASI) inflation — the same trap that killed the 9-pt score. Under the proper per-period guillotine (equal-weight basket, one obs/non-overlapping window) the t collapses to 0.90 and the govt−private spread to +0.09% (t 0.09). Dashboard card removed. Record kept in `scripts/contract_flow_guillotine_test.mjs`.

## Above-modest research verdicts (2026-06-21)

Four upside layers tested under OOS-aware discipline:

| Layer | Verdict |
|---|---|
| #1 Compounding-geometry sizing (vol-target / conviction / drawdown-brake) | **All killed** — walk-forward refuted the brake (insurance, not edge) |
| #2 Flow / MSCI-rebalance front-running | **NO SIGNAL** — move is spent before the public announcement |
| #3 PEAD (earnings-drift) | **NO SIGNAL** — drift U-shaped, not monotonic; season-OOS flips |
| #4 Govt / Vision-2030 contract-flow | **TESTED & FAILED** — looked confirmed on pooled NW-t 2.94, but the per-period guillotine collapsed it to t 0.90 (spread t 0.09). Clustering + ^TASI-benchmark inflation, same as the 9-pt score. Not an edge. |

Momentum equal-weight remained the strongest — and only — return engine that survives the honest per-period test.

### Govt contract-flow — tested and rejected (2026-06-21)

Initially looked like a 2nd edge: after cracking the saudiexchange.sa harvest (JSON endpoint in-page, bypasses Akamai + reCAPTCHA; `harvest_catalysts.mjs` rewritten around it — contracts 207→2,392, 2021→2026), `contract_flow_test.mjs` reported govt∩liquid +1.15%/20d at NW-t 2.94. **But that test used the condemned ^TASI cap-weighted benchmark and NW-t on a pooled list of overlapping, calendar-clustered events — the exact inflation that made the dead 9-pt score's pooled t=3.89 look real.** Re-run through the per-period guillotine (`contract_flow_guillotine_test.mjs`: equal-weight basket, one obs/non-overlapping 20-session window, 60 periods ~4.8y): govt∩liquid excess +0.87%/pd but **t 0.90**, govt−private spread **+0.09% t 0.09**. **NOT a validated edge.** Dashboard card + route + signal module removed; harvester + helpers + both research scripts kept as the record. Lesson: pooled NW-t is not a substitute for the cross-clustering-robust per-period test — no signal earns "validated" without it.

## Decision view (shipped)

The Signals/Momentum tab is now a monthly decision: strategy-state badge → Scheme-D sizing % (with breakdown) → **BUY / HOLD / SELL** vs your logged positions → SAR-per-name calculator → next rebalance date → **Block-Deal Signal 🐋** card. Hand-entered holdings normalize to `TADAWUL:<code>` so turnover matches.

**CLI: `npm run decision`** — the same monthly call without the dashboard server. Prints state → sizing → account split → next rebalance → BUY/HOLD/SELL with live prices, momentum, ~share counts, and ⚠ debt-≥50% flags. Flags:
- `--acct N` — account size for SAR sizing (default 100k)
- `--json` — machine-readable (implies `--quiet`); for `clean | jq` use `npm run --silent decision -- --json` or call node directly
- `--quiet` — mute the db boot log
- `--held "1120,2222"` — what-if HOLD/SELL vs a hypothetical book (ignores DB)

Pure helpers (`normalizeHeld`, `computeTurnover`, `sarPerName`) unit-tested incl. the `--held`→turnover path.

## Open threads (require user action)

- **Contract-flow ❌ TESTED & REJECTED** (2026-06-21) — failed the per-period guillotine (t 0.90, spread t 0.09); dashboard card removed. The harvester rewrite (JSON API, contracts 207→2,392) is the lasting win and stays. Re-harvest any time: `HEADLESS=false node --experimental-sqlite scripts/harvest_catalysts.mjs`.
- **Operate it** — trade the monthly momentum picks on Derayah (`npm run decision`), log positions back, build a live track record.

## Tests

Full runnable suite green: `test:unit` 29 · `test:strategy` 23 · `test:money` 114. (e2e needs a live TradingView CDP session; not run here.)
