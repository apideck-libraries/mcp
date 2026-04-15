import * as z from "zod";
import { PassThroughBody } from "./passthroughbody.js";
export type CreateFolderRequest = {
    name: string;
    description?: string | undefined;
    parent_folder_id: string;
    drive_id?: string | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const CreateFolderRequest$zodSchema: z.ZodType<CreateFolderRequest>;
//# sourceMappingURL=createfolderrequest.d.ts.map