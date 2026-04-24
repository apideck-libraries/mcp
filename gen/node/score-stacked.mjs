/**
 * Preview the TDQS grade we'd get after BOTH PR #47 (LLM enhancer) AND
 * PR #44 (richDescription template) land together. Takes each generated
 * tool, stacks the enhanced description + MCP-specific scaffolding
 * (side effects, usage, connection context, pagination), then scores.
 *
 *   node gen/node/score-stacked.mjs
 *
 * Consumes the enhancer output at specs/apideck-mcp/enhanced-openapi.yml
 * plus the generated tool list for metadata (method, scope, etc.).
 */

import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import OpenAI from "openai";

const REPO = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..", "..");

const envLocal = path.join(REPO, ".env.local");
if (fs.existsSync(envLocal)) {
  for (const line of fs.readFileSync(envLocal, "utf8").split("\n")) {
    const m = /^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/.exec(line);
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}
if (!process.env.OPENAI_API_KEY) process.exit(2);

const MODEL = process.env.OPENAI_MODEL ?? "gpt-4.1-mini";
const SAMPLE_SIZE = Number(process.env.SCORE_SAMPLE ?? 30);
const openai = new OpenAI();

const RUBRIC = `Score an MCP tool's description across five dimensions on a 1–5 scale.
Dimensions: purposeClarity, usageGuidelines, behaviouralTransparency, conciseness, contextualCompleteness.
Return JSON with each as int + overall (weighted mean, weights 1.2/1.1/1.0/0.7/1.0, ÷5) + one-sentence comment. Real MCP tools in the wild average ~2.5.`;

function usageHint(name) {
  const suffix = name.split("-").at(-1);
  const base = name.split("-").slice(0, -1).join("-");
  switch (suffix) {
    case "list": return `Use when you need multiple records or don't yet know the target id. For a single known record, call \`${base}-get\` instead.`;
    case "get": return `Use when you already have the record id. To browse or search, call \`${base}-list\`.`;
    case "create": return `Use to add a new record. Check \`${base}-list\` first if duplicates are a concern — this tool doesn't dedupe.`;
    case "update": return `Use to modify an existing record. Requires the record id. Pass only the fields you want changed.`;
    case "delete": return `Use only when the user has explicitly confirmed deletion. No soft-delete — the record is removed from the upstream service.`;
    case "search": return `Use for keyword / filtered lookups when \`${base}-list\` is too broad.`;
    default: return null;
  }
}

function sideEffect(method, suffix) {
  if (method === "GET" || method === "HEAD") return "Read-only; safe to call repeatedly.";
  if (method === "DELETE") return "**Destructive**: permanently deletes the target record on the connected service. Confirm with the user before calling.";
  if (suffix === "create" || method === "POST") return "Creates a new record on the connected service. Not idempotent — retrying may create duplicates.";
  if (suffix === "update" || method === "PATCH") return "Updates fields on an existing record. Only the fields you pass are modified.";
  if (method === "PUT") return "Replaces the target record.";
  return null;
}

function compose(name, method, summary, description, isMeta) {
  const suffix = name.split("-").at(-1);
  const sections = [];
  if (summary) sections.push(summary.endsWith(".") ? summary : summary + ".");
  if (description) sections.push(description);
  const se = sideEffect(method, suffix);
  if (se) sections.push(se);
  const ug = usageHint(name);
  if (ug) sections.push(ug);
  if (!isMeta) {
    const unifiedApi = name.split("-")[0];
    sections.push(
      `Requires an active \`${unifiedApi}\` connection on the consumer. If the consumer has multiple \`${unifiedApi}\` services connected, pass \`x-apideck-service-id\` (e.g. "xero", "quickbooks") to target one. Consumer auth is resolved server-side — don't pass API keys in arguments.`,
    );
  }
  return sections.join("\n\n");
}

async function scoreOne(name, description) {
  const resp = await openai.chat.completions.create({
    model: MODEL,
    temperature: 0,
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: RUBRIC },
      { role: "user", content: JSON.stringify({ name, description }) },
    ],
  });
  return JSON.parse(resp.choices[0]?.message?.content ?? "{}");
}

function letterGrade(avg) {
  if (avg >= 4.5) return "A";
  if (avg >= 3.7) return "B";
  if (avg >= 2.9) return "C";
  if (avg >= 2.0) return "D";
  return "F";
}

async function main() {
  const spec = yaml.load(fs.readFileSync(path.join(REPO, "specs", "apideck-mcp", "enhanced-openapi.yml"), "utf8"));
  const { generatedTools } = await import("../../esm/src/gen/tools.js");
  const byName = new Map(generatedTools.map((t) => [t.name, t]));

  // Walk spec, compose stacked description, score sample
  const items = [];
  for (const [apiPath, pathItem] of Object.entries(spec.paths ?? {})) {
    for (const method of ["get", "post", "put", "patch", "delete", "options"]) {
      const op = pathItem[method];
      if (!op) continue;
      const group = op["x-speakeasy-group"];
      const override = op["x-speakeasy-name-override"];
      if (!group || !override) continue;
      const name = `${group.replaceAll(".", "-")}-${override}`
        .replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2").toLowerCase();
      if (!byName.has(name)) continue;
      const unifiedApi = name.split("-")[0];
      const isMeta = ["vault", "connector", "proxy"].includes(unifiedApi);
      const stacked = compose(name, method.toUpperCase(), op.summary ?? "", op.description ?? "", isMeta);
      items.push({ name, stacked });
    }
  }

  const k = Math.max(1, Math.floor(items.length / SAMPLE_SIZE));
  const sampled = items.filter((_, i) => i % k === 0).slice(0, SAMPLE_SIZE);
  console.error(`[stacked] scoring ${sampled.length} stacked descriptions`);

  const startedAt = Date.now();
  const scored = [];
  for (let i = 0; i < sampled.length; i += 10) {
    const batch = sampled.slice(i, i + 10);
    const results = await Promise.all(batch.map(async (it) => ({ ...it, score: await scoreOne(it.name, it.stacked) })));
    scored.push(...results);
    process.stderr.write(`\r[stacked] ${scored.length}/${sampled.length} (${((Date.now() - startedAt) / 1000).toFixed(1)}s)   `);
  }
  process.stderr.write("\n");

  const dims = ["purposeClarity", "usageGuidelines", "behaviouralTransparency", "conciseness", "contextualCompleteness"];
  const sums = Object.fromEntries(dims.map((d) => [d, 0]));
  let overallSum = 0;
  for (const r of scored) {
    for (const d of dims) sums[d] += r.score[d] ?? 0;
    overallSum += r.score.overall ?? 0;
  }
  console.log();
  console.log(`Scored ${scored.length} stacked descriptions`);
  console.log("-".repeat(60));
  for (const d of dims) console.log(`  ${d.padEnd(26)} ${(sums[d] / scored.length).toFixed(2)}`);
  console.log("-".repeat(60));
  console.log(`  overall                    ${(overallSum / scored.length).toFixed(2)} → ${letterGrade(overallSum / scored.length)}`);

  console.log();
  console.log("Sample stacked description for accounting-invoices-list:");
  const sample = sampled.find((it) => it.name === "accounting-invoices-list") ?? sampled[0];
  console.log(sample.stacked);
}

main().catch((err) => { console.error(err); process.exit(1); });
