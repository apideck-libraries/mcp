import * as z from "zod";
import { CollectionTicketComment } from "./collectionticketcomment.js";
/**
 * Get a Comment
 */
export type GetCommentResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: CollectionTicketComment;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetCommentResponse$zodSchema: z.ZodType<GetCommentResponse>;
//# sourceMappingURL=getcommentresponse.d.ts.map