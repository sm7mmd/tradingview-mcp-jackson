/**
 * decision.mjs — standalone monthly decision printer for the validated Sharia-momentum edge.
 *
 * Prints this month's call WITHOUT the dashboard server: strategy state, Scheme-D sizing,
 * next rebalance date, BUY/HOLD/SELL vs your logged positions, and SAR-per-name. Reads the
 * same getMomentumScreen() the Lab tab uses, plus your real positions from the SQLite DB.
 *
 * Usage (needs --experimental-sqlite; fetches live bars for the TASI universe, ~1 min):
 *   npm run decision                 # default account SAR 100,000
 *   npm run decision -- --acct 250000
 *   DECISION_ACCT=50000 npm run decision
 *   npm run decision -- --json       # machine-readable (alerts/cron); JSON is the LAST stdout line
 *   npm run decision -- --quiet      # suppress the db boot log (--json implies --quiet)
 *   npm run --silent decision -- --json | jq      # clean pipe (--silent drops npm's own run banner)
 *   node --experimental-sqlite scripts/decision.mjs --json | jq   # or call node directly
 *
 * Note: prices/picks are point-in-time. Re-run on the rebalance morning before trading —
 * the list can shift. Debt/cash ratios shown are indicative; confirm AAOIFI per name.
 */
const arg = (flag) => { const i = process.argv.indexOf(flag); return i > -1 ? process.argv[i + 1] : null; };
const has = (flag) => process.argv.includes(flag);
const ACCT = +(arg('--acct') || process.env.DECISION_ACCT || 100000);
const JSON_OUT = has('--json');
const QUIET = has('--quiet') || JSON_OUT;   // db.js logs "[db] migrated…" at import time

// Dynamic import so we can mute the db boot log (it fires during module init, before any of
// our code would otherwise run — imported modules execute before a static importer's body).
async function loadDeps() {
  const orig = console.log;
  if (QUIET) console.log = () => {};
  try {
    const db = await import('../dashboard/db.js');
    const screen = await import('../dashboard/momentum_screen.mjs');
    return { dbPositions: db.positions, getMomentumScreen: screen.getMomentumScreen, sarPerName: screen.sarPerName };
  } finally {
    console.log = orig;
  }
}
const fmtSar = (n) => 'SAR ' + Math.round(n).toLocaleString('en-US');
const pct = (n) => (n >= 0 ? '+' : '') + (+n).toFixed(1) + '%';
// Pull "debt NN%" out of the indicative Sharia note so we can flag near-threshold names.
const debtPctOf = (s) => { const m = /debt\s*(\d+)%/i.exec(s || ''); return m ? +m[1] : null; };

function rowLine(h, perName) {
  const debt = debtPctOf(h.sharia);
  const flag = debt != null && debt >= 50 ? `  ⚠ debt ~${debt}%` : '';
  const shares = h.price > 0 ? Math.floor(perName / h.price) : 0;
  return `  #${String(h.rank).padEnd(2)} ${h.code}  ${(h.name || '').slice(0, 26).padEnd(26)} ` +
    `${String(h.price).padStart(8)}  6mo ${pct(h.mom6).padStart(7)}  1mo ${pct(h.ret1m).padStart(7)}` +
    `  ~${shares} sh${flag}`;
}

async function main() {
  const { dbPositions, getMomentumScreen, sarPerName } = await loadDeps();
  const heldSyms = Object.keys(dbPositions.getAll() || {});
  const r = await getMomentumScreen({ heldSyms });
  if (!r.success) { console.error('FAILED:', r.error); process.exit(1); }

  const exposurePct = r.sizing?.breakdown?.finalExposurePct ?? 0;
  const nHold = r.holdings.length;
  const sar = sarPerName({ accountSize: ACCT, exposurePct, nHoldings: nHold });

  // Machine-readable: stable shape for alerts/cron. Adds per-name share counts on top of
  // the raw screen payload; no terminal formatting.
  if (JSON_OUT) {
    const withShares = (items) => items.map((h) => ({
      ...h, shares: h.price > 0 ? Math.floor(sar.perName / h.price) : 0,
    }));
    console.log(JSON.stringify({
      asOf: r.asOf,
      nextRebalance: r.nextRebalance,
      state: r.state,
      sizing: { exposurePct, cashPct: 100 - exposurePct, breakdown: r.sizing?.breakdown, seasonal: r.seasonal },
      account: { size: ACCT, deploy: sar.totalDeployed, perName: sar.perName, cash: sar.cash },
      turnover: {
        buy: withShares(r.turnover?.buy || []),
        hold: withShares(r.turnover?.hold || []),
        sell: r.turnover?.sell || [],
      },
      holdings: r.holdings,
      validated: r.validated,
    }));
    process.exit(0);
  }

  const line = '─'.repeat(78);
  console.log('\n' + line);
  console.log(`  MAWJAH — MONTHLY DECISION   (as of ${r.asOf})`);
  console.log(line);

  // State
  const st = r.state || {};
  console.log(`\n  STATE     ${String(st.status || '?').toUpperCase()}  ·  exposure ×${st.exposure_mult}`);
  if (st.reason) console.log(`            ${st.reason}`);

  // Sizing
  const bd = r.sizing?.breakdown || {};
  console.log(`\n  SIZING    deploy ${exposurePct}% of account  ·  ${100 - exposurePct}% cash`);
  console.log(`            (vol-target ${bd.targetVolPct}% / realized ${bd.realizedVolPct}% → raw ${bd.volTargetRaw}` +
    ` × season ${bd.seasonalMult} × state ${bd.stateMult})`);
  if (r.seasonal?.note) console.log(`            ${r.seasonal.note}`);

  // Money
  console.log(`\n  ACCOUNT   ${fmtSar(ACCT)}  →  deploy ${fmtSar(sar.totalDeployed)}` +
    `  ·  ${fmtSar(sar.perName)}/name  ·  ${fmtSar(sar.cash)} cash`);

  console.log(`\n  NEXT REBALANCE  ${r.nextRebalance}   ← re-run this on that morning before trading`);

  // Trades
  const t = r.turnover || { buy: [], hold: [], sell: [] };
  const block = (label, items, withSize) => {
    console.log(`\n  ${label} (${items.length})`);
    if (!items.length) { console.log('    —'); return; }
    for (const h of items) {
      if (withSize && h.rank != null) console.log(rowLine(h, sar.perName));
      else console.log(`    ${h.code || h.sym}  ${(h.name || '').slice(0, 26)}`);
    }
  };
  block('BUY', t.buy, true);
  block('HOLD', t.hold, true);
  block('SELL', t.sell, false);

  console.log(`\n${line}`);
  console.log(`  Picks are point-in-time. ⚠ = debt ≥50% (near AAOIFI line) — confirm per name.`);
  console.log(`  Log fills in the Lab so next month shows real HOLD/SELL.`);
  console.log(line + '\n');
  process.exit(0);
}

main().catch((e) => { console.error('FATAL', e.message); process.exit(1); });
