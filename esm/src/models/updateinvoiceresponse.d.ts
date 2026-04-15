import * as z from "zod";
import { InvoiceResponse } from "./invoiceresponse.js";
/**
 * Invoice updated
 */
export type UpdateInvoiceResponse = {
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
export declare const UpdateInvoiceResponse$zodSchema: z.ZodType<UpdateInvoiceResponse>;
//# sourceMappingURL=updateinvoiceresponse.d.ts.map