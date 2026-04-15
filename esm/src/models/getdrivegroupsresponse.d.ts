import * as z from "zod";
import { DriveGroup } from "./drivegroup.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * DriveGroups
 */
export type GetDriveGroupsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<DriveGroup>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetDriveGroupsResponse$zodSchema: z.ZodType<GetDriveGroupsResponse>;
//# sourceMappingURL=getdrivegroupsresponse.d.ts.map