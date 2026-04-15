import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Jobs
 */
export type UpdateJobResponse = {
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
export declare const UpdateJobResponse$zodSchema: z.ZodType<UpdateJobResponse>;
//# sourceMappingURL=updatejobresponse.d.ts.map