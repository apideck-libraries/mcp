import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * TimeOffRequests
 */
export type UpdateTimeOffRequestResponse = {
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
export declare const UpdateTimeOffRequestResponse$zodSchema: z.ZodType<UpdateTimeOffRequestResponse>;
//# sourceMappingURL=updatetimeoffrequestresponse.d.ts.map