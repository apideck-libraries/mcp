import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Attachments
 */
export type CreateAttachmentResponse = {
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
export declare const CreateAttachmentResponse$zodSchema: z.ZodType<CreateAttachmentResponse>;
//# sourceMappingURL=createattachmentresponse.d.ts.map