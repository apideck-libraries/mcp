import * as z from "zod";
/**
 * Payment Required
 */
export type PaymentRequiredResponse = {
    status_code?: number | undefined;
    error?: string | undefined;
    type_name?: string | undefined;
    message?: string | undefined;
    detail?: string | undefined;
    ref?: string | undefined;
};
export declare const PaymentRequiredResponse$zodSchema: z.ZodType<PaymentRequiredResponse>;
//# sourceMappingURL=paymentrequiredresponse.d.ts.map