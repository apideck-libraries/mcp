import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Folders
 */
export type CreateFolderResponse = {
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
export declare const CreateFolderResponse$zodSchema: z.ZodType<CreateFolderResponse>;
//# sourceMappingURL=createfolderresponse.d.ts.map