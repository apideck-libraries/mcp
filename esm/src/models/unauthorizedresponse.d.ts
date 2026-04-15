import * as z from "zod";
/**
 * HTTP request details
 */
export type UnauthorizedResponseRequest = {};
export declare const UnauthorizedResponseRequest$zodSchema: z.ZodType<UnauthorizedResponseRequest>;
/**
 * HTTP response details
 */
export type UnauthorizedResponseResponse = {};
export declare const UnauthorizedResponseResponse$zodSchema: z.ZodType<UnauthorizedResponseResponse>;
/**
 * Debug information including request/response details and OAuth timing metadata
 */
export type UnauthorizedResponseDebug = {
    request?: UnauthorizedResponseRequest | undefined;
    response?: UnauthorizedResponseResponse | undefined;
    message?: string | undefined;
    code?: string | undefined;
    credentials_expire_at_ms?: number | undefined;
    retry_after_ms?: number | undefined;
    cooldown_remaining_ms?: number | undefined;
};
export declare const UnauthorizedResponseDebug$zodSchema: z.ZodType<UnauthorizedResponseDebug>;
export type UnauthorizedResponseDetail = {
    type?: string | undefined;
    message?: string | undefined;
    debug?: UnauthorizedResponseDebug | undefined;
    AdditionalProperties?: {
        [k: string]: any;
    };
};
export declare const UnauthorizedResponseDetail$zodSchema: z.ZodType<UnauthorizedResponseDetail>;
export declare const UnauthorizedResponseDetail$zodSchemaOutbound: z.ZodType<any>;
/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type UnauthorizedResponseDetailUnion = string | UnauthorizedResponseDetail;
export declare const UnauthorizedResponseDetailUnion$zodSchema: z.ZodType<UnauthorizedResponseDetailUnion>;
/**
 * Unauthorized
 */
export type UnauthorizedResponse = {
    status_code?: number | undefined;
    error?: string | undefined;
    type_name?: string | undefined;
    message?: string | undefined;
    detail?: string | UnauthorizedResponseDetail | undefined;
    ref?: string | undefined;
};
export declare const UnauthorizedResponse$zodSchema: z.ZodType<UnauthorizedResponse>;
//# sourceMappingURL=unauthorizedresponse.d.ts.map