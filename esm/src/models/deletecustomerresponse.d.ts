import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Customers
 */
export type DeleteCustomerResponse = {
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
export declare const DeleteCustomerResponse$zodSchema: z.ZodType<DeleteCustomerResponse>;
//# sourceMappingURL=deletecustomerresponse.d.ts.map