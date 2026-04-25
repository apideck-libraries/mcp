/**
 * Full-matrix parity probe: runs every generated tool through both
 * engines against real Apideck. Tools with required path params
 * deliberately hit the Zod validation path (both engines should reject
 * identically).
 *
 * Concurrency is bounded so we don't hammer Apideck with 660 simultaneous
 * requests.
 *
 *   APIDECK_API_KEY=... APIDECK_APP_ID=... APIDECK_CONSUMER_ID=... \
 *     node test/gen-parity-full.mjs [concurrency]
 */

import fs from "node:fs";
import { createMCPServer } from "../esm/src/mcp-server/server.js";
import { createGeneratedMCPServer } from "../esm/src/gen/create-server.js";
import { ApideckMcpCore } from "../esm/src/core.js";
import { generatedTools } from "../esm/src/gen/tools.js";

const apiKey = process.env.APIDECK_API_KEY;
const appId = process.env.APIDECK_APP_ID;
const consumerId = process.env.APIDECK_CONSUMER_ID;
if (!apiKey || !appId || !consumerId) {
  console.error("Missing env APIDECK_API_KEY / APIDECK_APP_ID / APIDECK_CONSUMER_ID");
  process.exit(2);
}

const CONCURRENCY = Number(process.argv[2] ?? 8);

const logger = {
  level: "info",
  debug() {},
  info() {},
  warning() {},
  error() {},
};
const getSDK = () => new ApideckMcpCore({ security: { apiKey }, appId, consumerId });

const speakBooted = createMCPServer({ logger, dynamic: true, getSDK });
const customBooted = createGeneratedMCPServer({ logger, dynamic: true, getSDK });
const speakExec = speakBooted.server._registeredTools.execute_tool.handler;
const customExec = customBooted.server._registeredTools.execute_tool.handler;

// With empty args, mutating tools fail Zod validation (required body
// fields absent), so dispatching them still provides a parity signal
// without touching external state. We only skip tools explicitly flagged
// as unsafe to even attempt (none at the moment).
const SKIP_REGEX = /(^$)/; // effectively disabled

// Default sensible args for some classes of tool. Missing path params
// will still go through validation which is the intent.
const ARG_OVERRIDES = {
  "vault-consumers-get": { consumer_id: "test-consumer" },
  "vault-consumers-delete": null, // skipped anyway
  "vault-connections-delete": null,
};

const VOLATILE_KEYS = new Set([
  "request_count", "aggregated_request_count", "request_counts",
  "request_count_updated", "created_at", "updated_at", "last_refresh_failed_at",
  "credentials_expire_at", "authorize_url", "revoke_url", "created", "modified",
  "cursor", "next_cursor", "previous_cursor", "cursors", "meta",
  "timestamp", "executed_at", "duration_ms",
  "links", "_links", "current", "next", "previous", "self",
]);

function normalise(v) {
  if (Array.isArray(v)) return v.map(normalise);
  if (v && typeof v === "object") {
    const out = {};
    for (const [k, val] of Object.entries(v)) {
      if (VOLATILE_KEYS.has(k)) continue;
      out[k] = normalise(val);
    }
    return out;
  }
  return v;
}

function diff(a, b, path = "", out = []) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) out.push(`${path}: array length ${a.length} vs ${b.length}`);
    const n = Math.min(a.length, b.length);
    for (let i = 0; i < n; i++) diff(a[i], b[i], `${path}[${i}]`, out);
    return out;
  }
  if (a && b && typeof a === "object" && typeof b === "object") {
    for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) {
      if (!(k in a)) out.push(`${path}.${k}: only in custom`);
      else if (!(k in b)) out.push(`${path}.${k}: only in legacy`);
      else diff(a[k], b[k], `${path}.${k}`, out);
    }
    return out;
  }
  if (a !== b) out.push(`${path}: ${JSON.stringify(a)?.slice(0, 50)} ≠ ${JSON.stringify(b)?.slice(0, 50)}`);
  return out;
}

function classify(legacyBody, customBody) {
  if (legacyBody === customBody) return { kind: "exact" };
  try {
    const a = JSON.parse(legacyBody);
    const b = JSON.parse(customBody);
    const diffs = diff(normalise(a), normalise(b));
    if (diffs.length === 0) return { kind: "normalised" };
    return { kind: "json-diff", diffs };
  } catch {
    // Non-JSON: may be Zod validation error text which differs between
    // engines in format (Speakeasy wraps under <issues>, we use plain text).
    // Check if both are validation errors and match at the required-field level.
    const lf = extractMissingFields(legacyBody);
    const cf = extractMissingFields(customBody);
    if (lf.length > 0 && cf.length > 0 && lf.sort().join(",") === cf.sort().join(",")) {
      return { kind: "validation-same" };
    }
    return { kind: "text-diff", legacyPreview: legacyBody.slice(0, 80), customPreview: customBody.slice(0, 80) };
  }
}

function extractMissingFields(text) {
  // Match "at X" from Zod prettify output AND "Missing required path parameter: X"
  const fields = new Set();
  for (const m of text.matchAll(/at (\w+)/g)) fields.add(m[1]);
  for (const m of text.matchAll(/path parameter: (\w+)/g)) fields.add(m[1]);
  return [...fields];
}

async function runOne(name) {
  const args = ARG_OVERRIDES[name] ?? {};
  if (args === null) return { name, kind: "skipped" };
  // Engines diverge on shape: legacy wraps under `request`, custom is flat.
  const legacyPayload = { name, arguments: { request: args } };
  const customPayload = { name, arguments: args };
  let legacy, custom;
  try {
    [legacy, custom] = await Promise.all([
      speakExec(legacyPayload, { signal: AbortSignal.timeout(20_000) }),
      customExec(customPayload, { signal: AbortSignal.timeout(20_000) }),
    ]);
  } catch (err) {
    return { name, kind: "throw", detail: err.message };
  }
  const legacyBody = legacy.content?.[0]?.text ?? "";
  const customBody = custom.content?.[0]?.text ?? "";
  return { name, ...classify(legacyBody, customBody), legacyErr: legacy.isError ?? false, customErr: custom.isError ?? false };
}

async function limitedMap(items, limit, fn) {
  const results = new Array(items.length);
  let i = 0;
  async function worker() {
    while (true) {
      const idx = i++;
      if (idx >= items.length) return;
      results[idx] = await fn(items[idx], idx);
      if ((idx + 1) % 20 === 0) process.stderr.write(`.${Math.floor((idx + 1) / 20)}.`);
    }
  }
  await Promise.all(Array.from({ length: limit }, worker));
  return results;
}

// Skip mutating tools unless they have an override
const allNames = generatedTools.map((t) => t.name).sort();
const testable = allNames.filter((n) => !SKIP_REGEX.test(n) || ARG_OVERRIDES[n]);
console.log(`Full parity probe — ${testable.length} testable of ${allNames.length} tools  concurrency=${CONCURRENCY}`);
console.log();

const started = Date.now();
const results = await limitedMap(testable, CONCURRENCY, runOne);
const elapsed = ((Date.now() - started) / 1000).toFixed(1);
process.stderr.write("\n\n");

const buckets = { exact: 0, normalised: 0, "validation-same": 0, "json-diff": 0, "text-diff": 0, throw: 0, skipped: 0 };
const mismatches = [];
for (const r of results) {
  buckets[r.kind] = (buckets[r.kind] ?? 0) + 1;
  if (r.kind === "json-diff" || r.kind === "text-diff" || r.kind === "throw") mismatches.push(r);
}

console.log(`elapsed: ${elapsed}s`);
for (const [k, n] of Object.entries(buckets)) {
  if (n === 0) continue;
  console.log(`  ${k.padEnd(16)} ${n}`);
}
if (mismatches.length > 0) {
  console.log("\nMismatches:");
  for (const m of mismatches.slice(0, 30)) {
    const sample = m.diffs?.[0] ?? m.legacyPreview ?? m.detail ?? "";
    console.log(`  ${m.name.padEnd(44)} ${m.kind.padEnd(12)} ${sample.slice(0, 100)}`);
  }
  if (mismatches.length > 30) console.log(`  … ${mismatches.length - 30} more`);
}

fs.writeFileSync("/tmp/parity-full.json", JSON.stringify(results, null, 2));
console.log(`\nFull results: /tmp/parity-full.json`);
process.exit(mismatches.length === 0 ? 0 : 1);
