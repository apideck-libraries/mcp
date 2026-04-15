import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Currency } from "./currency.js";
/**
 * The type of bank account.
 */
export declare const BankAccountAccountType: {
    readonly BankAccount: "bank_account";
    readonly CreditCard: "credit_card";
    readonly Other: "other";
};
/**
 * The type of bank account.
 */
export type BankAccountAccountType = OpenEnum<typeof BankAccountAccountType>;
export declare const BankAccountAccountType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    credit_card: "credit_card";
    other: "other";
    bank_account: "bank_account";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type BankAccount = {
    bank_name?: string | null | undefined;
    account_number?: string | null | undefined;
    account_name?: string | null | undefined;
    account_type?: BankAccountAccountType | null | undefined;
    iban?: string | null | undefined;
    bic?: string | null | undefined;
    routing_number?: string | null | undefined;
    bsb_number?: string | null | undefined;
    branch_identifier?: string | null | undefined;
    bank_code?: string | null | undefined;
    currency?: Currency | null | undefined;
    country?: string | null | undefined;
};
export declare const BankAccount$zodSchema: z.ZodType<BankAccount>;
//# sourceMappingURL=bankaccount.d.ts.map