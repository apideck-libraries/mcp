import type { CallToolResult, RuntimeRequest } from './types.js';
export type McpContentBlock = {
    type: 'image';
    data: string;
    mimeType: string;
} | {
    type: 'audio';
    data: string;
    mimeType: string;
} | {
    type: 'resource';
    resource: {
        uri: string;
        blob: string;
        mimeType: string;
    };
};
export type RuntimeResult = {
    kind: 'json';
    status: number;
    body: unknown;
} | {
    kind: 'mcpContent';
    block: McpContentBlock;
};
export interface CallRuntimeOptions {
    maxAttempts?: number;
    baseDelayMs?: number;
    capMs?: number;
}
export declare const computeDelay: (attempt: number, base: number, cap: number) => number;
export type CallRuntimeResult = RuntimeResult | CallToolResult;
export declare const callRuntime: (req: RuntimeRequest, options?: CallRuntimeOptions) => Promise<CallRuntimeResult>;
//# sourceMappingURL=runtime.d.ts.map