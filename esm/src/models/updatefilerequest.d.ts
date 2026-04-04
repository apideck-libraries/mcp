import * as z from "zod";
import { PassThroughBody } from "./passthroughbody.js";
export type UpdateFileRequest = {
    name?: string | undefined;
    description?: string | undefined;
    parent_folder_id?: string | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const UpdateFileRequest$zodSchema: z.ZodType<UpdateFileRequest>;
//# sourceMappingURL=updatefilerequest.d.ts.map