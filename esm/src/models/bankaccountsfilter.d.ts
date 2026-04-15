import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Filter by account type
 */
export declare const BankAccountsFilterAccountType: {
    readonly Checking: "checking";
    readonly Savings: "savings";
    readonly CreditCard: "credit_card";
    readonly MoneyMarket: "money_market";
    readonly LineOfCredit: "line_of_credit";
    readonly Other: "other";
    readonly Cash: "cash";
};
/**
 * Filter by account type
 */
export type BankAccountsFilterAccountType = OpenEnum<typeof BankAccountsFilterAccountType>;
export declare const BankAccountsFilterAccountType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    cash: "cash";
    checking: "checking";
    savings: "savings";
    credit_card: "credit_card";
    money_market: "money_market";
    line_of_credit: "line_of_credit";
    other: "other";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * Filter by account status
 */
export declare const BankAccountsFilterStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
    readonly Closed: "closed";
};
/**
 * Filter by account status
 */
export type BankAccountsFilterStatus = OpenEnum<typeof BankAccountsFilterStatus>;
export declare const BankAccountsFilterStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    active: "active";
    inactive: "inactive";
    closed: "closed";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type BankAccountsFilter = {
    name?: string | undefined;
    account_type?: BankAccountsFilterAccountType | undefined;
    status?: BankAccountsFilterStatus | undefined;
};
export declare const BankAccountsFilter$zodSchema: z.ZodType<BankAccountsFilter>;
//# sourceMappingURL=bankaccountsfilter.d.ts.map