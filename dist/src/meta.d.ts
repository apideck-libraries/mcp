import type { CallToolResult, MCPScope, RequestHandlerExtra, ServerNotification, ServerRequest, ToolDefinition } from './types.js';
/**
 * Maximum tools returned by `list_tools` in a single response. Tied to the
 * Budget B SLO (a list_tools page must fit under 1300 tokens). Tuned by the
 * Budget B probe (`src/meta.test.ts`) on 2026-04-25 against the 330-tool
 * Apideck surface — at cap 80 the accounting domain measures 1954 tokens; at
 * cap 50 it stays under the budget. Do not change without re-running the probe.
 */
export declare const LIST_TOOLS_CAP = 50;
export interface FilterOpts {
    domain?: string;
    search_terms?: string[];
    scope?: MCPScope;
}
export interface FilterToolSummary {
    name: string;
    description: string;
    domain: string;
}
export interface FilterResult {
    total: number;
    shown: number;
    tools: FilterToolSummary[];
    hint?: string;
}
export interface DomainIndexEntry {
    name: string;
    count: number;
}
export interface DomainIndexResult {
    total: number;
    domains: DomainIndexEntry[];
    hint: string;
}
/**
 * Domain index for the no-args `list_tools` shape.
 *
 * Returns one entry per unique `tool.domain`, sorted count-descending with
 * alphabetical tie-break. `hint` is always the literal discovery prompt.
 */
export declare const buildDomainIndex: (tools: ReadonlyArray<ToolDefinition>) => DomainIndexResult;
/**
 * Filter the tool array for `list_tools` calls with at least one of
 * `domain` / `search_terms` / `scope`.
 *
 * Filter chain: scope → domain → search_terms → sort by `name` → cap at
 * {@link LIST_TOOLS_CAP}. `search_terms` is case-insensitive substring AND
 * across `name` + `description`. Hint rules: zero matches → list valid
 * domains from the FULL tool array; truncated by cap → narrow prompt;
 * otherwise omitted.
 */
export declare const filterTools: (tools: ReadonlyArray<ToolDefinition>, opts: FilterOpts) => FilterResult;
type MetaHandler = (args: Record<string, unknown>, extra: RequestHandlerExtra<ServerRequest, ServerNotification>) => CallToolResult | Promise<CallToolResult>;
/**
 * Factory for the `list_tools` meta-tool handler.
 *
 * No filter args → `buildDomainIndex` (count-by-domain). Any of `domain`,
 * `search_terms`, `scope` set → `filterTools`. Server pre-filters `tools`
 * by `opts.scopes` + `opts.allowedTools` before calling this factory; the
 * `scope` arg here is an orthogonal per-call narrowing from the agent.
 *
 * Budget B SLO: every response stays under 1300 tokens. Enforced by the
 * probe in `src/meta.test.ts` against the real `tools` array.
 */
export declare const createListToolsHandler: (tools: ReadonlyArray<ToolDefinition>) => MetaHandler;
/**
 * Factory for `describe_tool_input` — emits JSON-Schema for a tool's
 * `inputSchema` via `z.toJSONSchema(schema, { unrepresentable: 'any', io:
 * 'input' })`. Unknown / empty `name` → `isError: true` text response, not
 * a thrown protocol error.
 */
export declare const createDescribeToolInputHandler: (tools: ReadonlyArray<ToolDefinition>) => MetaHandler;
/**
 * Factory for `execute_tool` — single-hop dispatch to `tool.handler`. Raw
 * input passthrough (no Zod re-parse); the upstream generated handler and
 * `callRuntime` validate. Handler throw → `isError: true` text result with
 * the error message. `extra` (signal, requestId, authInfo) is forwarded
 * unchanged.
 */
export declare const createExecuteToolHandler: (tools: ReadonlyArray<ToolDefinition>) => MetaHandler;
/**
 * Factory for `list_scopes` — returns the legacy parity literal
 * `['read','write','destructive']`. Order is contractually fixed; do NOT
 * reuse {@link SCOPES} from `types.ts`.
 */
export declare const createListScopesHandler: () => MetaHandler;
export {};
//# sourceMappingURL=meta.d.ts.map