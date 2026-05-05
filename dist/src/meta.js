// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Apideck
/**
 * Tiered Discovery meta-tools.
 *
 * Four pure handler factories — `list_tools`, `describe_tool_input`,
 * `execute_tool`, `list_scopes` — plus the shared filter/index helpers
 * (`filterTools`, `buildDomainIndex`) consumed by `list_tools`.
 *
 * Budget B SLO: every `list_tools` response must encode under 1300 tokens
 * (`Math.ceil(bytes/4)` via `TextEncoder`). Enforced by the probe cases at
 * the bottom of `src/meta.test.ts` and tuned via {@link LIST_TOOLS_CAP}.
 */
import { McpError } from '@modelcontextprotocol/sdk/types.js';
import { z } from 'zod';
import { wrapHandlerWithAnalytics } from './analytics.js';
import { matchesSearchTerms } from './search-filter.js';
/**
 * Maximum tools returned by `list_tools` in a single response. Tied to the
 * Budget B SLO (a list_tools page must fit under 1300 tokens). Tuned by the
 * Budget B probe (`src/meta.test.ts`) on 2026-04-25 against the 330-tool
 * Apideck surface — at cap 80 the accounting domain measures 1954 tokens; at
 * cap 50 it stays under the budget. Do not change without re-running the probe.
 */
export const LIST_TOOLS_CAP = 50;
const DOMAIN_INDEX_HINT = 'Call list_tools(domain=X) or list_tools(search_terms=[...])';
const NARROW_HINT = 'Pass search_terms=[...] to narrow';
const sortByName = (arr) => [...arr].sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
const uniqueSortedDomains = (tools) => {
    const set = new Set();
    for (const t of tools)
        set.add(t.domain);
    return [...set].sort();
};
/**
 * Domain index for the no-args `list_tools` shape.
 *
 * Returns one entry per unique `tool.domain`, sorted count-descending with
 * alphabetical tie-break. `hint` is always the literal discovery prompt.
 */
export const buildDomainIndex = (tools) => {
    const counts = new Map();
    for (const t of tools) {
        counts.set(t.domain, (counts.get(t.domain) ?? 0) + 1);
    }
    const domains = [...counts.entries()]
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => {
        if (b.count !== a.count)
            return b.count - a.count;
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
    return { total: tools.length, domains, hint: DOMAIN_INDEX_HINT };
};
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
export const filterTools = (tools, opts) => {
    let filtered = [...tools];
    if (opts.scope !== undefined) {
        filtered = filtered.filter((t) => t.scope === opts.scope);
    }
    if (opts.domain !== undefined) {
        filtered = filtered.filter((t) => t.domain === opts.domain);
    }
    const terms = opts.search_terms !== undefined && opts.search_terms.length > 0
        ? opts.search_terms
        : null;
    if (terms !== null) {
        filtered = filtered.filter((t) => matchesSearchTerms(t, terms));
    }
    const sorted = sortByName(filtered);
    const total = sorted.length;
    const shown = Math.min(total, LIST_TOOLS_CAP);
    const slice = sorted.slice(0, LIST_TOOLS_CAP);
    const summaries = slice.map((t) => {
        const full = t.description ?? '';
        const firstSection = full.split('\n\n')[0] ?? '';
        return {
            name: t.name,
            description: firstSection,
            domain: t.domain,
        };
    });
    let hint;
    if (total === 0) {
        hint = `Valid domains: ${uniqueSortedDomains(tools).join(', ')}`;
    }
    else if (shown < total) {
        hint = NARROW_HINT;
    }
    return hint === undefined
        ? { total, shown, tools: summaries }
        : { total, shown, tools: summaries, hint };
};
const jsonText = (payload) => ({
    content: [{ type: 'text', text: JSON.stringify(payload) }],
});
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
export const createListToolsHandler = (tools) => {
    return (args) => {
        const { domain, search_terms, scope } = args;
        const hasDomain = typeof domain === 'string' && domain.length > 0;
        const hasTerms = Array.isArray(search_terms) && search_terms.length > 0;
        const hasScope = typeof scope === 'string';
        if (!hasDomain && !hasTerms && !hasScope) {
            return jsonText(buildDomainIndex(tools));
        }
        const opts = {};
        if (hasDomain)
            opts.domain = domain;
        if (hasTerms)
            opts.search_terms = search_terms;
        if (hasScope)
            opts.scope = scope;
        return jsonText(filterTools(tools, opts));
    };
};
const notFoundResult = (name) => ({
    content: [{ type: 'text', text: `tool not found: ${name}. Try list_tools()` }],
    isError: true,
});
/**
 * Factory for `describe_tool_input` — emits JSON-Schema for a tool's
 * `inputSchema` via `z.toJSONSchema(schema, { unrepresentable: 'any', io:
 * 'input' })`. Unknown / empty `name` → `isError: true` text response, not
 * a thrown protocol error.
 */
export const createDescribeToolInputHandler = (tools) => {
    return (args) => {
        const { name } = args;
        const target = typeof name === 'string' ? name : '';
        if (target.length === 0) {
            return notFoundResult(target);
        }
        const tool = tools.find((t) => t.name === target);
        if (tool === undefined) {
            return notFoundResult(target);
        }
        const schema = z.toJSONSchema(tool.inputSchema, {
            unrepresentable: 'any',
            io: 'input',
        });
        return jsonText(schema);
    };
};
/**
 * Factory for `execute_tool` — single-hop dispatch to `tool.handler`. Raw
 * input passthrough (no Zod re-parse); the upstream generated handler and
 * `callRuntime` validate. Handler throw → `isError: true` text result with
 * the error message. `extra` (signal, requestId, authInfo) is forwarded
 * unchanged.
 *
 * When `opts.analytics` is provided, the dispatched tool is wrapped per-call
 * so the emitted `mcp_tool_called` event carries the real `tool_name` /
 * `scope` / `duration_ms` instead of the meta-tool's identity. The outer
 * `execute_tool` registration runs without analytics to avoid double-emit.
 */
export const createExecuteToolHandler = (tools, opts = {}) => {
    const { analytics, mode = 'dynamic' } = opts;
    return async (args, extra) => {
        const { name, input } = args;
        const target = typeof name === 'string' ? name : '';
        const tool = tools.find((t) => t.name === target);
        if (tool === undefined) {
            return notFoundResult(target);
        }
        const dispatchTool = analytics
            ? wrapHandlerWithAnalytics(tool, analytics, mode)
            : tool;
        try {
            return await dispatchTool.handler(input, extra);
        }
        catch (err) {
            if (err instanceof McpError)
                throw err;
            const message = err instanceof Error ? err.message : String(err);
            return {
                content: [{ type: 'text', text: message }],
                isError: true,
            };
        }
    };
};
// Legacy parity: literal must remain ['read','write','destructive'] in this
// exact order. Do not reuse SCOPES tuple from types.ts — coupling the legacy
// contract to the enum risks future reordering breaking parity.
const LIST_SCOPES_LITERAL = ['read', 'write', 'destructive'];
/**
 * Factory for `list_scopes` — returns the legacy parity literal
 * `['read','write','destructive']`. Order is contractually fixed; do NOT
 * reuse {@link SCOPES} from `types.ts`.
 */
export const createListScopesHandler = () => {
    return () => jsonText(LIST_SCOPES_LITERAL);
};
//# sourceMappingURL=meta.js.map