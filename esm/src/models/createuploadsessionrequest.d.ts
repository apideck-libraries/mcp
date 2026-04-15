import * as z from "zod";
import { PassThroughBody } from "./passthroughbody.js";
export type CreateUploadSessionRequest = {
    name: string;
    parent_folder_id: string;
    drive_id?: string | undefined;
    size: number | null;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const CreateUploadSessionRequest$zodSchema: z.ZodType<CreateUploadSessionRequest>;
//# sourceMappingURL=createuploadsessionrequest.d.ts.map