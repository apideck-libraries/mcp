import * as z from "zod";
import { AttachmentReference } from "./attachmentreference.js";
import { PassThroughBody } from "./passthroughbody.js";
export type Attachment = {
    id?: string | undefined;
    display_id?: string | null | undefined;
    name?: string | null | undefined;
    mime_type?: string | null | undefined;
    size?: number | null | undefined;
    reference?: AttachmentReference | undefined;
    description?: string | null | undefined;
    parent_folder_id?: string | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const Attachment$zodSchema: z.ZodType<Attachment>;
//# sourceMappingURL=attachment.d.ts.map