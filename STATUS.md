# Project Status

_Last updated: 2026-06-21_

## Strategy state machine (live)

- **momentum-sharia** — **PROMOTED, auto-tempered to `decaying` (×0.5)**.
  - Manually promoted 2026-06-21; the promotion gate was met: excess t=2.46 (>2), 65 rebalance periods (≥24), both halves stable (1.64 / 1.82 > 1.5).
  - The daily auto-governor immediately risk-halved it to `decaying` because the rolling-12 window is soft (mean +1.01%/period, t 1.86 < 2, drawdown −24.5%).
  - **Effect:** live at **half sizing** — the momentum screen deploys ~48% (Scheme-D vol-target × in-season × 0.5) instead of 0%.
  - Auto-restores to ×1.0 when the rolling window strengthens; auto-cuts further if it weakens. No manual demote endpoint by design (downgrade is automatic only).
  - State persists in the local SQLite DB (not version-controlled).

## Validated edges

- **Sharia momentum** (top-quintile 6-1mo, monthly, equal-weight, liquid-half, ≥2y-listed) on Derayah (0.11% RT) — the **core edge**: excess ~+10–15%/yr, NW-t 2.6–3.2, OOS-stable. Absolute CAGR carries an accepted ~1–1.5%/yr survivorship haircut (disclosed in the Lab). Sizing = **Scheme-D** (vol-target 15% + seasonal sit-out), governed by the state machine above.
- **Govt / Vision-2030 contract-flow** (confirmed 2026-06-21) — a **modest event overlay**: +1.15%/award net over ~20 sessions, NW-t 2.94, n=375, private-sector control ≈0. Live in the dashboard Signals tab (see below).

## Above-modest research verdicts (2026-06-21)

Four upside layers tested under OOS-aware discipline:

| Layer | Verdict |
|---|---|
| #1 Compounding-geometry sizing (vol-target / conviction / drawdown-brake) | **All killed** — walk-forward refuted the brake (insurance, not edge) |
| #2 Flow / MSCI-rebalance front-running | **NO SIGNAL** — move is spent before the public announcement |
| #3 PEAD (earnings-drift) | **NO SIGNAL** — drift U-shaped, not monotonic; season-OOS flips |
| #4 Govt / Vision-2030 contract-flow | **CONFIRMED (2nd edge)** — full-history harvest grew n=22→375; net drift +1.15%/20d, NW-t 2.94, beats private control, trim-one stable. Effect shrank from the n=22 estimate (+4.15% was small-sample inflation). |

Momentum equal-weight remained the strongest return engine in every test; govt contract-flow is a modest event overlay on top.

### Govt contract-flow — confirmed 2026-06-21

When a company wins a **government / Vision-2030 contract**, its stock drifts ~**+1.15%** over the next 20 trading days, net of cost — statistically solid (NW-t 2.94, n=375, trim-stable, and private-sector contracts show no such drift = the control). Unlocked by cracking the saudiexchange.sa harvest (JSON endpoint called in-page, bypasses Akamai + reCAPTCHA; `harvest_catalysts.mjs` rewritten around it). Contracts in DB 207→2,392 (2021→2026). **Now live in the dashboard** — a "Contract-Flow Signal 🏗️" card in the Signals tab lists govt awards still inside the ~20-session window (liquid + compliant first), built by `dashboard/contract_flow_signal.mjs` (`getContractFlowSignal` → `/api/lab/contractflow`).

## Decision view (shipped)

The Signals/Momentum tab is now a monthly decision: strategy-state badge → Scheme-D sizing % (with breakdown) → **BUY / HOLD / SELL** vs your logged positions → SAR-per-name calculator → next rebalance date → **Block-Deal Signal 🐋** + **Contract-Flow Signal 🏗️** cards (the two event overlays). Hand-entered holdings normalize to `TADAWUL:<code>` so turnover matches.

**CLI: `npm run decision`** — the same monthly call without the dashboard server. Prints state → sizing → account split → next rebalance → BUY/HOLD/SELL with live prices, momentum, ~share counts, and ⚠ debt-≥50% flags. Flags:
- `--acct N` — account size for SAR sizing (default 100k)
- `--json` — machine-readable (implies `--quiet`); for `clean | jq` use `npm run --silent decision -- --json` or call node directly
- `--quiet` — mute the db boot log
- `--held "1120,2222"` — what-if HOLD/SELL vs a hypothetical book (ignores DB)

Pure helpers (`normalizeHeld`, `computeTurnover`, `sarPerName`) unit-tested incl. the `--held`→turnover path.

## Open threads (require user action)

- **Contract-flow ✅ CONFIRMED + SHIPPED** (2026-06-21) — full 5-year harvest powered n=22→375 (verdict SIGNAL); now wired into the dashboard Signals tab. Re-harvest top-up any time: `HEADLESS=false node --experimental-sqlite scripts/harvest_catalysts.mjs` (full history) or `--period "1 month"` (daily).
- **Operate it** — trade the monthly picks on Derayah (`npm run decision`), watch the contract-flow card for govt-award entries, log positions back, build a live track record.

## Tests

Full runnable suite green: `test:unit` 29 · `test:strategy` 23 · `test:money` 115. (e2e needs a live TradingView CDP session; not run here.)
