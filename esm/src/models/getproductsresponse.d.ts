import * as z from "zod";
import { EcommerceProduct } from "./ecommerceproduct.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Products
 */
export type GetProductsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<EcommerceProduct>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetProductsResponse$zodSchema: z.ZodType<GetProductsResponse>;
//# sourceMappingURL=getproductsresponse.d.ts.map