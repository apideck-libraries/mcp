import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * UploadSessions
 */
export type CreateUploadSessionResponse = {
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
export declare const CreateUploadSessionResponse$zodSchema: z.ZodType<CreateUploadSessionResponse>;
//# sourceMappingURL=createuploadsessionresponse.d.ts.map