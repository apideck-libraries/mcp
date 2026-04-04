import * as z from "zod";
export type UploadSession = {
    id?: string | undefined;
    success?: boolean | undefined;
    part_size?: number | undefined;
    parallel_upload_supported?: boolean | undefined;
    uploaded_byte_range?: string | undefined;
    expires_at?: string | null | undefined;
};
export declare const UploadSession$zodSchema: z.ZodType<UploadSession>;
//# sourceMappingURL=uploadsession.d.ts.map