import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * InvoiceItems
 */
export type CreateInvoiceItemResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: UnifiedId;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const CreateInvoiceItemResponse$zodSchema: z.ZodType<CreateInvoiceItemResponse>;
//# sourceMappingURL=createinvoiceitemresponse.d.ts.map