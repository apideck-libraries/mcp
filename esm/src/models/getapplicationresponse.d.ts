import * as z from "zod";
import { Application } from "./application.js";
/**
 * Applications
 */
export type GetApplicationResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Application;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetApplicationResponse$zodSchema: z.ZodType<GetApplicationResponse>;
//# sourceMappingURL=getapplicationresponse.d.ts.map