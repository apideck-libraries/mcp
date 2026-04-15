import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Delete a Comment
 */
export type DeleteCommentResponse = {
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
export declare const DeleteCommentResponse$zodSchema: z.ZodType<DeleteCommentResponse>;
//# sourceMappingURL=deletecommentresponse.d.ts.map