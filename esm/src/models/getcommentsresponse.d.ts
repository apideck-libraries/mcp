import * as z from "zod";
import { CollectionTicketComment } from "./collectionticketcomment.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * List Comments
 */
export type GetCommentsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<CollectionTicketComment>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetCommentsResponse$zodSchema: z.ZodType<GetCommentsResponse>;
//# sourceMappingURL=getcommentsresponse.d.ts.map