import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Bill Payment updated
 */
export type UpdateBillPaymentResponse = {
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
export declare const UpdateBillPaymentResponse$zodSchema: z.ZodType<UpdateBillPaymentResponse>;
//# sourceMappingURL=updatebillpaymentresponse.d.ts.map