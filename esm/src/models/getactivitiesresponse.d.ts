import * as z from "zod";
import { Activity } from "./activity.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Activities
 */
export type GetActivitiesResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Activity>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetActivitiesResponse$zodSchema: z.ZodType<GetActivitiesResponse>;
//# sourceMappingURL=getactivitiesresponse.d.ts.map