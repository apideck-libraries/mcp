import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * TimeOffRequests
 */
export type DeleteTimeOffRequestResponse = {
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
export declare const DeleteTimeOffRequestResponse$zodSchema: z.ZodType<DeleteTimeOffRequestResponse>;
//# sourceMappingURL=deletetimeoffrequestresponse.d.ts.map