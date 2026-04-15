import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { BankAccount } from "./bankaccount.js";
import { BillLineItem } from "./billlineitem.js";
import { BillLineItemInput } from "./billlineiteminput.js";
import { Currency } from "./currency.js";
import { CustomFieldUnion } from "./customfieldunion.js";
import { LinkedAttachment } from "./linkedattachment.js";
import { LinkedLedgerAccount } from "./linkedledgeraccount.js";
import { LinkedSupplier } from "./linkedsupplier.js";
import { LinkedSupplierInput } from "./linkedsupplierinput.js";
import { LinkedTrackingCategory } from "./linkedtrackingcategory.js";
import { PassThroughBody } from "./passthroughbody.js";
/**
 * Invoice status
 */
export declare const BillStatus: {
    readonly Draft: "draft";
    readonly Submitted: "submitted";
    readonly Authorised: "authorised";
    readonly PartiallyPaid: "partially_paid";
    readonly Paid: "paid";
    readonly Void: "void";
    readonly Credit: "credit";
    readonly Deleted: "deleted";
    readonly Posted: "posted";
};
/**
 * Invoice status
 */
export type BillStatus = OpenEnum<typeof BillStatus>;
export declare const BillStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    void: "void";
    credit: "credit";
    draft: "draft";
    authorised: "authorised";
    paid: "paid";
    deleted: "deleted";
    submitted: "submitted";
    partially_paid: "partially_paid";
    posted: "posted";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * Type of amortization
 */
export declare const BillAmortizationType: {
    readonly Manual: "manual";
    readonly Receipt: "receipt";
    readonly Schedule: "schedule";
    readonly Other: "other";
};
/**
 * Type of amortization
 */
export type BillAmortizationType = OpenEnum<typeof BillAmortizationType>;
export declare const BillAmortizationType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    manual: "manual";
    other: "other";
    receipt: "receipt";
    schedule: "schedule";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type Bill = {
    id?: string | undefined;
    downstream_id?: string | null | undefined;
    display_id?: string | null | undefined;
    bill_number?: string | null | undefined;
    supplier?: LinkedSupplier | null | undefined;
    company_id?: string | null | undefined;
    location_id?: string | null | undefined;
    department_id?: string | null | undefined;
    currency?: Currency | null | undefined;
    currency_rate?: number | null | undefined;
    tax_inclusive?: boolean | null | undefined;
    bill_date?: string | null | undefined;
    due_date?: string | null | undefined;
    paid_date?: string | null | undefined;
    po_number?: string | null | undefined;
    reference?: string | null | undefined;
    line_items?: Array<BillLineItem> | undefined;
    terms?: string | null | undefined;
    terms_id?: string | null | undefined;
    balance?: number | null | undefined;
    deposit?: number | null | undefined;
    sub_total?: number | null | undefined;
    total_tax?: number | null | undefined;
    total?: number | null | undefined;
    tax_code?: string | null | undefined;
    notes?: string | null | undefined;
    status?: BillStatus | null | undefined;
    ledger_account?: LinkedLedgerAccount | null | undefined;
    payment_method?: string | null | undefined;
    channel?: string | null | undefined;
    language?: string | null | undefined;
    accounting_by_row?: boolean | null | undefined;
    bank_account?: BankAccount | undefined;
    discount_percentage?: number | null | undefined;
    template_id?: string | null | undefined;
    approved_by?: string | null | undefined;
    amortization_type?: BillAmortizationType | null | undefined;
    tax_method?: string | null | undefined;
    document_received?: boolean | null | undefined;
    source_document_url?: string | null | undefined;
    tracking_categories?: Array<LinkedTrackingCategory | null> | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    row_version?: string | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
    accounting_period?: string | null | undefined;
    attachments?: Array<LinkedAttachment | null> | undefined;
};
export declare const Bill$zodSchema: z.ZodType<Bill>;
export type BillInput = {
    display_id?: string | null | undefined;
    bill_number?: string | null | undefined;
    supplier?: LinkedSupplierInput | null | undefined;
    company_id?: string | null | undefined;
    location_id?: string | null | undefined;
    department_id?: string | null | undefined;
    currency?: Currency | null | undefined;
    currency_rate?: number | null | undefined;
    tax_inclusive?: boolean | null | undefined;
    bill_date?: string | null | undefined;
    due_date?: string | null | undefined;
    paid_date?: string | null | undefined;
    po_number?: string | null | undefined;
    reference?: string | null | undefined;
    line_items?: Array<BillLineItemInput> | undefined;
    terms?: string | null | undefined;
    terms_id?: string | null | undefined;
    balance?: number | null | undefined;
    deposit?: number | null | undefined;
    sub_total?: number | null | undefined;
    total_tax?: number | null | undefined;
    total?: number | null | undefined;
    tax_code?: string | null | undefined;
    notes?: string | null | undefined;
    status?: BillStatus | null | undefined;
    ledger_account?: LinkedLedgerAccount | null | undefined;
    payment_method?: string | null | undefined;
    channel?: string | null | undefined;
    language?: string | null | undefined;
    accounting_by_row?: boolean | null | undefined;
    bank_account?: BankAccount | undefined;
    discount_percentage?: number | null | undefined;
    template_id?: string | null | undefined;
    approved_by?: string | null | undefined;
    amortization_type?: BillAmortizationType | null | undefined;
    tax_method?: string | null | undefined;
    document_received?: boolean | null | undefined;
    source_document_url?: string | null | undefined;
    tracking_categories?: Array<LinkedTrackingCategory | null> | null | undefined;
    row_version?: string | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
    accounting_period?: string | null | undefined;
    attachments?: Array<LinkedAttachment | null> | undefined;
};
export declare const BillInput$zodSchema: z.ZodType<BillInput>;
//# sourceMappingURL=bill.d.ts.map