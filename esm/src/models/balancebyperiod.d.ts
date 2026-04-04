import * as z from "zod";
import { BalanceByTransaction } from "./balancebytransaction.js";
export type BalanceByPeriod = {
    start_date?: string | null | undefined;
    end_date?: string | null | undefined;
    total_amount?: number | undefined;
    balances_by_transaction?: Array<BalanceByTransaction> | undefined;
};
export declare const BalanceByPeriod$zodSchema: z.ZodType<BalanceByPeriod>;
//# sourceMappingURL=balancebyperiod.d.ts.map