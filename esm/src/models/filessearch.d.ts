import * as z from "zod";
import { PassThroughBody } from "./passthroughbody.js";
export type FilesSearch = {
    query: string;
    drive_id?: string | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const FilesSearch$zodSchema: z.ZodType<FilesSearch>;
//# sourceMappingURL=filessearch.d.ts.map