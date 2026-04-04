import * as z from "zod";
import { TimeOffRequest } from "./timeoffrequest.js";
/**
 * TimeOffRequests
 */
export type GetTimeOffRequestResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: TimeOffRequest;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetTimeOffRequestResponse$zodSchema: z.ZodType<GetTimeOffRequestResponse>;
//# sourceMappingURL=gettimeoffrequestresponse.d.ts.map