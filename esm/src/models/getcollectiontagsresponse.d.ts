import * as z from "zod";
import { CollectionTag } from "./collectiontag.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * List Tags
 */
export type GetCollectionTagsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<CollectionTag>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetCollectionTagsResponse$zodSchema: z.ZodType<GetCollectionTagsResponse>;
//# sourceMappingURL=getcollectiontagsresponse.d.ts.map