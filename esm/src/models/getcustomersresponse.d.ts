import * as z from "zod";
import { Customer } from "./customer.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Customers
 */
export type GetCustomersResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Customer>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetCustomersResponse$zodSchema: z.ZodType<GetCustomersResponse>;
//# sourceMappingURL=getcustomersresponse.d.ts.map