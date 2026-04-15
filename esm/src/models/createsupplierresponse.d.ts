import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Supplier created
 */
export type CreateSupplierResponse = {
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
export declare const CreateSupplierResponse$zodSchema: z.ZodType<CreateSupplierResponse>;
//# sourceMappingURL=createsupplierresponse.d.ts.map