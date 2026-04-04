import * as z from "zod";
import { OutstandingBalanceByCustomer } from "./outstandingbalancebycustomer.js";
export type AgedDebtors = {
    report_generated_at?: string | undefined;
    report_as_of_date?: string | undefined;
    period_count?: number | undefined;
    period_length?: number | undefined;
    outstanding_balances?: Array<OutstandingBalanceByCustomer> | undefined;
};
export declare const AgedDebtors$zodSchema: z.ZodType<AgedDebtors>;
//# sourceMappingURL=ageddebtors.d.ts.map