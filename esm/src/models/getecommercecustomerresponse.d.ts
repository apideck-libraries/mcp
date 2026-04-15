import * as z from "zod";
import { EcommerceCustomer } from "./ecommercecustomer.js";
/**
 * Customers
 */
export type GetEcommerceCustomerResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: EcommerceCustomer;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetEcommerceCustomerResponse$zodSchema: z.ZodType<GetEcommerceCustomerResponse>;
//# sourceMappingURL=getecommercecustomerresponse.d.ts.map