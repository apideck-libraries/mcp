import { McpServer, ResourceMetadata, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { RequestHandlerExtra } from "@modelcontextprotocol/sdk/shared/protocol.js";
import { Variables } from "@modelcontextprotocol/sdk/shared/uriTemplate.js";
import { ReadResourceResult, ServerNotification, ServerRequest } from "@modelcontextprotocol/sdk/types.js";
import { ApideckMcpCore } from "../core.js";
import { ConsoleLogger } from "./console-logger.js";
import { MCPScope } from "./scopes.js";
export type ReadResourceCallback = (client: ApideckMcpCore, uri: URL, extra: RequestHandlerExtra<ServerRequest, ServerNotification>) => ReadResourceResult | Promise<ReadResourceResult>;
export type ResourceDefinition = {
    name: string;
    description?: string;
    metadata?: ResourceMetadata;
    scopes?: MCPScope[];
    resource: string;
    read: ReadResourceCallback;
};
export type ReadResourceTemplateCallback = (client: ApideckMcpCore, uri: URL, vars: Variables, extra: RequestHandlerExtra<ServerRequest, ServerNotification>) => ReadResourceResult | Promise<ReadResourceResult>;
export type ResourceTemplateDefinition = {
    name: string;
    description: string;
    metadata?: ResourceMetadata;
    scopes?: MCPScope[];
    resource: ResourceTemplate;
    read: ReadResourceTemplateCallback;
};
export declare function formatResult(response: Response, uri: URL, init?: {
    mimeType?: string | undefined;
}): Promise<ReadResourceResult>;
export declare function createRegisterResource(logger: ConsoleLogger, server: McpServer, getSDK: () => ApideckMcpCore, allowedScopes: Set<MCPScope>): (resource: ResourceDefinition) => void;
export declare function createRegisterResourceTemplate(logger: ConsoleLogger, server: McpServer, getSDK: () => ApideckMcpCore, allowedScopes: Set<MCPScope>): (resource: ResourceTemplateDefinition) => void;
//# sourceMappingURL=resources.d.ts.map