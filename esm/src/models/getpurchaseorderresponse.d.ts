import * as z from "zod";
import { PurchaseOrder } from "./purchaseorder.js";
/**
 * PurchaseOrders
 */
export type GetPurchaseOrderResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: PurchaseOrder;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetPurchaseOrderResponse$zodSchema: z.ZodType<GetPurchaseOrderResponse>;
//# sourceMappingURL=getpurchaseorderresponse.d.ts.map