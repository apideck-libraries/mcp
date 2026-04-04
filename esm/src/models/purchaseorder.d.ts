import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Address } from "./address.js";
import { BankAccount } from "./bankaccount.js";
import { Currency } from "./currency.js";
import { CustomFieldUnion } from "./customfieldunion.js";
import { InvoiceLineItem, InvoiceLineItemInput } from "./invoicelineitem.js";
import { LinkedLedgerAccount } from "./linkedledgeraccount.js";
import { LinkedSupplier } from "./linkedsupplier.js";
import { LinkedSupplierInput } from "./linkedsupplierinput.js";
import { LinkedTrackingCategory } from "./linkedtrackingcategory.js";
import { PassThroughBody } from "./passthroughbody.js";
export declare const PurchaseOrderStatus: {
    readonly Draft: "draft";
    readonly Open: "open";
    readonly Closed: "closed";
    readonly Deleted: "deleted";
    readonly Billed: "billed";
    readonly Other: "other";
};
export type PurchaseOrderStatus = OpenEnum<typeof PurchaseOrderStatus>;
export declare const PurchaseOrderStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    other: "other";
    closed: "closed";
    draft: "draft";
    deleted: "deleted";
    billed: "billed";
    open: "open";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * Type of amortization
 */
export declare const PurchaseOrderAmortizationType: {
    readonly Manual: "manual";
    readonly Receipt: "receipt";
    readonly Schedule: "schedule";
    readonly Other: "other";
};
/**
 * Type of amortization
 */
export type PurchaseOrderAmortizationType = OpenEnum<typeof PurchaseOrderAmortizationType>;
export declare const PurchaseOrderAmortizationType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    manual: "manual";
    other: "other";
    receipt: "receipt";
    schedule: "schedule";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type PurchaseOrder = {
    id?: string | undefined;
    downstream_id?: string | null | undefined;
    display_id?: string | null | undefined;
    po_number?: string | null | undefined;
    reference?: string | null | undefined;
    supplier?: LinkedSupplier | null | undefined;
    subsidiary_id?: string | null | undefined;
    company_id?: string | null | undefined;
    location_id?: string | null | undefined;
    department_id?: string | null | undefined;
    status?: PurchaseOrderStatus | null | undefined;
    issued_date?: string | null | undefined;
    delivery_date?: string | null | undefined;
    expected_arrival_date?: string | null | undefined;
    currency?: Currency | null | undefined;
    currency_rate?: number | null | undefined;
    sub_total?: number | null | undefined;
    total_tax?: number | null | undefined;
    total?: number | null | undefined;
    tax_inclusive?: boolean | null | undefined;
    line_items?: Array<InvoiceLineItem> | undefined;
    billing_address?: Address | undefined;
    shipping_address?: Address | undefined;
    ledger_account?: LinkedLedgerAccount | null | undefined;
    template_id?: string | null | undefined;
    discount_percentage?: number | null | undefined;
    bank_account?: BankAccount | undefined;
    accounting_by_row?: boolean | null | undefined;
    due_date?: string | null | undefined;
    payment_method?: string | null | undefined;
    terms?: string | null | undefined;
    terms_id?: string | null | undefined;
    amortization_type?: PurchaseOrderAmortizationType | null | undefined;
    tax_code?: string | null | undefined;
    tax_method?: string | null | undefined;
    issued_method?: string | null | undefined;
    issued_email?: string | null | undefined;
    channel?: string | null | undefined;
    memo?: string | null | undefined;
    notes?: string | null | undefined;
    tracking_categories?: Array<LinkedTrackingCategory | null> | null | undefined;
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
export declare const PurchaseOrder$zodSchema: z.ZodType<PurchaseOrder>;
export type PurchaseOrderInput = {
    display_id?: string | null | undefined;
    po_number?: string | null | undefined;
    reference?: string | null | undefined;
    supplier?: LinkedSupplierInput | null | undefined;
    subsidiary_id?: string | null | undefined;
    company_id?: string | null | undefined;
    location_id?: string | null | undefined;
    department_id?: string | null | undefined;
    status?: PurchaseOrderStatus | null | undefined;
    issued_date?: string | null | undefined;
    delivery_date?: string | null | undefined;
    expected_arrival_date?: string | null | undefined;
    currency?: Currency | null | undefined;
    currency_rate?: number | null | undefined;
    sub_total?: number | null | undefined;
    total_tax?: number | null | undefined;
    total?: number | null | undefined;
    tax_inclusive?: boolean | null | undefined;
    line_items?: Array<InvoiceLineItemInput> | undefined;
    billing_address?: Address | undefined;
    shipping_address?: Address | undefined;
    ledger_account?: LinkedLedgerAccount | null | undefined;
    template_id?: string | null | undefined;
    discount_percentage?: number | null | undefined;
    bank_account?: BankAccount | undefined;
    accounting_by_row?: boolean | null | undefined;
    due_date?: string | null | undefined;
    payment_method?: string | null | undefined;
    terms?: string | null | undefined;
    terms_id?: string | null | undefined;
    amortization_type?: PurchaseOrderAmortizationType | null | undefined;
    tax_code?: string | null | undefined;
    tax_method?: string | null | undefined;
    issued_method?: string | null | undefined;
    issued_email?: string | null | undefined;
    channel?: string | null | undefined;
    memo?: string | null | undefined;
    notes?: string | null | undefined;
    tracking_categories?: Array<LinkedTrackingCategory | null> | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    row_version?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const PurchaseOrderInput$zodSchema: z.ZodType<PurchaseOrderInput>;
//# sourceMappingURL=purchaseorder.d.ts.map