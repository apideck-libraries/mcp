import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Bill Payment created
 */
export type CreateBillPaymentResponse = {
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
export declare const CreateBillPaymentResponse$zodSchema: z.ZodType<CreateBillPaymentResponse>;
//# sourceMappingURL=createbillpaymentresponse.d.ts.map