import type { CallContext, ToolDefinition } from './types.js';
export declare const DEFAULT_BASE_URL = "https://unify.apideck.com";
/** Unified API id -> set of resource ids the connector implements. */
export type SupportedResources = ReadonlyMap<string, ReadonlySet<string>>;
export interface UnsupportedResource {
    connector: string | undefined;
    unifiedApi: string | undefined;
    resource: string | undefined;
    action: string | undefined;
}
export declare const CAPABILITY_TTL_MS = 600000;
export declare const CAPABILITY_FAILURE_TTL_MS = 30000;
export declare const CAPABILITY_LOOKUP_TIMEOUT_MS = 5000;
export declare const CAPABILITY_CACHE_MAX_ENTRIES = 1000;
/**
 * Classify a downstream response as "the connector does not implement this
 * resource" (as opposed to an empty result or a record-level 404).
 */
export declare const detectUnsupportedResource: (status: number, body: unknown) => UnsupportedResource | null;
export declare const clearCapabilityCache: () => void;
export interface FetchSupportedResourcesOptions {
    context: CallContext;
    serviceId: string;
    now?: () => number;
}
/**
 * Look up which unified resources a connector implements. Fail-open: any
 * failure (including the lookup timeout) yields `null`, cached for the
 * shorter failure TTL.
 */
export declare const fetchSupportedResources: ({ context, serviceId, now, }: FetchSupportedResourcesOptions) => Promise<SupportedResources | null>;
/** Fail-open: unknown mapping, null caps, or undeclared API all keep the tool. */
export declare const isResourceSupported: (tool: Pick<ToolDefinition, "resource">, caps: SupportedResources | null) => boolean;
//# sourceMappingURL=capabilities.d.ts.map