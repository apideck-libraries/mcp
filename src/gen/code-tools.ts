/**
 * Two meta-tools for code-orchestrated agents.
 *
 * Follows the pattern described in Anthropic's "building agents that
 * reach production systems with MCP" post — a thin tool surface that
 * the agent drives by writing code, instead of materialising 330
 * individual tool definitions into context.
 *
 *   apideck_search(query)  — browse the Apideck endpoint catalog
 *   apideck_run(script)    — run a short async script against the
 *                            bound `apideck.*` SDK in a sandbox, return
 *                            just the final value
 */

import * as z from "zod";
import type { ToolDefinition } from "../mcp-server/tools.js";
import { runScript, searchTools } from "./sandbox.js";

export const apideckSearch: ToolDefinition<{
  query: z.ZodOptional<z.ZodString>;
}> = {
  name: "apideck_search",
  description:
    "Search the Apideck endpoint catalog. Returns matching endpoints as "
    + "{ name, method, description, scopes } so you can decide which ones "
    + "to call from apideck_run. Pass a space-separated query, e.g. "
    + "\"invoices list\" or \"employees create\". Omit the query to list everything.",
  scopes: ["read"],
  annotations: {
    title: "Search Apideck endpoints",
    readOnlyHint: true,
    destructiveHint: false,
    idempotentHint: true,
    openWorldHint: false,
  },
  args: {
    query: z.string().optional().describe(
      "Space-separated search terms matched against endpoint name, description, and scope. Omit to list all endpoints.",
    ),
  },
  async tool(_client, args) {
    const results = searchTools(args.query ?? "");
    return {
      content: [{
        type: "text",
        text: JSON.stringify(
          { count: results.length, endpoints: results },
          null,
          2,
        ),
      }],
    };
  },
};

export const apideckRun: ToolDefinition<{
  script: z.ZodString;
  timeout_ms: z.ZodOptional<z.ZodNumber>;
}> = {
  name: "apideck_run",
  description: [
    "Run a short async JavaScript snippet against Apideck's 330 endpoints.",
    "",
    "Inside the sandbox you have an `apideck` object with camelCase methods for every endpoint — ",
    "e.g. `apideck.accountingInvoicesList({ limit: 10 })`, `apideck.vaultConnectionsList({})`. ",
    "Each method takes the endpoint's `request` shape (path + query + header + body fields, flat) ",
    "and returns the parsed JSON response body. Errors throw.",
    "",
    "Use `apideck_search` first to find the method name you need. The script runs to completion ",
    "and only its returned value reaches you — chain, filter, and aggregate in code rather than ",
    "in separate tool calls.",
    "",
    "Available top-level helpers: `console.log` (captured and returned alongside the result), ",
    "`JSON`, `Promise`, `setTimeout`, `Date`, `Math`.",
    "",
    "Example:",
    "```js",
    "const invoices = await apideck.accountingInvoicesList({ limit: 50 });",
    "const overdue = invoices.data.filter(i => new Date(i.due_date) < new Date() && i.status !== 'paid');",
    "return { count: overdue.length, totalOutstanding: overdue.reduce((s, i) => s + i.balance, 0) };",
    "```",
  ].join("\n"),
  scopes: ["read", "write", "destructive"],
  annotations: {
    title: "Run code against Apideck",
    readOnlyHint: false,
    destructiveHint: true,
    idempotentHint: false,
    openWorldHint: true,
  },
  args: {
    script: z.string().describe(
      "Async JavaScript snippet. Top-level `await` and `return` are allowed — the snippet is wrapped in an async IIFE.",
    ),
    timeout_ms: z.number().int().min(1000).max(120_000).optional().describe(
      "Max wall-clock time for the script in milliseconds. Defaults to 30000.",
    ),
  },
  async tool(client, args, ctx) {
    return runScript(client, args.script, {
      signal: ctx.signal,
      timeoutMs: args.timeout_ms,
    });
  },
};
