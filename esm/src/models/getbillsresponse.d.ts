import * as z from "zod";
import { Bill } from "./bill.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Bills
 */
export type GetBillsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Bill>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetBillsResponse$zodSchema: z.ZodType<GetBillsResponse>;
//# sourceMappingURL=getbillsresponse.d.ts.map