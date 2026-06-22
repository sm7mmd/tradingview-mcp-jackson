# Project Status

_Last updated: 2026-06-22_

## TL;DR

One validated edge — **Sharia momentum combo** (deflated t ≈ 2.45, survived the kill-test) — plus a **seasonality drawdown overlay**, a **tiny borderline PEAD satellite**, a **multi-asset allocation policy** (50/30/20 TASI-momentum/US-Sharia/gold, validated Sharpe 0.60→1.05), and **opportunistic Main-market IPO flipping**. All sizing/exposure levers are dead → momentum runs **plain equal-weight, hold the top 6–10 names, monthly**. Honest expectation **mid-teens %/yr** (≈low-teens net of zakat; 20–30% is good-year variance, not a plan). The edge hunt is **exhausted**: ~35+ tests, 1 durable edge; the round-2 batch went 0/3 and the alpha-execution arc went 0 changes / 4 bad changes prevented. **The methodology was upgraded** (judge the SYSTEM walk-forward Calmar vs basket, not each signal's t alone). The money is now in **operating** the edge well + the structural levers (allocation, IPOs), not a fifth factor.

## Validated edge set

- **Sharia momentum combo** — `mom6 × 52-week-high` rank combo, top-quintile, monthly, equal-weight, liquid-half, ≥2y-listed, Derayah 0.11% RT. **Live in `getMomentumScreen` → decision view / CLI / state machine.**
  - **Kill-test PASSED (2026-06-22):** after a survivorship haircut (1–1.5%/yr → t ≈ 2.9–3.0) AND a multiple-testing deflation (~15 specs, ρ≈0.6–0.9, Meff 3–6 → Harvey-Liu t 2.35–2.60), the combo holds at **deflated t ≈ 2.45 (>2)**. Real and tradeable — but size it as a t≈2.4 single anomaly, not a fortress. (`scripts/killtest_survivorship.mjs`)
  - **Grader leaks FIXED:** `strategy_validation.mjs` had been grading **plain mom6 (not the live combo)** and applying **today's Sharia set retroactively**. Fixed → leak-free in-sample guillotine **t 3.23** (removing the leaks *raised* it from 2.71). The Lab now reports the honest number.
  - **Concentration finding:** holding the **top-ranked** 6–10 names does NOT dilute the edge (top-10 t 3.97, top-8 3.35, top-6 2.81, top-4 3.10 — the rank carries return). The risk is *which* names: a *random* 4-slice averages +16%/yr excess but ±6.2pp. **Rule: hold ~6–10 top-ranked names, not an arbitrary 4.** (`scripts/breadth_test.mjs`)
- **Seasonality** — sit out the 2 weakest calendar months. A **drawdown overlay, not a return edge** (OOS return gate fails t 0.57; DD reduction ~4.8pp robust). Correctly scoped, kept.
- **Conditioned PEAD** — small **borderline** 2nd sleeve (~10% risk budget). Gate PASS at 0.11% (guillotine t 2.14, n=118, **orthogonal to momentum r ≈ 0**) but cost-fragile (fails at 0.30%) and front-loaded. **Wired live**: `dashboard/pead_screen.mjs` + `/api/lab/pead` + a card on the Momentum tab (EXPERIMENTAL framing, 6h-TTL cached). Event-driven → empty between earnings seasons.

## Sizing — all levers dead → plain equal-weight

The board's "smarter sizing doubles growth" is **refuted**. Vol-target, fractional-Kelly conviction, and the drawdown-brake (200d-MA regime, walk-forward) all KILLED; momentum × low-vol and inverse-vol weighting both REJECTED (DD cut ~1pp vs the ≥3pp bar). **Momentum runs plain equal-weight, monthly, no exposure overlay** (seasonality sit-out is the one kept risk overlay). The strategy state machine still auto-tempers exposure (see below) — that's a governor, not an alpha lever.

## Strategy state machine (live)

- **momentum-sharia — PROMOTED, auto-tempered to `decaying` (×0.5).** Rolling-12 soft (mean +1.01%/period, t 1.86<2, DD −24.5%) → governor halves exposure. Auto-restores to ×1.0 when the window strengthens. Persists in local SQLite (not version-controlled). No manual demote by design.

## Dead / rejected signals (do not relitigate)

9-pt TA score (per-period t 0.74, relabeled context-only), whale_score (noise, culled from all deciding/UI paths), govt contract-flow (guillotine t 0.90), dividend (beta, excess +0.10%), MSCI/flow front-running (t −1.18, run-up pre-announcement), block deals (EXPERIMENTAL, t 1.94, underpowered), value-via-price long-term reversal (corr 0.36 w/ momentum or fails). **Round-2 batch (2026-06-22), 0/3 promoted:** volume-shock reversal DEAD (guillotine t 0.63; only the *continuation* leg is significant, t~4 — untradeable chase), crypto TSMOM (BTC/ETH 200d) SHELVED (Sharpe passes but maxDD cut only 16–21% vs ≥30% gate — a mild risk overlay on crypto already held, not alpha), conditioned-PEAD cost-hardening FAIL/closed (no refinement clears t>2 at 0.30%; longer-hold near-miss t 1.91).

## Operating the strategy (this month)

Paper book set to the operating spec: **top 8 clean combo names, equal-weight, ~50% deployed** (DECAYING governor), dropping the debt-near-line names (1304, 2050) pending AAOIFI check. Real-account order list produced; rebalance **July 1**. `npm run decision --acct 100000` reproduces it (state → sizing → BUY/HOLD/SELL → SAR-per-name → ⚠ debt-≥50% flags). Flags: `--acct N`, `--json`, `--quiet`, `--held "1120,2222"`.

## Standing research discipline (adopted 2026-06-22)

Pre-register hypothesis/universe/signal/holding/cost **and spec count** before any backtest; **cap ~5 new specs per arc**; bar rises with N (**deflated-t ≥ 3** vs the full ~35-trial count); mandatory OOS `portfolioGuillotine` (pooled NW-t ≠ the gate); **kill-by-default — no "experimental/borderline purgatory."**

## Visual redesign (shipped 2026-06-22)

B+C hybrid design-system refresh merged to `main`: violet→indigo tokens, editorial + fintech-polish across all 8 tabs, Momentum/Goals hero, drawer "Volume Flow" restyle. Also fixed a live `_oppCache` ReferenceError that had been crashing **every** drawer open. CI honesty guard + drawer smoke test added.

## Multi-asset allocation policy (shipped 2026-06-22)

Fixed-weight Sharia portfolio across **TASI momentum book (50%) / US-Sharia equity SPUS (30%) / gold (20%)**, quarterly rebalance. **Validated** (`scripts/allocation_backtest.mjs`, 2020–2026): vs TASI-momentum-alone, lifts **Sharpe 0.60→1.05**, cuts **maxDD −19.5%→−13%**, adds **+1%/yr** rebalancing premium; legs near-uncorrelated (0.20/0.10/0.03). Caveat: ~5y window. **Built:** `dashboard/allocation.mjs` (pure `normalizeWeights`/`computeRebalance`, 8 tests) + `/api/allocation` + a **Goals-tab card** with editable weights/values → live BUY/SELL/HOLD rebalance actions. Weights editable (50/30/20 default).

## Zakat honesty (shipped 2026-06-22)

The Goals card shows the target **net of zakat** (~2.5%/yr of portfolio value — a real headwind no return figure included): gross +X% → **net +Y%**, with an editable `zakat_pct`. Makes the mid-teens expectation honest (≈low-teens net).

## Alpha-execution arc + methodology upgrade (2026-06-22)

Full-room brainstorm licensed to challenge the validation regime, then executed the leads. **Methodology upgrade adopted:** the per-signal guillotine t is underpowered at n=65 (misses modest edges 60–75%) and tests the wrong object — **judge the SYSTEM walk-forward Calmar vs buy-and-hold basket; two-tier sizing (full / fractional-if-strong-prior / kill); deflated-t ranks not kills.** Executed 4 pre-registered tests → **0 strategy changes, 4 bad changes prevented:**
- **Vol-target "leak" REFUTED** (`exposure_arms_test.mjs`) — the live overlay BEATS plain (Calmar 0.80 vs 0.58); stripping it would COST ~1%/yr. Don't touch the money path.
- **Ensemble STACK = MOMENTUM-SOLO** (`ensemble_stack_test.mjs`) — sleeves near-orthogonal (ρ̄ 0.083) but 2–3× weaker → they DILUTE (Calmar drops; ablation unanimous). Stack t rose (2.98) while Calmar fell = proof the system-Calmar objective is right.
- **Quarterly rebalance REFUTED** (`rebalance_frequency_test.mjs`) — the +3.25% was a turnover-accounting artifact; monthly wins (10.27 vs 9.59).
- **Saudi IPO ledger = MILD-YES (Main only)** (`ipo_harvest.mjs` + `ipo_population.mjs`) — Tadawul caps day-1 ±30% → flip upside capped; n=12 true offer-pop: 83% pop / median +30% / ~17% shallow break → **~+8–15%/yr on cycled cash, capacity-limited.** Opportunistic Main-market subscriptions on idle cash; NO Nomu. (Population-grade base rate still needs prospectus offer prices — Akamai-walled.)

## Honest ceiling

~9% / 9,000-SAR goal: comfortably reachable. **Mid-teens %/yr is the realistic mean; 20–30% is good-year variance, not an engineered target** — the uncorrelated 2nd engine that would lift the mean has been hunted ~30 times and not appeared. Biggest return lever = operating momentum at high fidelity (6–10 names, monthly discipline), not new factors.

## Tests

`test:money` **130** · `test:strategy` **23** · `test:honesty` **2** · `test:drawer` 18 rows clean · `pw-verify` 8 tabs / 0 console errors (LTR + RTL). e2e needs a live TradingView CDP session (not run).

## Open threads

- **Operate it** — trade the monthly momentum picks on Derayah, log positions back (`npm run decision`), build a live track record. This is now the primary work, not more research.
- **Block-deal re-test** — only remaining untested flow signal with positive shape; data-gated (needs a headed Argaam harvest past ~30 buckets).
- **Reserve idea (not yet run):** buyback / treasury-purchase under-reaction — harvest the saudiexchange JSON feed to >150 events *before* testing (currently 92 = block-deal-grade thin).

## Reference docs (this session)

`docs/research/2026-06-22-independent-review-edge-plan.md` (board judged) · `-edge-plan-results.md` (Phases 0–2) · `-killtest-survivorship-multipletesting.md` · `-new-approaches-consult.md` (round 2) · `-volume-shock.md` · `-crypto-tsmom.md` · `-pead-hardening.md` · `-pead-conditioned.md` · `-momentum-lowvol.md` · `-drawdown-brake.md` · `-alpha-and-methodology-brainstorm.md` · `-alpha-exec-results.md` · `-exposure-arms.md` · `-ensemble-stack.md` · `-rebalance-frequency.md` · `-ipo-ledger.md` · `-multi-asset-allocation.md`. Design: `docs/superpowers/specs|plans/2026-06-22-visual-redesign*`.
