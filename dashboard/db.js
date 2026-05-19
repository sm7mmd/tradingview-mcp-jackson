/**
 * db.js — SQLite persistence layer for the Mawjah dashboard
 *
 * Replaces 10+ flat-file JSON stores with a single ACID database.
 * Run dashboard/server.mjs with: node --experimental-sqlite dashboard/server.mjs
 *
 * Tables:
 *   score_history   — daily signal scores per symbol (time-series)
 *   positions       — real watchlist positions (sym → JSON blob)
 *   alert_rules     — user-defined alert conditions
 *   virtual_meta    — virtual portfolio scalars (cash, balance_start)
 *   virtual_positions — virtual portfolio holdings
 *   virtual_trades  — virtual trade log
 *   insider_buys    — manually logged insider purchases
 *   block_deal_log  — Argaam block deal records
 *   meta            — ad-hoc key-value store (last_block_deals, auto_scan, etc.)
 */

import { DatabaseSync } from 'node:sqlite';
import { existsSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DB_PATH   = join(__dirname, 'mawjah.db');

// Suppress the experimental warning after first load
process.removeAllListeners('warning');
process.on('warning', w => { if (!w.message.includes('SQLite')) console.warn(w.message); });

export const db = new DatabaseSync(DB_PATH);

// ── Schema ────────────────────────────────────────────────────────────────────
db.exec(`
  PRAGMA journal_mode = WAL;
  PRAGMA foreign_keys = ON;

  CREATE TABLE IF NOT EXISTS score_history (
    sym        TEXT NOT NULL,
    date       TEXT NOT NULL,
    score      INTEGER,
    max_score  INTEGER,
    bias       TEXT,
    price      REAL,
    mode       TEXT,
    vc         INTEGER,
    rb         INTEGER,
    wh         REAL,
    PRIMARY KEY (sym, date)
  );

  CREATE TABLE IF NOT EXISTS positions (
    sym  TEXT PRIMARY KEY,
    data TEXT NOT NULL  -- JSON blob
  );

  CREATE TABLE IF NOT EXISTS alert_rules (
    id   TEXT PRIMARY KEY,
    sym  TEXT,
    field TEXT,
    op   TEXT,
    data TEXT NOT NULL  -- full rule as JSON
  );

  CREATE TABLE IF NOT EXISTS virtual_meta (
    key   TEXT PRIMARY KEY,
    value TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS virtual_positions (
    sym       TEXT PRIMARY KEY,
    name      TEXT,
    shares    REAL,
    avg_cost  REAL,
    date      TEXT
  );

  CREATE TABLE IF NOT EXISTS virtual_trades (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    sym        TEXT,
    name       TEXT,
    action     TEXT,
    shares     REAL,
    price      REAL,
    date       TEXT,
    cash_after REAL
  );

  CREATE TABLE IF NOT EXISTS insider_buys (
    id      INTEGER PRIMARY KEY AUTOINCREMENT,
    sym     TEXT,
    name    TEXT,
    person  TEXT,
    role    TEXT,
    shares  REAL,
    price   REAL,
    value   REAL,
    date    TEXT,
    notes   TEXT,
    added   TEXT
  );

  CREATE TABLE IF NOT EXISTS block_deal_log (
    id     INTEGER PRIMARY KEY AUTOINCREMENT,
    sym    TEXT,
    date   TEXT,
    source TEXT DEFAULT 'argaam',
    deals  TEXT  -- JSON
  );

  CREATE TABLE IF NOT EXISTS meta (
    key   TEXT PRIMARY KEY,
    value TEXT
  );
`);

// ── One-time migration from existing JSON files ───────────────────────────────
function migrateIfEmpty(table, jsonPath, importFn) {
  const count = db.prepare(`SELECT COUNT(*) as n FROM ${table}`).get();
  if (count.n > 0) return;
  if (!existsSync(jsonPath)) return;
  try {
    const data = JSON.parse(readFileSync(jsonPath, 'utf8'));
    importFn(data);
    console.log(`[db] migrated ${table} from ${jsonPath.split('/').pop()}`);
  } catch (e) {
    // Roll back any open transaction so subsequent migrations can start fresh
    try { db.exec('ROLLBACK'); } catch {}
    console.warn(`[db] migration warning for ${table}:`, e.message);
  }
}

// score_history: { sym: [{d, s, m, b, p, md?, vc?, rb?, wh?}] }
migrateIfEmpty('score_history', join(__dirname, 'score_history.json'), data => {
  const ins = db.prepare(`INSERT OR IGNORE INTO score_history
    (sym, date, score, max_score, bias, price, mode, vc, rb, wh)
    VALUES (?,?,?,?,?,?,?,?,?,?)`);
  db.exec('BEGIN');
  for (const [sym, entries] of Object.entries(data || {})) {
    for (const e of (entries || []).slice(-15)) {
      const vcVal = e.vc == null ? null : (e.vc ? 1 : 0);
      const rbVal = e.rb == null ? null : (e.rb ? 1 : 0);
      ins.run(sym, e.d, e.s ?? null, e.m ?? null, e.b ?? null,
              e.p ?? null, e.md ?? null, vcVal, rbVal, e.wh ?? null);
    }
  }
  db.exec('COMMIT');
});

// positions: { sym: {...positionData} }
migrateIfEmpty('positions', join(__dirname, 'positions.json'), data => {
  const ins = db.prepare('INSERT OR IGNORE INTO positions (sym, data) VALUES (?,?)');
  db.exec('BEGIN');
  for (const [sym, pos] of Object.entries(data || {})) {
    ins.run(sym, JSON.stringify(pos));
  }
  db.exec('COMMIT');
});

// alert_rules: [{id, sym, field, op, ...}]
migrateIfEmpty('alert_rules', join(__dirname, 'alert_rules.json'), data => {
  const ins = db.prepare('INSERT OR IGNORE INTO alert_rules (id, sym, field, op, data) VALUES (?,?,?,?,?)');
  db.exec('BEGIN');
  for (const rule of (data || [])) {
    ins.run(rule.id, rule.sym, rule.field, rule.op, JSON.stringify(rule));
  }
  db.exec('COMMIT');
});

// virtual_portfolio: { cash, balance_start, positions: {}, trades: [] }
migrateIfEmpty('virtual_meta', join(__dirname, 'virtual_portfolio.json'), data => {
  const insMeta = db.prepare('INSERT OR IGNORE INTO virtual_meta (key, value) VALUES (?,?)');
  const insPos  = db.prepare('INSERT OR IGNORE INTO virtual_positions (sym,name,shares,avg_cost,date) VALUES (?,?,?,?,?)');
  const insTrade = db.prepare('INSERT INTO virtual_trades (sym,name,action,shares,price,date,cash_after) VALUES (?,?,?,?,?,?,?)');
  db.exec('BEGIN');
  insMeta.run('cash', String(data.cash ?? 100000));
  insMeta.run('balance_start', String(data.balance_start ?? 100000));
  for (const [sym, pos] of Object.entries(data.positions || {})) {
    insPos.run(sym, pos.name ?? sym, pos.shares ?? 0, pos.avg_cost ?? 0, pos.date ?? null);
  }
  for (const t of (data.trades || []).slice().reverse()) {  // oldest first for AUTOINCREMENT order
    insTrade.run(t.sym, t.name ?? t.sym, t.action, t.shares, t.price, t.date, t.cash_after ?? null);
  }
  db.exec('COMMIT');
});

// insider_buys: [{sym, name, person, role, shares, price, value, date, notes, added}]
migrateIfEmpty('insider_buys', join(__dirname, 'insider_buys.json'), data => {
  const ins = db.prepare(`INSERT INTO insider_buys
    (sym,name,person,role,shares,price,value,date,notes,added)
    VALUES (?,?,?,?,?,?,?,?,?,?)`);
  db.exec('BEGIN');
  for (const b of (data || [])) {
    ins.run(b.sym, b.name ?? '', b.person ?? '', b.role ?? '', b.shares ?? 0,
            b.price ?? 0, b.value ?? 0, b.date, b.notes ?? '', b.added ?? new Date().toISOString());
  }
  db.exec('COMMIT');
});

// ── Score history helpers ─────────────────────────────────────────────────────
const _scoreInsert = db.prepare(`
  INSERT OR REPLACE INTO score_history (sym,date,score,max_score,bias,price,mode,vc,rb,wh)
  VALUES (?,?,?,?,?,?,?,?,?,?)
`);
const _scoreForSym = db.prepare(
  'SELECT * FROM score_history WHERE sym=? ORDER BY date DESC LIMIT ?'
);
const _scoreAll    = db.prepare('SELECT * FROM score_history ORDER BY sym, date DESC');
const _scorePrune  = db.prepare(`
  DELETE FROM score_history WHERE sym=? AND date NOT IN (
    SELECT date FROM score_history WHERE sym=? ORDER BY date DESC LIMIT 15
  )
`);

export const scoreHistory = {
  /** Upsert one entry and prune to last 15 per symbol. */
  upsert(sym, entry) {
    const vc = entry.vc == null ? null : (entry.vc ? 1 : 0);
    const rb = entry.rb == null ? null : (entry.rb ? 1 : 0);
    _scoreInsert.run(sym, entry.d, entry.s ?? null, entry.m ?? null, entry.b ?? null,
                     entry.p ?? null, entry.md ?? null, vc, rb, entry.wh ?? null);
    _scorePrune.run(sym, sym);
  },
  /** Returns last `limit` entries for a symbol, newest first. */
  forSym(sym, limit = 15) {
    return _scoreForSym.all(sym, limit).map(rowToScoreEntry);
  },
  /** Returns all entries grouped as { sym: [entries] } for API compatibility. */
  allGrouped() {
    const rows = _scoreAll.all();
    const out = {};
    for (const row of rows) {
      if (!out[row.sym]) out[row.sym] = [];
      if (out[row.sym].length < 15) out[row.sym].push(rowToScoreEntry(row));
    }
    return out;
  },
};

function rowToScoreEntry(row) {
  const e = { d: row.date, s: row.score, m: row.max_score, b: row.bias, p: row.price };
  if (row.mode  != null) e.md = row.mode;
  if (row.vc    != null) e.vc = !!row.vc;
  if (row.rb    != null) e.rb = !!row.rb;
  if (row.wh    != null) e.wh = row.wh;
  return e;
}

// ── Positions helpers ─────────────────────────────────────────────────────────
export const positions = {
  getAll() {
    const rows = db.prepare('SELECT * FROM positions').all();
    return Object.fromEntries(rows.map(r => [r.sym, JSON.parse(r.data)]));
  },
  set(sym, data) {
    db.prepare('INSERT OR REPLACE INTO positions (sym,data) VALUES (?,?)').run(sym, JSON.stringify(data));
  },
  setAll(obj) {
    db.exec('BEGIN');
    db.prepare('DELETE FROM positions').run();
    const ins = db.prepare('INSERT INTO positions (sym,data) VALUES (?,?)');
    for (const [sym, data] of Object.entries(obj || {})) ins.run(sym, JSON.stringify(data));
    db.exec('COMMIT');
  },
};

// ── Alert rules helpers ───────────────────────────────────────────────────────
export const alertRules = {
  getAll() {
    return db.prepare('SELECT data FROM alert_rules').all().map(r => JSON.parse(r.data));
  },
  upsert(rule) {
    db.prepare('INSERT OR REPLACE INTO alert_rules (id,sym,field,op,data) VALUES (?,?,?,?,?)')
      .run(rule.id, rule.sym, rule.field, rule.op, JSON.stringify(rule));
  },
  delete(id) {
    db.prepare('DELETE FROM alert_rules WHERE id=?').run(id);
  },
  updateAll(rules) {
    db.exec('BEGIN');
    db.prepare('DELETE FROM alert_rules').run();
    const ins = db.prepare('INSERT INTO alert_rules (id,sym,field,op,data) VALUES (?,?,?,?,?)');
    for (const r of rules) ins.run(r.id, r.sym, r.field, r.op, JSON.stringify(r));
    db.exec('COMMIT');
  },
};

// ── Virtual portfolio helpers ─────────────────────────────────────────────────
function getVirtualMeta(key, fallback) {
  const row = db.prepare('SELECT value FROM virtual_meta WHERE key=?').get(key);
  return row ? parseFloat(row.value) : fallback;
}
function setVirtualMeta(key, value) {
  db.prepare('INSERT OR REPLACE INTO virtual_meta (key,value) VALUES (?,?)').run(key, String(value));
}

export const virtualPortfolio = {
  get() {
    const cash          = getVirtualMeta('cash', 100000);
    const balance_start = getVirtualMeta('balance_start', 100000);
    const posRows = db.prepare('SELECT * FROM virtual_positions').all();
    const positions = Object.fromEntries(posRows.map(r => [r.sym, {
      sym: r.sym, name: r.name, shares: r.shares, avg_cost: r.avg_cost, date: r.date,
    }]));
    const trades = db.prepare('SELECT * FROM virtual_trades ORDER BY id DESC LIMIT 100').all()
      .map(r => ({ sym: r.sym, name: r.name, action: r.action, shares: r.shares,
                   price: r.price, date: r.date, cash_after: r.cash_after }));
    return { cash, balance_start, positions, trades };
  },

  buy({ sym, name, shares, price }) {
    const cash = getVirtualMeta('cash', 100000);
    const cost = shares * price;
    if (cost > cash) return { error: 'Insufficient virtual cash' };
    const newCash = +(cash - cost).toFixed(4);
    setVirtualMeta('cash', newCash);
    const existing = db.prepare('SELECT * FROM virtual_positions WHERE sym=?').get(sym);
    if (existing) {
      const totalShares = existing.shares + shares;
      const avgCost = +((existing.shares * existing.avg_cost + cost) / totalShares).toFixed(4);
      db.prepare('UPDATE virtual_positions SET shares=?,avg_cost=? WHERE sym=?')
        .run(totalShares, avgCost, sym);
    } else {
      db.prepare('INSERT INTO virtual_positions (sym,name,shares,avg_cost,date) VALUES (?,?,?,?,?)')
        .run(sym, name || sym, shares, +price.toFixed(4), new Date().toISOString().split('T')[0]);
    }
    db.prepare('INSERT INTO virtual_trades (sym,name,action,shares,price,date,cash_after) VALUES (?,?,?,?,?,?,?)')
      .run(sym, name || sym, 'buy', shares, +price.toFixed(4), new Date().toISOString().split('T')[0], newCash);
    return { ok: true };
  },

  sell({ sym, shares, price }) {
    const pos = db.prepare('SELECT * FROM virtual_positions WHERE sym=?').get(sym);
    if (!pos) return { error: `No position for ${sym}` };
    if (shares > pos.shares) return { error: `Only ${pos.shares} shares held` };
    const newShares = pos.shares - shares;
    const cash = getVirtualMeta('cash', 0);
    const newCash = +(cash + shares * price).toFixed(4);
    setVirtualMeta('cash', newCash);
    if (newShares <= 0) {
      db.prepare('DELETE FROM virtual_positions WHERE sym=?').run(sym);
    } else {
      db.prepare('UPDATE virtual_positions SET shares=? WHERE sym=?').run(newShares, sym);
    }
    db.prepare('INSERT INTO virtual_trades (sym,name,action,shares,price,date,cash_after) VALUES (?,?,?,?,?,?,?)')
      .run(sym, pos.name, 'sell', shares, +price.toFixed(4), new Date().toISOString().split('T')[0], newCash);
    return { ok: true };
  },

  reset(balance = 100000) {
    db.exec('BEGIN');
    setVirtualMeta('cash', balance);
    setVirtualMeta('balance_start', balance);
    db.prepare('DELETE FROM virtual_positions').run();
    db.prepare('DELETE FROM virtual_trades').run();
    db.exec('COMMIT');
  },
};

// ── Insider buys helpers ──────────────────────────────────────────────────────
export const insiderBuys = {
  getAll() {
    return db.prepare('SELECT * FROM insider_buys ORDER BY added DESC').all();
  },
  add(buy) {
    db.prepare(`INSERT INTO insider_buys (sym,name,person,role,shares,price,value,date,notes,added)
      VALUES (?,?,?,?,?,?,?,?,?,?)`)
      .run(buy.sym, buy.name ?? '', buy.person ?? '', buy.role ?? '',
           buy.shares ?? 0, buy.price ?? 0, buy.value ?? 0,
           buy.date, buy.notes ?? '', buy.added ?? new Date().toISOString());
  },
  delete(sym, date) {
    db.prepare('DELETE FROM insider_buys WHERE sym LIKE ? AND date=?')
      .run(`%${sym}`, date);
  },
  syncAll(arr) {
    db.exec('BEGIN');
    db.prepare('DELETE FROM insider_buys').run();
    const ins = db.prepare(`INSERT INTO insider_buys (sym,name,person,role,shares,price,value,date,notes,added)
      VALUES (?,?,?,?,?,?,?,?,?,?)`);
    for (const b of (arr || [])) {
      ins.run(b.sym, b.name ?? '', b.person ?? '', b.role ?? '',
              b.shares ?? 0, b.price ?? 0, b.value ?? 0,
              b.date, b.notes ?? '', b.added ?? new Date().toISOString());
    }
    db.exec('COMMIT');
  },
};

// ── Block deal log helpers ────────────────────────────────────────────────────
export const blockDeals = {
  getFrequency() {
    const rows = db.prepare('SELECT sym, date FROM block_deal_log').all();
    const freq = {};
    for (const r of rows) {
      if (!freq[r.sym]) freq[r.sym] = [];
      if (!freq[r.sym].includes(r.date)) freq[r.sym].push(r.date);
    }
    return freq;
  },
  appendDeals(deals, dateStr) {
    const ins = db.prepare('INSERT INTO block_deal_log (sym,date,source,deals) VALUES (?,?,?,?)');
    db.exec('BEGIN');
    for (const d of deals) {
      ins.run(d.sym || d.ticker || '', dateStr, 'argaam', JSON.stringify(d));
    }
    db.exec('COMMIT');
  },
  getLastDeals() {
    const row = db.prepare("SELECT value FROM meta WHERE key='last_block_deals'").get();
    return row ? JSON.parse(row.value) : null;
  },
  setLastDeals(data, date) {
    db.prepare("INSERT OR REPLACE INTO meta (key,value) VALUES ('last_block_deals',?)")
      .run(JSON.stringify({ data, date }));
  },
};

// ── Meta key-value helpers ────────────────────────────────────────────────────
export const metaStore = {
  get(key, fallback = null) {
    const row = db.prepare('SELECT value FROM meta WHERE key=?').get(key);
    if (!row) return fallback;
    try { return JSON.parse(row.value); } catch { return row.value; }
  },
  set(key, value) {
    db.prepare('INSERT OR REPLACE INTO meta (key,value) VALUES (?,?)').run(key, JSON.stringify(value));
  },
};
