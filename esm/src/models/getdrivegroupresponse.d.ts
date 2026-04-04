import * as z from "zod";
import { DriveGroup } from "./drivegroup.js";
/**
 * DriveGroups
 */
export type GetDriveGroupResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: DriveGroup;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetDriveGroupResponse$zodSchema: z.ZodType<GetDriveGroupResponse>;
//# sourceMappingURL=getdrivegroupresponse.d.ts.map