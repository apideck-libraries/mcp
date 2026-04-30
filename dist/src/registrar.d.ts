import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { MCPScope, ToolDefinition } from './types.js';
export declare const registerTool: (server: McpServer, tool: ToolDefinition, opts: {
    allowedTools?: string[];
    scopes?: MCPScope[];
}) => number;
//# sourceMappingURL=registrar.d.ts.map