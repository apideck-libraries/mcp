import * as z from "zod";
import { Application } from "./application.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Applications
 */
export type GetApplicationsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Application>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetApplicationsResponse$zodSchema: z.ZodType<GetApplicationsResponse>;
//# sourceMappingURL=getapplicationsresponse.d.ts.map