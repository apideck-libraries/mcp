import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Folders
 */
export type DeleteFolderResponse = {
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
export declare const DeleteFolderResponse$zodSchema: z.ZodType<DeleteFolderResponse>;
//# sourceMappingURL=deletefolderresponse.d.ts.map