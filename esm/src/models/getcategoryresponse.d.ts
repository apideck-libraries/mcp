import * as z from "zod";
import { Category } from "./category.js";
/**
 * Category
 */
export type GetCategoryResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Category;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetCategoryResponse$zodSchema: z.ZodType<GetCategoryResponse>;
//# sourceMappingURL=getcategoryresponse.d.ts.map