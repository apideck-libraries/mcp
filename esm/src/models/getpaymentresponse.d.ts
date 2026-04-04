import * as z from "zod";
import { Payment } from "./payment.js";
/**
 * Payment
 */
export type GetPaymentResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Payment;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetPaymentResponse$zodSchema: z.ZodType<GetPaymentResponse>;
//# sourceMappingURL=getpaymentresponse.d.ts.map