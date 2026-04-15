import * as z from "zod";
import { Activity } from "./activity.js";
/**
 * Activity
 */
export type GetActivityResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Activity;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetActivityResponse$zodSchema: z.ZodType<GetActivityResponse>;
//# sourceMappingURL=getactivityresponse.d.ts.map