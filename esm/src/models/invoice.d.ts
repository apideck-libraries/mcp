import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Address } from "./address.js";
import { BankAccount } from "./bankaccount.js";
import { Currency } from "./currency.js";
import { CustomFieldUnion } from "./customfieldunion.js";
import { DeprecatedLinkedTrackingCategory } from "./deprecatedlinkedtrackingcategory.js";
import { InvoiceLineItem, InvoiceLineItemInput } from "./invoicelineitem.js";
import { LinkedCustomer } from "./linkedcustomer.js";
import { LinkedCustomerInput } from "./linkedcustomerinput.js";
import { LinkedLedgerAccount } from "./linkedledgeraccount.js";
import { LinkedTrackingCategory } from "./linkedtrackingcategory.js";
import { PassThroughBody } from "./passthroughbody.js";
/**
 * Invoice type
 */
export declare const InvoiceType: {
    readonly Standard: "standard";
    readonly Credit: "credit";
    readonly Service: "service";
    readonly Product: "product";
    readonly Supplier: "supplier";
    readonly Other: "other";
};
/**
 * Invoice type
 */
export type InvoiceType = OpenEnum<typeof InvoiceType>;
export declare const InvoiceType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    service: "service";
    other: "other";
    credit: "credit";
    supplier: "supplier";
    standard: "standard";
    product: "product";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * Invoice status
 */
export declare const InvoiceStatus: {
    readonly Draft: "draft";
    readonly Submitted: "submitted";
    readonly Authorised: "authorised";
    readonly PartiallyPaid: "partially_paid";
    readonly Paid: "paid";
    readonly Unpaid: "unpaid";
    readonly Void: "void";
    readonly Credit: "credit";
    readonly Deleted: "deleted";
    readonly Posted: "posted";
};
/**
 * Invoice status
 */
export type InvoiceStatus = OpenEnum<typeof InvoiceStatus>;
export declare const InvoiceStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    void: "void";
    credit: "credit";
    draft: "draft";
    authorised: "authorised";
    paid: "paid";
    deleted: "deleted";
    submitted: "submitted";
    partially_paid: "partially_paid";
    posted: "posted";
    unpaid: "unpaid";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type PaymentAllocation = {
    id?: string | undefined;
    allocated_amount?: number | null | undefined;
    date?: string | null | undefined;
};
export declare const PaymentAllocation$zodSchema: z.ZodType<PaymentAllocation>;
export type Invoice = {
    id?: string | undefined;
    downstream_id?: string | null | undefined;
    display_id?: string | null | undefined;
    type?: InvoiceType | null | undefined;
    number?: string | null | undefined;
    customer?: LinkedCustomer | null | undefined;
    company_id?: string | null | undefined;
    location_id?: string | null | undefined;
    department_id?: string | null | undefined;
    invoice_date?: string | null | undefined;
    due_date?: string | null | undefined;
    terms?: string | null | undefined;
    terms_id?: string | null | undefined;
    po_number?: string | null | undefined;
    reference?: string | null | undefined;
    status?: InvoiceStatus | null | undefined;
    invoice_sent?: boolean | undefined;
    currency?: Currency | null | undefined;
    currency_rate?: number | null | undefined;
    tax_inclusive?: boolean | null | undefined;
    sub_total?: number | null | undefined;
    total_tax?: number | null | undefined;
    tax_code?: string | null | undefined;
    discount_percentage?: number | null | undefined;
    discount_amount?: number | null | undefined;
    total?: number | null | undefined;
    balance?: number | null | undefined;
    deposit?: number | null | undefined;
    customer_memo?: string | null | undefined;
    tracking_category?: DeprecatedLinkedTrackingCategory | null | undefined;
    tracking_categories?: Array<LinkedTrackingCategory | null> | null | undefined;
    line_items?: Array<InvoiceLineItem> | undefined;
    billing_address?: Address | undefined;
    shipping_address?: Address | undefined;
    template_id?: string | null | undefined;
    source_document_url?: string | null | undefined;
    payment_allocations?: Array<PaymentAllocation> | null | undefined;
    payment_method?: string | null | undefined;
    channel?: string | null | undefined;
    language?: string | null | undefined;
    accounting_by_row?: boolean | null | undefined;
    bank_account?: BankAccount | undefined;
    ledger_account?: LinkedLedgerAccount | null | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    row_version?: string | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const Invoice$zodSchema: z.ZodType<Invoice>;
export type InvoiceInput = {
    display_id?: string | null | undefined;
    type?: InvoiceType | null | undefined;
    number?: string | null | undefined;
    customer?: LinkedCustomerInput | null | undefined;
    company_id?: string | null | undefined;
    location_id?: string | null | undefined;
    department_id?: string | null | undefined;
    invoice_date?: string | null | undefined;
    due_date?: string | null | undefined;
    terms?: string | null | undefined;
    terms_id?: string | null | undefined;
    po_number?: string | null | undefined;
    reference?: string | null | undefined;
    status?: InvoiceStatus | null | undefined;
    invoice_sent?: boolean | undefined;
    currency?: Currency | null | undefined;
    currency_rate?: number | null | undefined;
    tax_inclusive?: boolean | null | undefined;
    sub_total?: number | null | undefined;
    total_tax?: number | null | undefined;
    tax_code?: string | null | undefined;
    discount_percentage?: number | null | undefined;
    discount_amount?: number | null | undefined;
    total?: number | null | undefined;
    balance?: number | null | undefined;
    deposit?: number | null | undefined;
    customer_memo?: string | null | undefined;
    tracking_category?: DeprecatedLinkedTrackingCategory | null | undefined;
    tracking_categories?: Array<LinkedTrackingCategory | null> | null | undefined;
    line_items?: Array<InvoiceLineItemInput> | undefined;
    billing_address?: Address | undefined;
    shipping_address?: Address | undefined;
    template_id?: string | null | undefined;
    source_document_url?: string | null | undefined;
    payment_allocations?: Array<PaymentAllocation> | null | undefined;
    payment_method?: string | null | undefined;
    channel?: string | null | undefined;
    language?: string | null | undefined;
    accounting_by_row?: boolean | null | undefined;
    bank_account?: BankAccount | undefined;
    ledger_account?: LinkedLedgerAccount | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    row_version?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const InvoiceInput$zodSchema: z.ZodType<InvoiceInput>;
//# sourceMappingURL=invoice.d.ts.map