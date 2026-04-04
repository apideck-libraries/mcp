import * as z from "zod";
import { ExpenseReport } from "./expensereport.js";
/**
 * Expense Reports
 */
export type GetExpenseReportResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: ExpenseReport;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetExpenseReportResponse$zodSchema: z.ZodType<GetExpenseReportResponse>;
//# sourceMappingURL=getexpensereportresponse.d.ts.map