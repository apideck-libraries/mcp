import * as z from "zod";
export type LinkedAttachment = {
    name?: string | null | undefined;
    mime_type?: string | null | undefined;
    is_compressed?: boolean | null | undefined;
    encoding?: string | null | undefined;
    content?: string | null | undefined;
    notes?: string | null | undefined;
};
export declare const LinkedAttachment$zodSchema: z.ZodType<LinkedAttachment>;
//# sourceMappingURL=linkedattachment.d.ts.map