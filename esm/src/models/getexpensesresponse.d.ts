import * as z from "zod";
import { Expense } from "./expense.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Expenses
 */
export type GetExpensesResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Expense>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetExpensesResponse$zodSchema: z.ZodType<GetExpensesResponse>;
//# sourceMappingURL=getexpensesresponse.d.ts.map