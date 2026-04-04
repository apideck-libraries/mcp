import * as z from "zod";
import { Collection } from "./collection.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * List Collections
 */
export type GetCollectionsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Collection>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetCollectionsResponse$zodSchema: z.ZodType<GetCollectionsResponse>;
//# sourceMappingURL=getcollectionsresponse.d.ts.map