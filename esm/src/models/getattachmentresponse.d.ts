import * as z from "zod";
import { Attachment } from "./attachment.js";
/**
 * Attachments
 */
export type GetAttachmentResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Attachment;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetAttachmentResponse$zodSchema: z.ZodType<GetAttachmentResponse>;
//# sourceMappingURL=getattachmentresponse.d.ts.map