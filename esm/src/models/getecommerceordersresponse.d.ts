import * as z from "zod";
import { EcommerceOrder } from "./ecommerceorder.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Orders
 */
export type GetEcommerceOrdersResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<EcommerceOrder>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetEcommerceOrdersResponse$zodSchema: z.ZodType<GetEcommerceOrdersResponse>;
//# sourceMappingURL=getecommerceordersresponse.d.ts.map