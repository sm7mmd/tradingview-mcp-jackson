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

- **Sharia momentum** (top-quintile 6-1mo, monthly, equal-weight, liquid-half, ≥2y-listed) on Derayah (0.11% RT) is the **one validated edge**: excess ~+10–15%/yr, NW-t 2.6–3.2, OOS-stable. Absolute CAGR carries an accepted ~1–1.5%/yr survivorship haircut (disclosed in the Lab).
- Position sizing = **Scheme-D** (vol-target 15% + seasonal sit-out), governed by the state machine above.

## Above-modest research verdicts (2026-06-21)

Four upside layers tested under OOS-aware discipline:

| Layer | Verdict |
|---|---|
| #1 Compounding-geometry sizing (vol-target / conviction / drawdown-brake) | **All killed** — walk-forward refuted the brake (insurance, not edge) |
| #2 Flow / MSCI-rebalance front-running | **NO SIGNAL** — move is spent before the public announcement |
| #3 PEAD (earnings-drift) | **NO SIGNAL** — drift U-shaped, not monotonic; season-OOS flips |
| #4 Govt / Vision-2030 contract-flow | **LIVE LEAD, underpowered** — +4.15% net/20d, NW-t 2.11, beats private, but n=22 (single 4-mo window) |

Momentum equal-weight remained the strongest return engine in every test.

## Decision view (shipped)

The Signals/Momentum tab is now a monthly decision: strategy-state badge → Scheme-D sizing % (with breakdown) → **BUY / HOLD / SELL** vs your logged positions → SAR-per-name calculator → next rebalance date. Hand-entered holdings normalize to `TADAWUL:<code>` so turnover matches.

## Open threads (require user action)

- **Contract-flow confirmation** — run the headed harvester to backfill 2024–2025 contracts and re-power the n=22 lead:
  `HEADLESS=false node --experimental-sqlite scripts/harvest_catalysts.mjs --from 2024-01-01 --to 2025-12-31 --pages 400` (or `--pause`), then `node --experimental-sqlite scripts/contract_flow_test.mjs`.
- **Operate it** — trade the monthly picks on Derayah, log positions back, build a live track record.

## Tests

Full runnable suite green: `test:unit` 29 · `test:strategy` 23 · `test:money` 104. (e2e needs a live TradingView CDP session; not run here.)
