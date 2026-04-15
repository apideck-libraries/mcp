import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Supplier deleted
 */
export type DeleteSupplierResponse = {
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
export declare const DeleteSupplierResponse$zodSchema: z.ZodType<DeleteSupplierResponse>;
//# sourceMappingURL=deletesupplierresponse.d.ts.map