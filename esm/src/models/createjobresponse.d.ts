import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Jobs
 */
export type CreateJobResponse = {
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
export declare const CreateJobResponse$zodSchema: z.ZodType<CreateJobResponse>;
//# sourceMappingURL=createjobresponse.d.ts.map