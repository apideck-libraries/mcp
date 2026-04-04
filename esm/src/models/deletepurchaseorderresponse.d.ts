import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * PurchaseOrders
 */
export type DeletePurchaseOrderResponse = {
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
export declare const DeletePurchaseOrderResponse$zodSchema: z.ZodType<DeletePurchaseOrderResponse>;
//# sourceMappingURL=deletepurchaseorderresponse.d.ts.map