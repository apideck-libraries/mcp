import * as z from "zod";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
import { TimeOffRequest } from "./timeoffrequest.js";
/**
 * TimeOffRequests
 */
export type GetTimeOffRequestsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<TimeOffRequest>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetTimeOffRequestsResponse$zodSchema: z.ZodType<GetTimeOffRequestsResponse>;
//# sourceMappingURL=gettimeoffrequestsresponse.d.ts.map