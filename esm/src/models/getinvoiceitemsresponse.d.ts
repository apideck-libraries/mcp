import * as z from "zod";
import { InvoiceItem } from "./invoiceitem.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * InvoiceItems
 */
export type GetInvoiceItemsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<InvoiceItem>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetInvoiceItemsResponse$zodSchema: z.ZodType<GetInvoiceItemsResponse>;
//# sourceMappingURL=getinvoiceitemsresponse.d.ts.map