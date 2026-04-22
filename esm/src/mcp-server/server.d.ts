import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { ApideckMcpCore } from "../core.js";
import { SDKOptions } from "../lib/config.js";
import type { Analytics } from "./analytics.js";
import type { ConsoleLogger } from "./console-logger.js";
import { MCPScope } from "./scopes.js";
import { MCPToolAnnotationFilter } from "./tools.js";
export declare function createMCPServer(deps: {
    logger: ConsoleLogger;
    allowedTools?: string[] | undefined;
    dynamic?: boolean | undefined;
    scopes?: MCPScope[] | undefined;
    annotationFilter?: MCPToolAnnotationFilter | undefined;
    getSDK?: () => ApideckMcpCore;
    serverURL?: string | undefined;
    security?: SDKOptions["security"] | undefined;
    consumerId?: SDKOptions["consumerId"] | undefined;
    appId?: SDKOptions["appId"] | undefined;
    serverIdx?: SDKOptions["serverIdx"] | undefined;
    analytics?: Analytics | undefined;
}): {
    server: McpServer;
    tools: {
        name: string;
        description: string;
    }[];
};
//# sourceMappingURL=server.d.ts.map