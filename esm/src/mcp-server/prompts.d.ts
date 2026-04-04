import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { ShapeOutput, ZodRawShapeCompat } from "@modelcontextprotocol/sdk/server/zod-compat.js";
import { RequestHandlerExtra } from "@modelcontextprotocol/sdk/shared/protocol.js";
import { GetPromptResult, ServerNotification, ServerRequest } from "@modelcontextprotocol/sdk/types.js";
import { ApideckMcpCore } from "../core.js";
import { ConsoleLogger } from "./console-logger.js";
import { MCPScope } from "./scopes.js";
export type PromptDefinition<Args extends undefined | ZodRawShapeCompat = undefined> = Args extends ZodRawShapeCompat ? {
    name: string;
    description?: string;
    scopes?: MCPScope[];
    args: Args;
    prompt: (client: ApideckMcpCore, args: ShapeOutput<Args>, extra: RequestHandlerExtra<ServerRequest, ServerNotification>) => GetPromptResult | Promise<GetPromptResult>;
} : {
    name: string;
    description?: string;
    scopes?: MCPScope[];
    args?: undefined;
    prompt: (client: ApideckMcpCore, extra: RequestHandlerExtra<ServerRequest, ServerNotification>) => GetPromptResult | Promise<GetPromptResult>;
};
export declare function formatResult(value: string): Promise<GetPromptResult>;
export declare function createRegisterPrompt(logger: ConsoleLogger, server: McpServer, getSDK: () => ApideckMcpCore, allowedScopes: Set<MCPScope>): <A extends ZodRawShapeCompat | undefined>(prompt: PromptDefinition<A>) => void;
//# sourceMappingURL=prompts.d.ts.map