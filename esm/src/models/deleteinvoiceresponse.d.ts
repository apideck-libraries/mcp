import * as z from "zod";
import { InvoiceResponse } from "./invoiceresponse.js";
/**
 * Invoice deleted
 */
export type DeleteInvoiceResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: InvoiceResponse;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const DeleteInvoiceResponse$zodSchema: z.ZodType<DeleteInvoiceResponse>;
//# sourceMappingURL=deleteinvoiceresponse.d.ts.map