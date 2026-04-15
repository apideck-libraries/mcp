import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Bill Updated
 */
export type UpdateBillResponse = {
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
export declare const UpdateBillResponse$zodSchema: z.ZodType<UpdateBillResponse>;
//# sourceMappingURL=updatebillresponse.d.ts.map