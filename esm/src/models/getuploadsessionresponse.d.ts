import * as z from "zod";
import { UploadSession } from "./uploadsession.js";
/**
 * UploadSessions
 */
export type GetUploadSessionResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: UploadSession;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetUploadSessionResponse$zodSchema: z.ZodType<GetUploadSessionResponse>;
//# sourceMappingURL=getuploadsessionresponse.d.ts.map