import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Customers
 */
export type CreateCustomerResponse = {
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
export declare const CreateCustomerResponse$zodSchema: z.ZodType<CreateCustomerResponse>;
//# sourceMappingURL=createcustomerresponse.d.ts.map