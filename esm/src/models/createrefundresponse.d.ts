import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Refund created
 */
export type CreateRefundResponse = {
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
export declare const CreateRefundResponse$zodSchema: z.ZodType<CreateRefundResponse>;
//# sourceMappingURL=createrefundresponse.d.ts.map