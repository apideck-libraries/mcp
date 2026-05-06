/**
 * MCP server factory.
 *
 * `dynamic` mode registers the four Tiered Discovery meta-tools
 * (`list_tools`, `describe_tool_input`, `execute_tool`, `list_scopes`)
 * over the generated tool array, pre-filtered by `opts.scopes` and
 * `opts.allowedTools`. `static` mode currently only registers the optional smoke tool; full static-mode registration is pending. `code` mode registers only `apideck_search` + `apideck_run`.
 */
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { Analytics } from './analytics.js';
import type { CallContext, MCPMode, MCPScope } from './types.js';
export declare const createServer: (opts: {
    mode: MCPMode;
    allowedTools?: string[];
    scopes?: MCPScope[];
    smoke?: boolean;
    analytics?: Analytics;
    getContext?: () => CallContext;
}) => McpServer;
//# sourceMappingURL=server.d.ts.map