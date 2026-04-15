import * as z from "zod";
import { ExpenseCategory } from "./expensecategory.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Expense Categories
 */
export type GetExpenseCategoriesResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<ExpenseCategory>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetExpenseCategoriesResponse$zodSchema: z.ZodType<GetExpenseCategoriesResponse>;
//# sourceMappingURL=getexpensecategoriesresponse.d.ts.map