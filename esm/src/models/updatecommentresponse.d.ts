import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Update a Comment
 */
export type UpdateCommentResponse = {
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
export declare const UpdateCommentResponse$zodSchema: z.ZodType<UpdateCommentResponse>;
//# sourceMappingURL=updatecommentresponse.d.ts.map