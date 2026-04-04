import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Currency } from "./currency.js";
import { CustomFieldUnion } from "./customfieldunion.js";
import { LinkedLedgerAccount } from "./linkedledgeraccount.js";
import { LinkedSupplier } from "./linkedsupplier.js";
import { LinkedSupplierInput } from "./linkedsupplierinput.js";
import { LinkedTrackingCategory } from "./linkedtrackingcategory.js";
import { PassThroughBody } from "./passthroughbody.js";
import { PaymentStatus } from "./paymentstatus.js";
/**
 * Type of payment
 */
export declare const BillPaymentType: {
    readonly AccountsPayableCredit: "accounts_payable_credit";
    readonly AccountsPayableOverpayment: "accounts_payable_overpayment";
    readonly AccountsPayablePrepayment: "accounts_payable_prepayment";
    readonly AccountsPayable: "accounts_payable";
};
/**
 * Type of payment
 */
export type BillPaymentType = OpenEnum<typeof BillPaymentType>;
export declare const BillPaymentType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    accounts_payable_credit: "accounts_payable_credit";
    accounts_payable_overpayment: "accounts_payable_overpayment";
    accounts_payable_prepayment: "accounts_payable_prepayment";
    accounts_payable: "accounts_payable";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * Type of entity this payment should be attributed to.
 */
export declare const BillPaymentAllocationType: {
    readonly Bill: "bill";
    readonly Expense: "expense";
    readonly CreditMemo: "credit_memo";
    readonly OverPayment: "over_payment";
    readonly PrePayment: "pre_payment";
    readonly JournalEntry: "journal_entry";
    readonly Other: "other";
};
/**
 * Type of entity this payment should be attributed to.
 */
export type BillPaymentAllocationType = OpenEnum<typeof BillPaymentAllocationType>;
export declare const BillPaymentAllocationType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    bill: "bill";
    expense: "expense";
    other: "other";
    credit_memo: "credit_memo";
    over_payment: "over_payment";
    pre_payment: "pre_payment";
    journal_entry: "journal_entry";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type BillPaymentAllocation = {
    id?: string | null | undefined;
    type?: BillPaymentAllocationType | undefined;
    code?: string | undefined;
    amount?: number | null | undefined;
    allocation_id?: string | undefined;
};
export declare const BillPaymentAllocation$zodSchema: z.ZodType<BillPaymentAllocation>;
export type BillPayment = {
    id: string;
    downstream_id?: string | null | undefined;
    currency?: Currency | null | undefined;
    currency_rate?: number | null | undefined;
    total_amount: number | null;
    reference?: string | null | undefined;
    payment_method?: string | null | undefined;
    payment_method_reference?: string | null | undefined;
    payment_method_id?: string | null | undefined;
    account?: LinkedLedgerAccount | null | undefined;
    transaction_date: string | null;
    supplier?: LinkedSupplier | null | undefined;
    company_id?: string | null | undefined;
    reconciled?: boolean | null | undefined;
    status?: PaymentStatus | undefined;
    type?: BillPaymentType | undefined;
    allocations?: Array<BillPaymentAllocation> | undefined;
    note?: string | null | undefined;
    number?: string | null | undefined;
    tracking_categories?: Array<LinkedTrackingCategory | null> | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    row_version?: string | null | undefined;
    display_id?: string | null | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    created_at?: string | null | undefined;
    updated_at?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const BillPayment$zodSchema: z.ZodType<BillPayment>;
export type BillPaymentAllocationInput = {
    id?: string | null | undefined;
    type?: BillPaymentAllocationType | undefined;
    amount?: number | null | undefined;
    allocation_id?: string | undefined;
};
export declare const BillPaymentAllocationInput$zodSchema: z.ZodType<BillPaymentAllocationInput>;
export type BillPaymentInput = {
    currency?: Currency | null | undefined;
    currency_rate?: number | null | undefined;
    total_amount: number | null;
    reference?: string | null | undefined;
    payment_method?: string | null | undefined;
    payment_method_reference?: string | null | undefined;
    payment_method_id?: string | null | undefined;
    account?: LinkedLedgerAccount | null | undefined;
    transaction_date: string | null;
    supplier?: LinkedSupplierInput | null | undefined;
    company_id?: string | null | undefined;
    reconciled?: boolean | null | undefined;
    status?: PaymentStatus | undefined;
    type?: BillPaymentType | undefined;
    allocations?: Array<BillPaymentAllocationInput> | undefined;
    note?: string | null | undefined;
    number?: string | null | undefined;
    tracking_categories?: Array<LinkedTrackingCategory | null> | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    row_version?: string | null | undefined;
    display_id?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const BillPaymentInput$zodSchema: z.ZodType<BillPaymentInput>;
//# sourceMappingURL=billpayment.d.ts.map