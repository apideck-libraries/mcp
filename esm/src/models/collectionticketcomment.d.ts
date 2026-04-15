import * as z from "zod";
import { PassThroughBody } from "./passthroughbody.js";
export type CollectionTicketComment = {
    id?: string | undefined;
    body?: string | null | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const CollectionTicketComment$zodSchema: z.ZodType<CollectionTicketComment>;
//# sourceMappingURL=collectionticketcomment.d.ts.map