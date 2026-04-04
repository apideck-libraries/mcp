import * as z from "zod";
import { Drive } from "./drive.js";
/**
 * Drives
 */
export type GetDriveResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Drive;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetDriveResponse$zodSchema: z.ZodType<GetDriveResponse>;
//# sourceMappingURL=getdriveresponse.d.ts.map