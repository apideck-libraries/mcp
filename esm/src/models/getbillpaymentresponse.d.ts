import * as z from "zod";
import { BillPayment } from "./billpayment.js";
/**
 * Bill Payment
 */
export type GetBillPaymentResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: BillPayment;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetBillPaymentResponse$zodSchema: z.ZodType<GetBillPaymentResponse>;
//# sourceMappingURL=getbillpaymentresponse.d.ts.map