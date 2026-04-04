import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Bill Payment deleted
 */
export type DeleteBillPaymentResponse = {
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
export declare const DeleteBillPaymentResponse$zodSchema: z.ZodType<DeleteBillPaymentResponse>;
//# sourceMappingURL=deletebillpaymentresponse.d.ts.map