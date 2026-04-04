import * as z from "zod";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
import { Payment } from "./payment.js";
/**
 * Payments
 */
export type GetPaymentsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Payment>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetPaymentsResponse$zodSchema: z.ZodType<GetPaymentsResponse>;
//# sourceMappingURL=getpaymentsresponse.d.ts.map