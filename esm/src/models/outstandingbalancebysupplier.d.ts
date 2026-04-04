import * as z from "zod";
import { OutstandingBalanceByCurrency } from "./outstandingbalancebycurrency.js";
export type OutstandingBalanceBySupplier = {
    supplier_id?: string | undefined;
    supplier_name?: string | undefined;
    outstanding_balances_by_currency?: Array<OutstandingBalanceByCurrency> | undefined;
};
export declare const OutstandingBalanceBySupplier$zodSchema: z.ZodType<OutstandingBalanceBySupplier>;
//# sourceMappingURL=outstandingbalancebysupplier.d.ts.map