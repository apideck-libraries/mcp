import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Folders
 */
export type UpdateFolderResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: UnifiedId;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const UpdateFolderResponse$zodSchema: z.ZodType<UpdateFolderResponse>;
//# sourceMappingURL=updatefolderresponse.d.ts.map