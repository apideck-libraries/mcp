import * as z from "zod";
/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type UnprocessableResponseDetail = string | {
    [k: string]: any;
};
export declare const UnprocessableResponseDetail$zodSchema: z.ZodType<UnprocessableResponseDetail>;
/**
 * Unprocessable
 */
export type UnprocessableResponse = {
    status_code?: number | undefined;
    error?: string | undefined;
    type_name?: string | undefined;
    message?: string | undefined;
    detail?: string | {
        [k: string]: any;
    } | undefined;
    ref?: string | undefined;
};
export declare const UnprocessableResponse$zodSchema: z.ZodType<UnprocessableResponse>;
//# sourceMappingURL=unprocessableresponse.d.ts.map