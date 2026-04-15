import * as z from "zod";
import { Folder } from "./folder.js";
/**
 * Folders
 */
export type GetFolderResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Folder;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetFolderResponse$zodSchema: z.ZodType<GetFolderResponse>;
//# sourceMappingURL=getfolderresponse.d.ts.map