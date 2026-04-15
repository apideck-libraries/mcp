import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Address } from "./address.js";
import { Allocation, AllocationInput } from "./allocation.js";
import { Currency } from "./currency.js";
import { CustomFieldUnion } from "./customfieldunion.js";
import { InvoiceLineItem, InvoiceLineItemInput } from "./invoicelineitem.js";
import { LinkedCustomer } from "./linkedcustomer.js";
import { LinkedCustomerInput } from "./linkedcustomerinput.js";
import { LinkedLedgerAccount } from "./linkedledgeraccount.js";
import { LinkedTrackingCategory } from "./linkedtrackingcategory.js";
import { PassThroughBody } from "./passthroughbody.js";
/**
 * Status of credit notes
 */
export declare const CreditNoteStatus: {
    readonly Draft: "draft";
    readonly Authorised: "authorised";
    readonly Posted: "posted";
    readonly PartiallyPaid: "partially_paid";
    readonly Paid: "paid";
    readonly Voided: "voided";
    readonly Deleted: "deleted";
};
/**
 * Status of credit notes
 */
export type CreditNoteStatus = OpenEnum<typeof CreditNoteStatus>;
export declare const CreditNoteStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    draft: "draft";
    authorised: "authorised";
    paid: "paid";
    voided: "voided";
    deleted: "deleted";
    partially_paid: "partially_paid";
    posted: "posted";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * Type of payment
 */
export declare const CreditNoteType: {
    readonly AccountsReceivableCredit: "accounts_receivable_credit";
    readonly AccountsPayableCredit: "accounts_payable_credit";
};
/**
 * Type of payment
 */
export type CreditNoteType = OpenEnum<typeof CreditNoteType>;
export declare const CreditNoteType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    accounts_payable_credit: "accounts_payable_credit";
    accounts_receivable_credit: "accounts_receivable_credit";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type CreditNote = {
    id: string;
    number?: string | null | undefined;
    customer?: LinkedCustomer | null | undefined;
    company_id?: string | null | undefined;
    location_id?: string | null | undefined;
    department_id?: string | null | undefined;
    currency?: Currency | null | undefined;
    currency_rate?: number | null | undefined;
    tax_inclusive?: boolean | null | undefined;
    sub_total?: number | null | undefined;
    total_amount: number;
    total_tax?: number | null | undefined;
    tax_code?: string | null | undefined;
    balance?: number | null | undefined;
    remaining_credit?: number | null | undefined;
    status?: CreditNoteStatus | undefined;
    reference?: string | null | undefined;
    date_issued?: string | undefined;
    date_paid?: string | null | undefined;
    type?: CreditNoteType | undefined;
    account?: LinkedLedgerAccount | null | undefined;
    line_items?: Array<InvoiceLineItem> | undefined;
    allocations?: Array<Allocation> | undefined;
    note?: string | null | undefined;
    terms?: string | null | undefined;
    terms_id?: string | null | undefined;
    billing_address?: Address | undefined;
    shipping_address?: Address | undefined;
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
export declare const CreditNote$zodSchema: z.ZodType<CreditNote>;
export type CreditNoteInput = {
    number?: string | null | undefined;
    customer?: LinkedCustomerInput | null | undefined;
    company_id?: string | null | undefined;
    location_id?: string | null | undefined;
    department_id?: string | null | undefined;
    currency?: Currency | null | undefined;
    currency_rate?: number | null | undefined;
    tax_inclusive?: boolean | null | undefined;
    sub_total?: number | null | undefined;
    total_amount: number;
    total_tax?: number | null | undefined;
    tax_code?: string | null | undefined;
    balance?: number | null | undefined;
    remaining_credit?: number | null | undefined;
    status?: CreditNoteStatus | undefined;
    reference?: string | null | undefined;
    date_issued?: string | undefined;
    date_paid?: string | null | undefined;
    type?: CreditNoteType | undefined;
    account?: LinkedLedgerAccount | null | undefined;
    line_items?: Array<InvoiceLineItemInput> | undefined;
    allocations?: Array<AllocationInput> | undefined;
    note?: string | null | undefined;
    terms?: string | null | undefined;
    terms_id?: string | null | undefined;
    billing_address?: Address | undefined;
    shipping_address?: Address | undefined;
    tracking_categories?: Array<LinkedTrackingCategory | null> | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    row_version?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const CreditNoteInput$zodSchema: z.ZodType<CreditNoteInput>;
//# sourceMappingURL=creditnote.d.ts.map