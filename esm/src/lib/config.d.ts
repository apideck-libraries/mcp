import { Security } from "../models/security.js";
import { HTTPClient } from "./http.js";
import { Logger } from "./logger.js";
import { RetryConfig } from "./retries.js";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://unify.apideck.com"];
export type SDKOptions = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: Security | (() => Promise<Security>) | undefined;
    /**
     * Allows setting the consumerId parameter for all supported operations
     */
    consumerId?: string | undefined;
    /**
     * Allows setting the appId parameter for all supported operations
     */
    appId?: string | undefined;
    httpClient?: HTTPClient;
    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number | undefined;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string | undefined;
    /**
     * Allows overriding the default user agent used by the SDK
     */
    userAgent?: string | undefined;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: RetryConfig;
    timeoutMs?: number;
    debugLogger?: Logger | undefined;
};
export declare function serverURLFromOptions(options: SDKOptions): URL | null;
export declare const SDK_METADATA: {
    readonly language: "typescript";
    readonly openapiDocVersion: "10.24.23";
    readonly sdkVersion: "0.1.10";
    readonly genVersion: "2.879.13";
    readonly userAgent: "speakeasy-sdk/mcp-typescript 0.1.10 2.879.13 10.24.23 @apideck/mcp";
};
//# sourceMappingURL=config.d.ts.map