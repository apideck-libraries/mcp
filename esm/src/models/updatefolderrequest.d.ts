import * as z from "zod";
import { PassThroughBody } from "./passthroughbody.js";
export type UpdateFolderRequest = {
    name?: string | undefined;
    description?: string | undefined;
    parent_folder_id?: string | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const UpdateFolderRequest$zodSchema: z.ZodType<UpdateFolderRequest>;
//# sourceMappingURL=updatefolderrequest.d.ts.map