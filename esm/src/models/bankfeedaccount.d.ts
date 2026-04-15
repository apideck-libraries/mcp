import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Currency } from "./currency.js";
import { CustomFieldUnion } from "./customfieldunion.js";
/**
 * Type of the bank account.
 */
export declare const BankAccountType: {
    readonly Bank: "bank";
    readonly CreditCard: "credit_card";
};
/**
 * Type of the bank account.
 */
export type BankAccountType = OpenEnum<typeof BankAccountType>;
export declare const BankAccountType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    credit_card: "credit_card";
    bank: "bank";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * Current status of the bank feed.
 */
export declare const FeedStatus: {
    readonly Pending: "pending";
    readonly Rejected: "rejected";
};
/**
 * Current status of the bank feed.
 */
export type FeedStatus = OpenEnum<typeof FeedStatus>;
export declare const FeedStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    pending: "pending";
    rejected: "rejected";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type BankFeedAccount = {
    id: string;
    bank_account_type?: BankAccountType | undefined;
    source_account_id?: string | undefined;
    target_account_id?: string | undefined;
    target_account_name?: string | undefined;
    target_account_number?: string | undefined;
    currency?: Currency | null | undefined;
    feed_status?: FeedStatus | undefined;
    country?: string | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    created_at?: string | null | undefined;
    updated_at?: string | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
};
export declare const BankFeedAccount$zodSchema: z.ZodType<BankFeedAccount>;
export type BankFeedAccountInput = {
    bank_account_type?: BankAccountType | undefined;
    source_account_id?: string | undefined;
    target_account_id?: string | undefined;
    target_account_name?: string | undefined;
    target_account_number?: string | undefined;
    currency?: Currency | null | undefined;
    feed_status?: FeedStatus | undefined;
    country?: string | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
};
export declare const BankFeedAccountInput$zodSchema: z.ZodType<BankFeedAccountInput>;
//# sourceMappingURL=bankfeedaccount.d.ts.map