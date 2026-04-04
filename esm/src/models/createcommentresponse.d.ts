import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Create a Comment
 */
export type CreateCommentResponse = {
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
export declare const CreateCommentResponse$zodSchema: z.ZodType<CreateCommentResponse>;
//# sourceMappingURL=createcommentresponse.d.ts.map