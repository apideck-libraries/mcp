import * as z from "zod";
import { Category } from "./category.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Categories
 */
export type GetCategoriesResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Category>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetCategoriesResponse$zodSchema: z.ZodType<GetCategoriesResponse>;
//# sourceMappingURL=getcategoriesresponse.d.ts.map