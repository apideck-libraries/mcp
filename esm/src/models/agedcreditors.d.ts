import * as z from "zod";
import { OutstandingBalanceBySupplier } from "./outstandingbalancebysupplier.js";
export type AgedCreditors = {
    report_generated_at?: string | undefined;
    report_as_of_date?: string | undefined;
    period_count?: number | undefined;
    period_length?: number | undefined;
    outstanding_balances?: Array<OutstandingBalanceBySupplier> | undefined;
};
export declare const AgedCreditors$zodSchema: z.ZodType<AgedCreditors>;
//# sourceMappingURL=agedcreditors.d.ts.map