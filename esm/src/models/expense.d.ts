import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Currency } from "./currency.js";
import { CustomFieldUnion } from "./customfieldunion.js";
import { ExpenseLineItem } from "./expenselineitem.js";
import { ExpenseLineItemInput } from "./expenselineiteminput.js";
import { LinkedDepartment } from "./linkeddepartment.js";
import { LinkedDepartmentInput } from "./linkeddepartmentinput.js";
import { LinkedFinancialAccount, LinkedFinancialAccountInput } from "./linkedfinancialaccount.js";
import { LinkedLocation } from "./linkedlocation.js";
import { LinkedLocationInput } from "./linkedlocationinput.js";
import { LinkedSupplier } from "./linkedsupplier.js";
import { LinkedSupplierInput } from "./linkedsupplierinput.js";
import { LinkedTaxRate } from "./linkedtaxrate.js";
import { LinkedTaxRateInput } from "./linkedtaxrateinput.js";
import { LinkedTrackingCategory } from "./linkedtrackingcategory.js";
import { PassThroughBody } from "./passthroughbody.js";
/**
 * The type of payment for the expense.
 */
export declare const ExpensePaymentType: {
    readonly Cash: "cash";
    readonly Check: "check";
    readonly CreditCard: "credit_card";
    readonly Other: "other";
};
/**
 * The type of payment for the expense.
 */
export type ExpensePaymentType = OpenEnum<typeof ExpensePaymentType>;
export declare const ExpensePaymentType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    check: "check";
    cash: "cash";
    credit_card: "credit_card";
    other: "other";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * The type of expense.
 */
export declare const ExpenseType: {
    readonly Expense: "expense";
    readonly Refund: "refund";
};
/**
 * The type of expense.
 */
export type ExpenseType = OpenEnum<typeof ExpenseType>;
export declare const ExpenseType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    expense: "expense";
    refund: "refund";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * Expense status
 */
export declare const ExpenseStatus: {
    readonly Draft: "draft";
    readonly Posted: "posted";
    readonly Voided: "voided";
};
/**
 * Expense status
 */
export type ExpenseStatus = OpenEnum<typeof ExpenseStatus>;
export declare const ExpenseStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    draft: "draft";
    voided: "voided";
    posted: "posted";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type Expense = {
    id?: string | undefined;
    display_id?: string | null | undefined;
    number?: string | null | undefined;
    transaction_date: string | null;
    account_id?: string | undefined;
    account?: LinkedFinancialAccount | null | undefined;
    supplier_id?: string | undefined;
    supplier?: LinkedSupplier | null | undefined;
    company_id?: string | null | undefined;
    location?: LinkedLocation | null | undefined;
    department_id?: string | null | undefined;
    department?: LinkedDepartment | null | undefined;
    payment_type?: ExpensePaymentType | null | undefined;
    currency?: Currency | null | undefined;
    currency_rate?: number | null | undefined;
    type?: ExpenseType | null | undefined;
    memo?: string | null | undefined;
    tax_rate?: LinkedTaxRate | undefined;
    tax_inclusive?: boolean | null | undefined;
    sub_total?: number | null | undefined;
    total_tax?: number | null | undefined;
    total_amount?: number | null | undefined;
    tracking_categories?: Array<LinkedTrackingCategory | null> | null | undefined;
    line_items: Array<ExpenseLineItem>;
    reference?: string | null | undefined;
    source_document_url?: string | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    status?: ExpenseStatus | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    row_version?: string | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const Expense$zodSchema: z.ZodType<Expense>;
export type ExpenseInput = {
    display_id?: string | null | undefined;
    number?: string | null | undefined;
    transaction_date: string | null;
    account_id?: string | undefined;
    account?: LinkedFinancialAccountInput | null | undefined;
    supplier_id?: string | undefined;
    supplier?: LinkedSupplierInput | null | undefined;
    company_id?: string | null | undefined;
    location?: LinkedLocationInput | null | undefined;
    department_id?: string | null | undefined;
    department?: LinkedDepartmentInput | null | undefined;
    payment_type?: ExpensePaymentType | null | undefined;
    currency?: Currency | null | undefined;
    currency_rate?: number | null | undefined;
    type?: ExpenseType | null | undefined;
    memo?: string | null | undefined;
    tax_rate?: LinkedTaxRateInput | undefined;
    tax_inclusive?: boolean | null | undefined;
    sub_total?: number | null | undefined;
    total_tax?: number | null | undefined;
    total_amount?: number | null | undefined;
    tracking_categories?: Array<LinkedTrackingCategory | null> | null | undefined;
    line_items: Array<ExpenseLineItemInput>;
    reference?: string | null | undefined;
    source_document_url?: string | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    status?: ExpenseStatus | null | undefined;
    row_version?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const ExpenseInput$zodSchema: z.ZodType<ExpenseInput>;
//# sourceMappingURL=expense.d.ts.map