/**
 * Local approximation of Glama's Tool Definition Quality Score (TDQS).
 *
 * Grades each tool description across five dimensions (purpose clarity,
 * usage guidelines, behavioural transparency, conciseness, contextual
 * completeness — parameter semantics is out-of-scope since we grade
 * the description text, not the parameter schemas).
 *
 * Uses an LLM as judge. Output: per-tool scores, aggregate averages,
 * rough letter grade, and the 10 weakest tools so we know what to fix.
 *
 * Runs independently — operates on ToolDefinition objects loaded from
 * the compiled esm/src/gen/tools.js. Compare runs across branches to
 * see the TDQS impact of a description change.
 *
 *   node gen/node/score-tdqs.mjs                # score all 330+ tools
 *   SCORE_OPS=accounting-invoices-list node ... # just one tool
 *   SCORE_SAMPLE=30 node gen/node/score-tdqs.mjs  # stratified sample
 *
 * Env:
 *   OPENAI_API_KEY — required
 *   OPENAI_MODEL   — default gpt-4.1-mini
 */

import fs from "node:fs";
import path from "node:path";
import OpenAI from "openai";

const REPO = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..", "..");

// Load .env.local
const envLocal = path.join(REPO, ".env.local");
if (fs.existsSync(envLocal)) {
  for (const line of fs.readFileSync(envLocal, "utf8").split("\n")) {
    const m = /^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/.exec(line);
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}
if (!process.env.OPENAI_API_KEY) {
  console.error("OPENAI_API_KEY not set");
  process.exit(2);
}

const MODEL = process.env.OPENAI_MODEL ?? "gpt-4.1-mini";
const OP_FILTER = (process.env.SCORE_OPS ?? "").split(",").map((s) => s.trim()).filter(Boolean);
const SAMPLE_SIZE = Number(process.env.SCORE_SAMPLE ?? 0);
const CONCURRENCY = Number(process.env.SCORE_CONCURRENCY ?? 10);
const openai = new OpenAI();

const RUBRIC = `Score an MCP tool's description across five dimensions on a 1–5 scale.

Dimensions (from Glama's Tool Definition Quality Score framework):
  1. purposeClarity   — Is it obvious *what* the tool does? (1 = "List things" / 5 = specific verb + object + context)
  2. usageGuidelines  — Does it say *when* to use (or not use) this tool vs siblings? (1 = no hint / 5 = explicit "use X vs Y")
  3. behaviouralTransparency — Are side effects, idempotency, destructive behaviour explicit? (1 = silent / 5 = calls out read-only / destructive / creates-duplicates / etc.)
  4. conciseness      — Tight prose: neither terse-to-useless nor padded (1 = either extreme / 5 = dense and readable)
  5. contextualCompleteness — Non-obvious context for successful calls: auth scoping, multi-tenant, connection state, etc. (1 = nothing / 5 = tells you what's needed beyond just parameter types)

Return JSON: { purposeClarity:int, usageGuidelines:int, behaviouralTransparency:int, conciseness:int, contextualCompleteness:int, overall:float, comment:string }

overall = weighted mean with weights purposeClarity=1.2, usageGuidelines=1.1, behaviouralTransparency=1.0, conciseness=0.7, contextualCompleteness=1.0 (divide by 5.0).

comment is a one-sentence diagnosis. Do not over-praise — real MCP tools in the wild average ~2.5.`;

async function scoreOne(tool) {
  const input = {
    name: tool.name,
    scopes: tool.scopes ?? [],
    description: tool.description ?? "",
  };
  const resp = await openai.chat.completions.create({
    model: MODEL,
    temperature: 0,
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: RUBRIC },
      { role: "user", content: JSON.stringify(input) },
    ],
  });
  const raw = resp.choices[0]?.message?.content ?? "{}";
  return JSON.parse(raw);
}

function letterGrade(avg) {
  if (avg >= 4.5) return "A";
  if (avg >= 3.7) return "B";
  if (avg >= 2.9) return "C";
  if (avg >= 2.0) return "D";
  return "F";
}

async function main() {
  const { generatedTools } = await import("../../esm/src/gen/tools.js");
  let tools = generatedTools;
  if (OP_FILTER.length) tools = tools.filter((t) => OP_FILTER.includes(t.name));
  if (SAMPLE_SIZE > 0 && SAMPLE_SIZE < tools.length) {
    // Stratified sample: take every k-th so we cover all API surfaces
    const k = Math.floor(tools.length / SAMPLE_SIZE);
    tools = tools.filter((_, i) => i % k === 0).slice(0, SAMPLE_SIZE);
  }
  console.error(`[tdqs] scoring ${tools.length} tools; model=${MODEL}; concurrency=${CONCURRENCY}`);

  const startedAt = Date.now();
  const results = new Array(tools.length);
  let done = 0;

  const chunks = Array.from({ length: CONCURRENCY }, () => []);
  tools.forEach((t, i) => chunks[i % CONCURRENCY].push({ tool: t, i }));
  await Promise.all(chunks.map(async (slice) => {
    for (const { tool, i } of slice) {
      try {
        results[i] = { tool, score: await scoreOne(tool) };
      } catch (err) {
        results[i] = { tool, error: err instanceof Error ? err.message : String(err) };
      }
      done++;
      if (done % 10 === 0 || done === tools.length) {
        process.stderr.write(`\r[tdqs] ${done}/${tools.length} (${((Date.now() - startedAt) / 1000).toFixed(1)}s)   `);
      }
    }
  }));
  process.stderr.write("\n");

  const ok = results.filter((r) => r?.score);
  const failed = results.filter((r) => r?.error);

  // Aggregate
  const dims = ["purposeClarity", "usageGuidelines", "behaviouralTransparency", "conciseness", "contextualCompleteness"];
  const sums = Object.fromEntries(dims.map((d) => [d, 0]));
  let overallSum = 0;
  for (const r of ok) {
    for (const d of dims) sums[d] += r.score[d] ?? 0;
    overallSum += r.score.overall ?? 0;
  }
  const avg = Object.fromEntries(dims.map((d) => [d, sums[d] / ok.length]));
  const overallAvg = overallSum / ok.length;

  console.log();
  console.log(`Scored ${ok.length}/${tools.length} tools (${failed.length} failures)`);
  console.log("-".repeat(60));
  for (const d of dims) console.log(`  ${d.padEnd(26)} ${avg[d].toFixed(2)}`);
  console.log("-".repeat(60));
  console.log(`  overall                    ${overallAvg.toFixed(2)} → ${letterGrade(overallAvg)}`);

  // Weakest 10
  const sorted = [...ok].sort((a, b) => (a.score.overall ?? 0) - (b.score.overall ?? 0));
  console.log();
  console.log("Weakest 10 tools:");
  for (const r of sorted.slice(0, 10)) {
    console.log(`  ${r.score.overall.toFixed(2)}  ${r.tool.name.padEnd(40)} ${r.score.comment}`);
  }

  // Persist full report
  const out = path.join(REPO, "specs", "apideck-mcp", "tdqs-report.json");
  fs.writeFileSync(out, JSON.stringify({
    model: MODEL,
    scored: ok.length,
    failed: failed.length,
    avg,
    overall: overallAvg,
    grade: letterGrade(overallAvg),
    tools: ok.map((r) => ({ name: r.tool.name, ...r.score })),
  }, null, 2));
  console.error(`\n[tdqs] full report → ${path.relative(REPO, out)}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
