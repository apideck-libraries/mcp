import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Refund deleted
 */
export type DeleteRefundResponse = {
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
export declare const DeleteRefundResponse$zodSchema: z.ZodType<DeleteRefundResponse>;
//# sourceMappingURL=deleterefundresponse.d.ts.map