import * as z from "zod";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
import { PurchaseOrder } from "./purchaseorder.js";
/**
 * PurchaseOrders
 */
export type GetPurchaseOrdersResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<PurchaseOrder>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetPurchaseOrdersResponse$zodSchema: z.ZodType<GetPurchaseOrdersResponse>;
//# sourceMappingURL=getpurchaseordersresponse.d.ts.map