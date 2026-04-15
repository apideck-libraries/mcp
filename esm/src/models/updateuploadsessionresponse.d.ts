import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * UploadSessions
 */
export type UpdateUploadSessionResponse = {
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
export declare const UpdateUploadSessionResponse$zodSchema: z.ZodType<UpdateUploadSessionResponse>;
//# sourceMappingURL=updateuploadsessionresponse.d.ts.map