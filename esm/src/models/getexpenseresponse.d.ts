import * as z from "zod";
import { Expense } from "./expense.js";
/**
 * Expenses
 */
export type GetExpenseResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Expense;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetExpenseResponse$zodSchema: z.ZodType<GetExpenseResponse>;
//# sourceMappingURL=getexpenseresponse.d.ts.map