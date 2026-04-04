import * as z from "zod";
import { OutstandingBalanceByCurrency } from "./outstandingbalancebycurrency.js";
export type OutstandingBalanceByCustomer = {
    customer_id?: string | undefined;
    customer_name?: string | undefined;
    outstanding_balances_by_currency?: Array<OutstandingBalanceByCurrency> | undefined;
};
export declare const OutstandingBalanceByCustomer$zodSchema: z.ZodType<OutstandingBalanceByCustomer>;
//# sourceMappingURL=outstandingbalancebycustomer.d.ts.map