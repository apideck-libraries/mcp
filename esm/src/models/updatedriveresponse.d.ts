import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Drives
 */
export type UpdateDriveResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: UnifiedId;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const UpdateDriveResponse$zodSchema: z.ZodType<UpdateDriveResponse>;
//# sourceMappingURL=updatedriveresponse.d.ts.map