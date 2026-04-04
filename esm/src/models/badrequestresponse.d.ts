import * as z from "zod";
/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type BadRequestResponseDetail = string | {
    [k: string]: any;
};
export declare const BadRequestResponseDetail$zodSchema: z.ZodType<BadRequestResponseDetail>;
export type DownstreamError = {
    message?: string | undefined;
    detail?: string | undefined;
    code?: string | undefined;
};
export declare const DownstreamError$zodSchema: z.ZodType<DownstreamError>;
/**
 * Bad Request
 */
export type BadRequestResponse = {
    status_code?: number | undefined;
    error?: string | undefined;
    type_name?: string | undefined;
    message?: string | undefined;
    detail?: string | {
        [k: string]: any;
    } | undefined;
    ref?: string | undefined;
    downstream_errors?: Array<DownstreamError> | undefined;
};
export declare const BadRequestResponse$zodSchema: z.ZodType<BadRequestResponse>;
//# sourceMappingURL=badrequestresponse.d.ts.map