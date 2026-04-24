/**
 * Sandboxed code execution for the `apideck_run` meta-tool.
 *
 * Exposes every generated tool as a callable method on an `apideck` object
 * inside an isolated vm.Context. The agent writes a short async script that
 * chains / aggregates / filters endpoint results; only the script's final
 * returned value reaches the model's context.
 *
 * Not hardened against adversarial scripts — this is designed for the same
 * threat model as our hosted tool path (the caller authenticates with an
 * Apideck API key). Node's `vm` module does not provide true isolation;
 * if that becomes a requirement we'd swap in `worker_threads` or a true
 * sandbox runtime.
 */

import * as vm from "node:vm";
import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import type { ApideckMcpCore } from "../core.js";
import { generatedTools } from "./tools.js";

const DEFAULT_TIMEOUT_MS = 30_000;

/** Convert `accounting-aged-creditors-get` → `accountingAgedCreditorsGet`. */
function toolNameToMethod(name: string): string {
  return name
    .split("-")
    .map((part, i) =>
      i === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1),
    )
    .join("");
}

/** Build the `apideck` object exposed to the sandboxed script. */
function buildApideckBinding(
  client: ApideckMcpCore,
  signal: AbortSignal,
): Record<string, (args?: unknown) => Promise<unknown>> {
  const bindings: Record<string, (args?: unknown) => Promise<unknown>> = {};
  for (const tool of generatedTools) {
    const method = toolNameToMethod(tool.name);
    bindings[method] = async (args: unknown = {}) => {
      const result = await (tool as { tool: (c: ApideckMcpCore, a: unknown, ctx: { signal: AbortSignal }) => Promise<CallToolResult> }).tool(
        client,
        { request: args },
        { signal },
      );
      // Unwrap: scripts almost always want the parsed JSON body, not an
      // MCP content envelope. Fall back to raw text if parse fails.
      const text = result.content?.[0] && "text" in result.content[0]
        ? (result.content[0] as { text: string }).text
        : "";
      if (result.isError) {
        const err = new Error(text || "Apideck API error");
        (err as { apideck?: unknown }).apideck = safeParse(text);
        throw err;
      }
      return safeParse(text) ?? text;
    };
  }
  return bindings;
}

function safeParse(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

/** Collect console.log output so the script can emit progress / debug info. */
function buildConsole(logs: string[]): Console {
  const stringify = (args: unknown[]): string =>
    args
      .map((a) =>
        typeof a === "string"
          ? a
          : a instanceof Error
          ? a.stack ?? a.message
          : JSON.stringify(a),
      )
      .join(" ");
  return {
    log: (...a: unknown[]) => logs.push(stringify(a)),
    warn: (...a: unknown[]) => logs.push("[warn] " + stringify(a)),
    error: (...a: unknown[]) => logs.push("[error] " + stringify(a)),
    info: (...a: unknown[]) => logs.push(stringify(a)),
    debug: () => {},
  } as unknown as Console;
}

export interface RunScriptOptions {
  signal?: AbortSignal | undefined;
  timeoutMs?: number | undefined;
}

export async function runScript(
  client: ApideckMcpCore,
  script: string,
  options: RunScriptOptions = {},
): Promise<CallToolResult> {
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const ctrl = new AbortController();
  const abortOnParent = () => ctrl.abort();
  options.signal?.addEventListener("abort", abortOnParent, { once: true });
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);

  const logs: string[] = [];
  const apideck = buildApideckBinding(client, ctrl.signal);

  const context = vm.createContext({
    apideck,
    console: buildConsole(logs),
    JSON,
    Promise,
    setTimeout,
    clearTimeout,
    Date,
    Math,
    // AbortSignal is exposed so scripts can coordinate their own cancellation
    AbortSignal,
  });

  // Wrap the user's script in an async IIFE so top-level `await` works and
  // the return value propagates out.
  const wrapped = `(async () => { ${script}\n })()`;

  try {
    const promise = vm.runInContext(wrapped, context, {
      timeout: timeoutMs,
      filename: "apideck-script.js",
    }) as Promise<unknown>;
    const result = await promise;

    const payload = {
      result: result === undefined ? null : result,
      ...(logs.length > 0 ? { logs } : {}),
    };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return {
      content: [{
        type: "text",
        text: JSON.stringify(
          {
            error: message,
            ...(logs.length > 0 ? { logs } : {}),
          },
          null,
          2,
        ),
      }],
      isError: true,
    };
  } finally {
    clearTimeout(timer);
    options.signal?.removeEventListener("abort", abortOnParent);
  }
}

/** Search the generated tool catalog by name/description/scope substring match. */
export function searchTools(
  query: string,
): Array<{ name: string; method: string; description: string; scopes: string[] }> {
  const q = query.trim().toLowerCase();
  const terms = q ? q.split(/\s+/) : [];
  const out: Array<{ name: string; method: string; description: string; scopes: string[] }> = [];
  for (const t of generatedTools) {
    const haystack = `${t.name} ${t.description} ${(t.scopes ?? []).join(" ")}`.toLowerCase();
    if (terms.length === 0 || terms.some((term) => haystack.includes(term))) {
      out.push({
        name: t.name,
        method: toolNameToMethod(t.name),
        description: t.description,
        scopes: (t.scopes ?? []) as string[],
      });
    }
  }
  return out;
}
