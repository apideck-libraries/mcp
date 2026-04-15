import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Drives
 */
export type DeleteDriveResponse = {
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
export declare const DeleteDriveResponse$zodSchema: z.ZodType<DeleteDriveResponse>;
//# sourceMappingURL=deletedriveresponse.d.ts.map