import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Attachments
 */
export type DeleteAttachmentResponse = {
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
export declare const DeleteAttachmentResponse$zodSchema: z.ZodType<DeleteAttachmentResponse>;
//# sourceMappingURL=deleteattachmentresponse.d.ts.map