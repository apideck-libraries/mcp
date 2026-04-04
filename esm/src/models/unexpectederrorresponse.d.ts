import * as z from "zod";
/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type UnexpectedErrorResponseDetail = string | {
    [k: string]: any;
};
export declare const UnexpectedErrorResponseDetail$zodSchema: z.ZodType<UnexpectedErrorResponseDetail>;
/**
 * Unexpected error
 */
export type UnexpectedErrorResponse = {
    status_code?: number | undefined;
    error?: string | undefined;
    type_name?: string | undefined;
    message?: string | undefined;
    detail?: string | {
        [k: string]: any;
    } | undefined;
    ref?: string | undefined;
};
export declare const UnexpectedErrorResponse$zodSchema: z.ZodType<UnexpectedErrorResponse>;
//# sourceMappingURL=unexpectederrorresponse.d.ts.map