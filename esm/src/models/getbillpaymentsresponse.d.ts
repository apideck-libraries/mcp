import * as z from "zod";
import { BillPayment } from "./billpayment.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Bill Payments
 */
export type GetBillPaymentsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<BillPayment>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetBillPaymentsResponse$zodSchema: z.ZodType<GetBillPaymentsResponse>;
//# sourceMappingURL=getbillpaymentsresponse.d.ts.map