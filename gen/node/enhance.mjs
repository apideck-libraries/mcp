/**
 * Lightweight OpenAPI description enhancer.
 *
 * One LLM call per operation; rewrites `summary` and `description` based
 * on op metadata (method, path, tags, existing summary/description) and
 * a compact view of the request/response shape. Parameter descriptions
 * are left untouched — Apideck's upstream spec already carries decent
 * field-level docs.
 *
 * Design choices:
 *   - Single call per op (not per parameter) keeps prompt sizes bounded
 *     and the full run finishes in ~5 min at p=10 concurrency.
 *   - Cached by a hash of (operationId, prompt input) in a sidecar JSON.
 *     Re-runs skip ops whose inputs haven't changed.
 *   - Output is an overlay applied to the raw spec, matching the
 *     Speakeasy overlay shape. Written as YAML next to the raw spec.
 *
 *   node gen/node/enhance.mjs
 *
 * Env:
 *   OPENAI_API_KEY      — required
 *   OPENAI_MODEL        — default gpt-4.1-mini
 *   ENHANCE_CONCURRENCY — default 10
 *   ENHANCE_OPS         — comma-separated operationId whitelist; default all
 *   ENHANCE_FORCE       — '1' to bypass cache
 */

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import yaml from "js-yaml";
import OpenAI from "openai";

const REPO = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..", "..");
const SPEC_URL = process.env.SPEC_URL
  ?? "https://ci-spec-unify.s3.eu-central-1.amazonaws.com/speakeasy-spec.yml";
const OUT_DIR = path.join(REPO, "specs", "apideck-mcp");
const OUT_FILE = path.join(OUT_DIR, "enhanced-openapi.yml");
const CACHE_FILE = path.join(OUT_DIR, "enhance-cache.json");

const MODEL = process.env.OPENAI_MODEL ?? "gpt-4.1-mini";
const CONCURRENCY = Number(process.env.ENHANCE_CONCURRENCY ?? 10);
const OP_FILTER = (process.env.ENHANCE_OPS ?? "").split(",").map((s) => s.trim()).filter(Boolean);
const FORCE = process.env.ENHANCE_FORCE === "1";

if (!process.env.OPENAI_API_KEY) {
  console.error("OPENAI_API_KEY not set");
  process.exit(2);
}

const openai = new OpenAI();

// Load .env.local early; OPENAI_API_KEY already handled via process.env, but
// this lets callers tweak OPENAI_MODEL / ENHANCE_* without re-exporting.
const envLocal = path.join(REPO, ".env.local");
if (fs.existsSync(envLocal)) {
  for (const line of fs.readFileSync(envLocal, "utf8").split("\n")) {
    const m = /^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/.exec(line);
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

async function fetchSpec() {
  console.error(`[enhance] fetching ${SPEC_URL}`);
  const resp = await fetch(SPEC_URL);
  if (!resp.ok) throw new Error(`spec fetch ${resp.status}`);
  return yaml.load(await resp.text());
}

function loadCache() {
  if (FORCE || !fs.existsSync(CACHE_FILE)) return {};
  try {
    return JSON.parse(fs.readFileSync(CACHE_FILE, "utf8"));
  } catch {
    return {};
  }
}

function saveCache(cache) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
}

function hashInput(obj) {
  return crypto.createHash("sha256").update(JSON.stringify(obj)).digest("hex").slice(0, 16);
}

/** Build a compact view of a request/response body schema for the prompt. */
function compactSchema(spec, schema, depth = 0, seen = new Set()) {
  if (!schema || depth > 2) return null;
  if (schema.$ref) {
    if (seen.has(schema.$ref)) return { $ref: schema.$ref };
    const parts = schema.$ref.slice(2).split("/");
    let node = spec;
    for (const p of parts) node = node?.[p];
    if (!node) return null;
    return compactSchema(spec, node, depth + 1, new Set(seen).add(schema.$ref));
  }
  if (schema.type === "array") {
    return { type: "array", items: compactSchema(spec, schema.items, depth + 1, seen) };
  }
  if (schema.type === "object" || schema.properties) {
    const props = {};
    for (const [k, v] of Object.entries(schema.properties ?? {})) {
      if (Object.keys(props).length >= 12) {
        props["…"] = "(truncated)";
        break;
      }
      if (v.$ref) props[k] = { $ref: v.$ref.split("/").at(-1) };
      else if (v.type === "array") props[k] = `array<${v.items?.type ?? "?"}>`;
      else if (v.enum) props[k] = `enum<${v.enum.slice(0, 6).join("|")}${v.enum.length > 6 ? "|…" : ""}>`;
      else props[k] = v.type ?? "?";
    }
    return { type: "object", properties: props };
  }
  return { type: schema.type ?? "?" };
}

function buildPromptInput(spec, op, method, apiPath, opId) {
  const rb = op.requestBody?.content?.["application/json"]?.schema
    ?? op.requestBody?.content?.["*/*"]?.schema;
  const rs = op.responses?.["200"]?.content?.["application/json"]?.schema
    ?? op.responses?.["201"]?.content?.["application/json"]?.schema;
  return {
    operationId: opId,
    method: method.toUpperCase(),
    path: apiPath,
    tags: op.tags ?? [],
    currentSummary: op.summary ?? "",
    currentDescription: op.description ?? "",
    requestBody: rb ? compactSchema(spec, rb) : null,
    responseBody: rs ? compactSchema(spec, rs) : null,
  };
}

const SYSTEM_PROMPT = `You rewrite OpenAPI operation documentation so that LLM agents can pick the right tool on first try.
For each operation you're given:
  - operationId, method, path, tags
  - current summary + description (may be terse or empty)
  - compact view of request/response body shape

Return JSON { summary, description } where:
  - summary  : 1 sentence, <= 90 chars, active voice, starts with a verb, no trailing punctuation issues
  - description: 2-4 sentences. Cover: (1) what it does, (2) when to use it vs sibling tools,
                  (3) important side effects or data it reads/writes, (4) any non-obvious constraints.
                  Do not list parameters — those are documented elsewhere.
                  Don't invent behaviour not implied by the spec.
Plain prose, no markdown headings, no emoji.`;

async function enhanceOne(op, method, apiPath, spec, cache) {
  const opId = op.operationId ?? `${method}:${apiPath}`;
  if (OP_FILTER.length && !OP_FILTER.includes(opId)) return null;

  const input = buildPromptInput(spec, op, method, apiPath, opId);
  const key = hashInput({ model: MODEL, input });
  if (!FORCE && cache[key]) return { opId, ...cache[key], cached: true };

  const resp = await openai.chat.completions.create({
    model: MODEL,
    temperature: 0.2,
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: JSON.stringify(input) },
    ],
  });
  const raw = resp.choices[0]?.message?.content ?? "{}";
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error(`non-JSON reply for ${opId}: ${raw.slice(0, 200)}`);
  }
  if (!parsed.summary || !parsed.description) {
    throw new Error(`missing fields for ${opId}: ${raw.slice(0, 200)}`);
  }
  const out = { summary: parsed.summary.trim(), description: parsed.description.trim() };
  cache[key] = out;
  return { opId, ...out, cached: false };
}

async function runAll() {
  const spec = await fetchSpec();
  const cache = loadCache();

  const ops = [];
  for (const [apiPath, pathItem] of Object.entries(spec.paths ?? {})) {
    for (const method of ["get", "post", "put", "patch", "delete", "options"]) {
      const op = pathItem[method];
      if (!op) continue;
      ops.push({ op, method, apiPath });
    }
  }
  console.error(`[enhance] ${ops.length} operations total; concurrency=${CONCURRENCY}; model=${MODEL}`);

  let done = 0;
  let cached = 0;
  let failed = 0;
  const startedAt = Date.now();

  async function worker(slice) {
    for (const { op, method, apiPath } of slice) {
      try {
        const result = await enhanceOne(op, method, apiPath, spec, cache);
        if (result === null) continue;
        op.summary = result.summary;
        op.description = result.description;
        if (result.cached) cached++;
      } catch (err) {
        failed++;
        console.error(`  FAIL ${op.operationId}: ${err.message}`);
      }
      done++;
      if (done % 10 === 0 || done === ops.length) {
        const elapsed = ((Date.now() - startedAt) / 1000).toFixed(1);
        process.stderr.write(`\r[enhance] ${done}/${ops.length} (cached=${cached}, failed=${failed}, ${elapsed}s)   `);
      }
    }
  }

  // Round-robin chunking for even load distribution across workers.
  const chunks = Array.from({ length: CONCURRENCY }, () => []);
  ops.forEach((o, i) => chunks[i % CONCURRENCY].push(o));
  await Promise.all(chunks.map(worker));

  process.stderr.write("\n");

  // Persist periodically — already done per-op in cache; do it one more time
  saveCache(cache);

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT_FILE, yaml.dump(spec, { lineWidth: 120 }));
  const size = fs.statSync(OUT_FILE).size;
  console.error(`[enhance] wrote ${path.relative(REPO, OUT_FILE)} (${(size / 1024).toFixed(0)} KB)`);
  console.error(`[enhance] cache at ${path.relative(REPO, CACHE_FILE)} — ${Object.keys(cache).length} entries`);

  if (failed > 0) process.exit(1);
}

runAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
