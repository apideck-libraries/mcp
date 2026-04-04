import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * DriveGroups
 */
export type UpdateDriveGroupResponse = {
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
export declare const UpdateDriveGroupResponse$zodSchema: z.ZodType<UpdateDriveGroupResponse>;
//# sourceMappingURL=updatedrivegroupresponse.d.ts.map