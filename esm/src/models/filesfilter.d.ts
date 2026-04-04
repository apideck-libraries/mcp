import * as z from "zod";
export type FilesFilter = {
    drive_id?: string | undefined;
    folder_id?: string | undefined;
    shared?: boolean | undefined;
};
export declare const FilesFilter$zodSchema: z.ZodType<FilesFilter>;
//# sourceMappingURL=filesfilter.d.ts.map