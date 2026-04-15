import * as z from "zod";
import { EcommerceCustomer } from "./ecommercecustomer.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Customers
 */
export type GetEcommerceCustomersResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<EcommerceCustomer>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetEcommerceCustomersResponse$zodSchema: z.ZodType<GetEcommerceCustomersResponse>;
//# sourceMappingURL=getecommercecustomersresponse.d.ts.map