import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Files
 */
export type DeleteFileResponse = {
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
export declare const DeleteFileResponse$zodSchema: z.ZodType<DeleteFileResponse>;
//# sourceMappingURL=deletefileresponse.d.ts.map