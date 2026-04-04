import * as z from "zod";
import { Customer } from "./customer.js";
/**
 * Customer
 */
export type GetCustomerResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Customer;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetCustomerResponse$zodSchema: z.ZodType<GetCustomerResponse>;
//# sourceMappingURL=getcustomerresponse.d.ts.map