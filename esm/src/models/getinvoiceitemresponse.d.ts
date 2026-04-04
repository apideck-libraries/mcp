import * as z from "zod";
import { InvoiceItem } from "./invoiceitem.js";
/**
 * InvoiceItems
 */
export type GetInvoiceItemResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: InvoiceItem;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetInvoiceItemResponse$zodSchema: z.ZodType<GetInvoiceItemResponse>;
//# sourceMappingURL=getinvoiceitemresponse.d.ts.map