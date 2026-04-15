import * as z from "zod";
import { CollectionUser } from "./collectionuser.js";
/**
 * User
 */
export type GetCollectionUserResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: CollectionUser;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetCollectionUserResponse$zodSchema: z.ZodType<GetCollectionUserResponse>;
//# sourceMappingURL=getcollectionuserresponse.d.ts.map