import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Refund updated
 */
export type UpdateRefundResponse = {
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
export declare const UpdateRefundResponse$zodSchema: z.ZodType<UpdateRefundResponse>;
//# sourceMappingURL=updaterefundresponse.d.ts.map