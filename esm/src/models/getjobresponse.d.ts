import * as z from "zod";
import { Job } from "./job.js";
/**
 * Jobs
 */
export type GetJobResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Job;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetJobResponse$zodSchema: z.ZodType<GetJobResponse>;
//# sourceMappingURL=getjobresponse.d.ts.map