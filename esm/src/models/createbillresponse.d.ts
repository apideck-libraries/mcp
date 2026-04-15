import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Bill created
 */
export type CreateBillResponse = {
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
export declare const CreateBillResponse$zodSchema: z.ZodType<CreateBillResponse>;
//# sourceMappingURL=createbillresponse.d.ts.map