// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Apideck
/**
 * MCP server factory.
 *
 * `dynamic` mode registers the four Tiered Discovery meta-tools
 * (`list_tools`, `describe_tool_input`, `execute_tool`, `list_scopes`)
 * over the generated tool array, pre-filtered by `opts.scopes` and
 * `opts.allowedTools`. `static` mode currently only registers the optional smoke tool; full static-mode registration is pending. `code` mode registers only `apideck_search` + `apideck_run`.
 */
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { createDescribeToolInputHandler, createExecuteToolHandler, createListScopesHandler, createListToolsHandler, } from './meta.js';
import { wrapHandlerWithAnalytics } from './analytics.js';
import { createRunTool } from './code-tools/run.js';
import { createApideckSearch } from './code-tools/search.js';
import { registerTool } from './registrar.js';
import { createSmokeTool } from './smoke-tool.js';
import { contextStorage, tools as allTools } from './tools.js';
import { workflows } from './workflows/index.js';
const SCOPE_ENUM = z.enum(['read', 'write', 'destructive']);
const filterByOpts = (items, opts) => items.filter((t) => (opts.scopes === undefined || opts.scopes.includes(t.scope)) &&
    (opts.allowedTools === undefined ||
        opts.allowedTools.includes(t.name)));
export const createServer = (opts) => {
    const version = process.env.npm_package_version ?? '0.0.0';
    const server = new McpServer({ name: 'apideck-mcp', version }, { capabilities: { tools: {} } });
    const wrapIfAnalytics = (tool) => wrapHandlerWithAnalytics(tool, opts.analytics, opts.mode);
    const wrapWithContext = (tool) => {
        const getContext = opts.getContext;
        if (!getContext)
            return tool;
        const wrappedHandler = (args, extra) => contextStorage.run(getContext(), () => tool.handler(args, extra));
        return { ...tool, handler: wrappedHandler };
    };
    // Context wraps analytics so the analytics handler runs inside the
    // contextStorage.run frame. wrapHandlerWithAnalytics reads the store at
    // capture time to derive distinct_id from app_id:consumer_id.
    const compose = (tool) => wrapWithContext(wrapIfAnalytics(tool));
    // For meta-dispatchers (execute_tool, apideck_run) that invoke a child
    // tool — analytics is applied per-dispatch inside the factory so events
    // attribute to the real tool name, not the wrapper. Outer wrap would
    // double-emit.
    const composeNoAnalytics = (tool) => wrapWithContext(tool);
    const registerMetaTool = (name, description, inputSchema, handler, composeFn = compose) => {
        const synthetic = {
            name,
            description,
            domain: 'meta',
            scope: 'read',
            inputSchema: z.object(inputSchema),
            handler,
        };
        server.registerTool(name, { description, inputSchema }, composeFn(synthetic).handler);
    };
    if (opts.mode === 'code') {
        // Code mode is opinionated by design: an agent always needs both
        // apideck_search (to discover endpoint methods) and apideck_run (to
        // dispatch them). Restricting either via allowedTools/scopes would
        // break the mode's utility, so opts.allowedTools, opts.scopes, and
        // opts.smoke are intentionally ignored here.
        registerTool(server, compose(createApideckSearch(allTools)), {});
        // apideck_run dispatches arbitrary endpoint tools via the apideck.*
        // proxy — analytics is applied per-dispatch inside createRunTool so
        // each apideck.<method>() call emits an event for the real tool name.
        registerTool(server, composeNoAnalytics(createRunTool(allTools, {
            ...(opts.analytics ? { analytics: opts.analytics } : {}),
            mode: opts.mode,
        })), {});
        return server;
    }
    if (opts.mode === 'dynamic') {
        const visibleTools = filterByOpts(allTools, opts);
        const filteredWorkflows = filterByOpts(workflows, opts);
        const allVisible = [...visibleTools, ...filteredWorkflows];
        registerMetaTool('list_tools', 'Discover Apideck tools. Call with no args for domain index; filter with domain/search_terms/scope.', {
            domain: z.string().optional(),
            search_terms: z.array(z.string()).optional(),
            scope: SCOPE_ENUM.optional(),
        }, createListToolsHandler(allVisible));
        registerMetaTool('describe_tool_input', 'Return the JSON-Schema input contract for a tool by name.', { name: z.string() }, createDescribeToolInputHandler(allVisible));
        registerMetaTool('execute_tool', 'Invoke a tool by name. `input` is forwarded raw to the tool handler.', { name: z.string(), input: z.unknown() }, createExecuteToolHandler(allVisible, {
            ...(opts.analytics ? { analytics: opts.analytics } : {}),
            mode: opts.mode,
        }), composeNoAnalytics);
        registerMetaTool('list_scopes', 'Return the list of allowed MCP scopes.', {}, createListScopesHandler());
    }
    const smokeEnabled = opts.smoke ?? process.env.APIDECK_MCP_SMOKE === '1';
    if (smokeEnabled) {
        registerTool(server, compose(createSmokeTool(opts.mode)), {
            ...(opts.allowedTools !== undefined
                ? { allowedTools: opts.allowedTools }
                : {}),
            ...(opts.scopes !== undefined ? { scopes: opts.scopes } : {}),
        });
    }
    if (opts.mode === 'static') {
        for (const wf of workflows) {
            registerTool(server, compose(wf), {
                ...(opts.allowedTools !== undefined
                    ? { allowedTools: opts.allowedTools }
                    : {}),
                ...(opts.scopes !== undefined ? { scopes: opts.scopes } : {}),
            });
        }
    }
    return server;
};
//# sourceMappingURL=server.js.map