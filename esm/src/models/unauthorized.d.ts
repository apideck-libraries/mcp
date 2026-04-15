import * as z from "zod";
/**
 * HTTP request details
 */
export type RequestResponse = {};
export declare const RequestResponse$zodSchema: z.ZodType<RequestResponse>;
/**
 * HTTP response details
 */
export type UnauthorizedDetailResponse = {};
export declare const UnauthorizedDetailResponse$zodSchema: z.ZodType<UnauthorizedDetailResponse>;
/**
 * Debug information including request/response details and OAuth timing metadata
 */
export type DebugResponse = {
    request?: RequestResponse | undefined;
    response?: UnauthorizedDetailResponse | undefined;
    message?: string | undefined;
    code?: string | undefined;
    credentials_expire_at_ms?: number | undefined;
    retry_after_ms?: number | undefined;
    cooldown_remaining_ms?: number | undefined;
};
export declare const DebugResponse$zodSchema: z.ZodType<DebugResponse>;
export type DetailResponse = {
    type?: string | undefined;
    message?: string | undefined;
    debug?: DebugResponse | undefined;
};
export declare const DetailResponse$zodSchema: z.ZodType<DetailResponse>;
/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type DetailResponseUnion = string | DetailResponse;
export declare const DetailResponseUnion$zodSchema: z.ZodType<DetailResponseUnion>;
/**
 * Unauthorized
 */
export type Unauthorized = {
    status_code?: number | undefined;
    error?: string | undefined;
    type_name?: string | undefined;
    message?: string | undefined;
    detail?: string | DetailResponse | undefined;
    ref?: string | undefined;
};
export declare const Unauthorized$zodSchema: z.ZodType<Unauthorized>;
//# sourceMappingURL=unauthorized.d.ts.map