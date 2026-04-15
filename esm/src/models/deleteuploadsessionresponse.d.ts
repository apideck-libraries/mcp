import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * UploadSessions
 */
export type DeleteUploadSessionResponse = {
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
export declare const DeleteUploadSessionResponse$zodSchema: z.ZodType<DeleteUploadSessionResponse>;
//# sourceMappingURL=deleteuploadsessionresponse.d.ts.map