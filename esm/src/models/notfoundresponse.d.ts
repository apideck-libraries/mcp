import * as z from "zod";
/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type NotFoundResponseDetail = string | {
    [k: string]: any;
};
export declare const NotFoundResponseDetail$zodSchema: z.ZodType<NotFoundResponseDetail>;
/**
 * The specified resource was not found
 */
export type NotFoundResponse = {
    status_code?: number | undefined;
    error?: string | undefined;
    type_name?: string | undefined;
    message?: string | undefined;
    detail?: string | {
        [k: string]: any;
    } | undefined;
    ref?: string | undefined;
};
export declare const NotFoundResponse$zodSchema: z.ZodType<NotFoundResponse>;
//# sourceMappingURL=notfoundresponse.d.ts.map