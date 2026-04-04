import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Payment deleted
 */
export type DeletePaymentResponse = {
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
export declare const DeletePaymentResponse$zodSchema: z.ZodType<DeletePaymentResponse>;
//# sourceMappingURL=deletepaymentresponse.d.ts.map