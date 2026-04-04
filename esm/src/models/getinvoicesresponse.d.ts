import * as z from "zod";
import { Invoice } from "./invoice.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Invoices
 */
export type GetInvoicesResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Invoice>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetInvoicesResponse$zodSchema: z.ZodType<GetInvoicesResponse>;
//# sourceMappingURL=getinvoicesresponse.d.ts.map