import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Customers
 */
export type UpdateCustomerResponse = {
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
export declare const UpdateCustomerResponse$zodSchema: z.ZodType<UpdateCustomerResponse>;
//# sourceMappingURL=updatecustomerresponse.d.ts.map