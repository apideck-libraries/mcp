import * as z from "zod";
import { Compensation } from "./compensation.js";
import { PayrollTotals } from "./payrolltotals.js";
export type EmployeePayroll = {
    id: string | null;
    employee_id?: string | null | undefined;
    company_id?: string | null | undefined;
    processed: boolean | null;
    processed_date?: string | null | undefined;
    check_date: string | null;
    start_date: string | null;
    end_date: string | null;
    totals?: PayrollTotals | undefined;
    compensations?: Array<Compensation> | undefined;
};
export declare const EmployeePayroll$zodSchema: z.ZodType<EmployeePayroll>;
//# sourceMappingURL=employeepayroll.d.ts.map