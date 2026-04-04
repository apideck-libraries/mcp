import * as z from "zod";
import { InvoiceResponse } from "./invoiceresponse.js";
/**
 * Invoice created
 */
export type CreateInvoiceResponse = {
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
export declare const CreateInvoiceResponse$zodSchema: z.ZodType<CreateInvoiceResponse>;
//# sourceMappingURL=createinvoiceresponse.d.ts.map