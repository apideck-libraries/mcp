import { SDKOptions } from "../lib/config.js";
import { MCPScope } from "./scopes.js";
/**
 * Base flags interface for MCP server configuration.
 * Used by both CLI start command and Gram deployment wrapper.
 */
export interface MCPServerFlags {
    readonly tool?: string[];
    readonly mode?: "dynamic" | undefined;
    readonly "tool-annotations"?: string[] | undefined;
    readonly scope?: MCPScope[];
    readonly "api-key"?: string | undefined;
    readonly "consumer-id"?: SDKOptions["consumerId"] | undefined;
    readonly "app-id"?: SDKOptions["appId"] | undefined;
    readonly "server-url"?: string | undefined;
    readonly "server-index"?: SDKOptions["serverIdx"];
}
//# sourceMappingURL=flags.d.ts.map