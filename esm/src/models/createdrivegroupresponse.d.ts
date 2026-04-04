import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * DriveGroups
 */
export type CreateDriveGroupResponse = {
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
export declare const CreateDriveGroupResponse$zodSchema: z.ZodType<CreateDriveGroupResponse>;
//# sourceMappingURL=createdrivegroupresponse.d.ts.map