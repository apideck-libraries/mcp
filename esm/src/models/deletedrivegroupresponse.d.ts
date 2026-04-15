import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * DriveGroups
 */
export type DeleteDriveGroupResponse = {
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
export declare const DeleteDriveGroupResponse$zodSchema: z.ZodType<DeleteDriveGroupResponse>;
//# sourceMappingURL=deletedrivegroupresponse.d.ts.map