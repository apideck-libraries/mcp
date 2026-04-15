import * as z from "zod";
import { EcommerceStore } from "./ecommercestore.js";
/**
 * Stores
 */
export type GetStoreResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: EcommerceStore;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetStoreResponse$zodSchema: z.ZodType<GetStoreResponse>;
//# sourceMappingURL=getstoreresponse.d.ts.map