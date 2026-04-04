import * as z from "zod";
import { Compensation } from "./compensation.js";
import { PayrollTotals } from "./payrolltotals.js";
export type Payroll = {
    id: string | null;
    company_id?: string | null | undefined;
    processed: boolean | null;
    processed_date?: string | null | undefined;
    check_date: string | null;
    start_date: string | null;
    end_date: string | null;
    totals?: PayrollTotals | undefined;
    compensations?: Array<Compensation> | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const Payroll$zodSchema: z.ZodType<Payroll>;
//# sourceMappingURL=payroll.d.ts.map