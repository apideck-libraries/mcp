import * as z from "zod";
import { Invoice } from "./invoice.js";
/**
 * Invoice
 */
export type GetInvoiceResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Invoice;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetInvoiceResponse$zodSchema: z.ZodType<GetInvoiceResponse>;
//# sourceMappingURL=getinvoiceresponse.d.ts.map