import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Lead updated
 */
export type UpdateLeadResponse = {
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
export declare const UpdateLeadResponse$zodSchema: z.ZodType<UpdateLeadResponse>;
//# sourceMappingURL=updateleadresponse.d.ts.map