import * as z from "zod";
import { ExpenseCategory } from "./expensecategory.js";
/**
 * Expense Categories
 */
export type GetExpenseCategoryResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: ExpenseCategory;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetExpenseCategoryResponse$zodSchema: z.ZodType<GetExpenseCategoryResponse>;
//# sourceMappingURL=getexpensecategoryresponse.d.ts.map