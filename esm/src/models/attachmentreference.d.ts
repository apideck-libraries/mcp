import * as z from "zod";
import { AttachmentReferenceType } from "./attachmentreferencetype.js";
export type AttachmentReference = {
    type?: AttachmentReferenceType | undefined;
    id?: string | undefined;
};
export declare const AttachmentReference$zodSchema: z.ZodType<AttachmentReference>;
//# sourceMappingURL=attachmentreference.d.ts.map