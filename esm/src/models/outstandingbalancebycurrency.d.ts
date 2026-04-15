import * as z from "zod";
import { BalanceByPeriod } from "./balancebyperiod.js";
import { Currency } from "./currency.js";
export type OutstandingBalanceByCurrency = {
    currency?: Currency | null | undefined;
    total_amount?: number | undefined;
    balances_by_period?: Array<BalanceByPeriod> | undefined;
};
export declare const OutstandingBalanceByCurrency$zodSchema: z.ZodType<OutstandingBalanceByCurrency>;
//# sourceMappingURL=outstandingbalancebycurrency.d.ts.map