import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * TimeOffRequests
 */
export type CreateTimeOffRequestResponse = {
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
export declare const CreateTimeOffRequestResponse$zodSchema: z.ZodType<CreateTimeOffRequestResponse>;
//# sourceMappingURL=createtimeoffrequestresponse.d.ts.map