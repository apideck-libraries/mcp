import * as z from "zod";
import { ExpenseReport } from "./expensereport.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Expense Reports
 */
export type GetExpenseReportsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<ExpenseReport>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetExpenseReportsResponse$zodSchema: z.ZodType<GetExpenseReportsResponse>;
//# sourceMappingURL=getexpensereportsresponse.d.ts.map