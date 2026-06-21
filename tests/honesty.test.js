/**
 * Honesty guard — the dead 9-pt score must never be framed as a buy signal in
 * user-facing copy. Twice the framing crept back (whale cull, first sweep), so
 * this test fails the build if banned buy-advice phrases reappear.
 *
 * Standard: the score is DESCRIPTIVE trend-state context, NOT advice. The only
 * validated buy-list is the Momentum tab. See memory edge_validation_findings.
 *
 * Run: node --test tests/honesty.test.js
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const ASSETS = join(ROOT, 'dashboard', 'assets');

// Banned buy-advice phrasing for the 9-pt score (case-insensitive).
const BANNED = [
  /high(?:est)?[-\s]?conviction/i,
  /priority entr/i,
  /strong opportunit/i,
  /\btop pick/i,
  /justify (?:new )?entr/i,
  /\bbuy now\b/i,
  /conviction (?:long|buy|entry)/i,
  /\bTop Setups\b/,
];

// A line is EXCUSED if it carries the honest reframe context, or is a code
// comment, or is the deliberately-kept cautionary sell side.
const EXCUSE = [
  /trend[-\s]?state/i, /descriptive/i, /not a buy/i, /momentum tab/i,
  /lagged/i, /negative signal/i, /don't buy/i,
];
const isComment = (l) => {
  const t = l.trim();
  return t.startsWith('//') || t.startsWith('*') || t.startsWith('/*');
};

function scanFile(abs, rel) {
  const lines = readFileSync(abs, 'utf8').split('\n');
  const hits = [];
  lines.forEach((line, i) => {
    if (isComment(line)) return;
    if (EXCUSE.some((rx) => rx.test(line))) return;
    for (const rx of BANNED) {
      if (rx.test(line)) {
        hits.push(`${rel}:${i + 1}: ${line.trim().slice(0, 120)}`);
        break;
      }
    }
  });
  return hits;
}

function targetFiles() {
  const files = [join(ROOT, 'dashboard', 'index.html')];
  for (const f of readdirSync(ASSETS)) {
    if (f.endsWith('.js') || f.endsWith('.html')) files.push(join(ASSETS, f));
  }
  return files;
}

describe('honesty guard — no buy-advice framing of the 9-pt score', () => {
  it('finds zero banned buy-advice phrases in user-facing dashboard copy', () => {
    const violations = [];
    for (const abs of targetFiles()) {
      const rel = abs.slice(ROOT.length + 1);
      violations.push(...scanFile(abs, rel));
    }
    assert.deepEqual(
      violations,
      [],
      `Banned buy-advice phrasing for the dead 9-pt score (reframe as descriptive ` +
      `trend state; validated buy-list = Momentum tab):\n  ${violations.join('\n  ')}`
    );
  });
});
