import * as z from "zod";
import { PassThroughBody } from "./passthroughbody.js";
export type CollectionTicketCommentInput = {
    body?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const CollectionTicketCommentInput$zodSchema: z.ZodType<CollectionTicketCommentInput>;
//# sourceMappingURL=collectionticketcommentinput.d.ts.map