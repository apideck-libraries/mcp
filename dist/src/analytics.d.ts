import type { Logger, MCPMode, ToolDefinition } from './types.js';
export type AnalyticsEventProps = Record<string, unknown>;
export interface AnalyticsOpts {
    apiKey?: string;
    logger?: Logger;
    onBackground?: (p: Promise<void>) => void;
}
export interface Analytics {
    capture: (event: string, props?: AnalyticsEventProps) => void;
    flush: () => Promise<void>;
}
export declare const createAnalytics: (opts?: AnalyticsOpts) => Analytics;
export declare const deriveScope: (toolName: string) => string | null;
export declare const classifyError: (err: unknown) => {
    error_type: string;
    status: "error" | "timeout";
};
export declare const wrapHandlerWithAnalytics: (tool: ToolDefinition, analytics: Analytics | undefined, mode: MCPMode) => ToolDefinition;
//# sourceMappingURL=analytics.d.ts.map