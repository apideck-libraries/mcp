import type { ZodObject, ZodRawShape } from 'zod';
import type { CallToolResult, ServerNotification, ServerRequest } from '@modelcontextprotocol/sdk/types.js';
import type { RequestHandlerExtra } from '@modelcontextprotocol/sdk/shared/protocol.js';
export declare const SCOPES: readonly ["read", "write", "destructive"];
export type MCPScope = (typeof SCOPES)[number];
export type MCPMode = 'static' | 'dynamic' | 'code';
export interface ToolAnnotations {
    readOnlyHint?: boolean;
    destructiveHint?: boolean;
}
/**
 * MCP tool entry registered by the server.
 *
 * `domain` is the Tiered Discovery group key consumed by the meta-tools
 * (`list_tools`, `describe_tool_input`). Resolved by the generator in this
 * order: (1) `x-apideck-mcp.domain` overlay extension, (2) fallback
 * to `name.split('-')[0]`. Required and non-empty on every entry of the
 * generated `src/tools.ts`.
 */
export interface ToolDefinition {
    name: string;
    title?: string;
    description?: string;
    domain: string;
    scope: MCPScope;
    inputSchema: ZodObject<ZodRawShape>;
    handler: (args: Record<string, unknown>, extra: RequestHandlerExtra<ServerRequest, ServerNotification>) => CallToolResult | Promise<CallToolResult>;
}
export interface Logger {
    info(msg: string, meta?: Record<string, unknown>): void;
    warn(msg: string, meta?: Record<string, unknown>): void;
    error(msg: string, meta?: Record<string, unknown>): void;
}
export type HttpMethod = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'TRACE';
export type SecurityResolver = () => Promise<{
    apiKey: string;
}>;
export interface CallContext {
    apiKey: SecurityResolver;
    consumerId: string;
    appId: string;
    signal?: AbortSignal;
    logger: Logger;
}
export type BinaryInput = string | {
    data: string | Uint8Array;
    mimeType: string;
};
export interface RuntimeRequest {
    method: HttpMethod;
    path: string;
    query?: Record<string, string | number | boolean | undefined>;
    headers?: Record<string, string>;
    body?: unknown;
    context: CallContext;
}
export interface GeneratorOptions {
    specUrl: string;
    overlayPath: string;
    outputPath: string;
}
export interface RuntimeErrorOptions {
    status?: number;
    code?: string;
    body?: unknown;
    cause?: unknown;
}
export declare class RuntimeError extends Error {
    readonly status?: number;
    readonly code?: string;
    readonly body?: unknown;
    constructor(message: string, options?: RuntimeErrorOptions);
}
export type { CallToolResult, ServerRequest, ServerNotification, } from '@modelcontextprotocol/sdk/types.js';
export type { RequestHandlerExtra } from '@modelcontextprotocol/sdk/shared/protocol.js';
//# sourceMappingURL=types.d.ts.map