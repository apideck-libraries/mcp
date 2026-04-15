import * as z from "zod";
import { Collection } from "./collection.js";
/**
 * Get a Collection
 */
export type GetCollectionResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Collection;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetCollectionResponse$zodSchema: z.ZodType<GetCollectionResponse>;
//# sourceMappingURL=getcollectionresponse.d.ts.map