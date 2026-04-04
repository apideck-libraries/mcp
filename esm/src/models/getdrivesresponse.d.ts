import * as z from "zod";
import { Drive } from "./drive.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Drives
 */
export type GetDrivesResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Drive>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetDrivesResponse$zodSchema: z.ZodType<GetDrivesResponse>;
//# sourceMappingURL=getdrivesresponse.d.ts.map