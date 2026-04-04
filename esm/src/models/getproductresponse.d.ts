import * as z from "zod";
import { EcommerceProduct } from "./ecommerceproduct.js";
/**
 * Products
 */
export type GetProductResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: EcommerceProduct;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetProductResponse$zodSchema: z.ZodType<GetProductResponse>;
//# sourceMappingURL=getproductresponse.d.ts.map