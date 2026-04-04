import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * InvoiceItems
 */
export type UpdateInvoiceItemsResponse = {
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
export declare const UpdateInvoiceItemsResponse$zodSchema: z.ZodType<UpdateInvoiceItemsResponse>;
//# sourceMappingURL=updateinvoiceitemsresponse.d.ts.map