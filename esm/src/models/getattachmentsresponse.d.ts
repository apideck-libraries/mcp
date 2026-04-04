import * as z from "zod";
import { Attachment } from "./attachment.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Attachments
 */
export type GetAttachmentsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Attachment>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetAttachmentsResponse$zodSchema: z.ZodType<GetAttachmentsResponse>;
//# sourceMappingURL=getattachmentsresponse.d.ts.map