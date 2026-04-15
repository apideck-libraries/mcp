import * as z from "zod";
import { EcommerceOrder } from "./ecommerceorder.js";
/**
 * Orders
 */
export type GetEcommerceOrderResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: EcommerceOrder;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetEcommerceOrderResponse$zodSchema: z.ZodType<GetEcommerceOrderResponse>;
//# sourceMappingURL=getecommerceorderresponse.d.ts.map