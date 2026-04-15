import * as z from "zod";
import { PassThroughBody } from "./passthroughbody.js";
export type CopyFolderRequest = {
    name?: string | undefined;
    parent_folder_id: string;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const CopyFolderRequest$zodSchema: z.ZodType<CopyFolderRequest>;
//# sourceMappingURL=copyfolderrequest.d.ts.map