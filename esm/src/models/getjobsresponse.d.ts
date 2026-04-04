import * as z from "zod";
import { Job } from "./job.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Jobs
 */
export type GetJobsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Job>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetJobsResponse$zodSchema: z.ZodType<GetJobsResponse>;
//# sourceMappingURL=getjobsresponse.d.ts.map