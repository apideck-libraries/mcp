import * as z from "zod";
import { CollectionUser } from "./collectionuser.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Users
 */
export type GetCollectionUsersResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<CollectionUser>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetCollectionUsersResponse$zodSchema: z.ZodType<GetCollectionUsersResponse>;
//# sourceMappingURL=getcollectionusersresponse.d.ts.map