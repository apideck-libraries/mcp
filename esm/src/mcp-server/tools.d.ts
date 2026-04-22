import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { ShapeOutput, ZodRawShapeCompat } from "@modelcontextprotocol/sdk/server/zod-compat.js";
import { RequestHandlerExtra } from "@modelcontextprotocol/sdk/shared/protocol.js";
import { CallToolResult, ServerNotification, ServerRequest } from "@modelcontextprotocol/sdk/types.js";
import { ApideckMcpCore } from "../core.js";
import type { Analytics } from "./analytics.js";
import { ConsoleLogger } from "./console-logger.js";
import { MCPServerFlags } from "./flags.js";
import { MCPScope } from "./scopes.js";
export type MCPToolAnnotationFilter = {
    readOnlyHint?: boolean;
    destructiveHint?: boolean;
    idempotentHint?: boolean;
    openWorldHint?: boolean;
};
export declare function buildAnnotationFilter(annotations: string[] | undefined): MCPToolAnnotationFilter;
export type ToolDefinition<Args extends undefined | ZodRawShapeCompat = undefined> = Args extends ZodRawShapeCompat ? {
    name: string;
    description: string;
    scopes?: MCPScope[];
    args: Args;
    annotations: {
        title: string;
        destructiveHint: boolean;
        idempotentHint: boolean;
        openWorldHint: boolean;
        readOnlyHint: boolean;
    };
    tool: (client: ApideckMcpCore, args: ShapeOutput<Args>, extra: RequestHandlerExtra<ServerRequest, ServerNotification>) => CallToolResult | Promise<CallToolResult>;
} : {
    name: string;
    description: string;
    scopes?: MCPScope[];
    args?: undefined;
    annotations: {
        title: string;
        destructiveHint: boolean;
        idempotentHint: boolean;
        openWorldHint: boolean;
        readOnlyHint: boolean;
    };
    tool: (client: ApideckMcpCore, extra: RequestHandlerExtra<ServerRequest, ServerNotification>) => CallToolResult | Promise<CallToolResult>;
};
export declare function formatResult(response: Response): Promise<CallToolResult>;
export declare function createRegisterTool(logger: ConsoleLogger, server: McpServer, getSDK: () => ApideckMcpCore, allowedScopes: Set<MCPScope>, allowedTools?: Set<string>, dynamic?: boolean, annotationFilter?: MCPToolAnnotationFilter, analytics?: Analytics): [
    <A extends ZodRawShapeCompat | undefined>(tool: ToolDefinition<A>) => void,
    Array<{
        name: string;
        description: string;
    }>,
    Map<string, ToolDefinition<ZodRawShapeCompat | undefined>>
];
export declare function registerDynamicTools(logger: ConsoleLogger, server: McpServer, getSDK: () => ApideckMcpCore, toolMap: Map<string, ToolDefinition<ZodRawShapeCompat | undefined>>, allowedScopes: Set<MCPScope>, analytics?: Analytics): void;
export declare function buildSDK(headers: Headers, cliFlags: MCPServerFlags, disableStaticAuth: boolean, logger: {
    level: string;
}): ApideckMcpCore;
//# sourceMappingURL=tools.d.ts.map