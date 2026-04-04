import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { CustomFieldUnion } from "./customfieldunion.js";
import { LinkedInvoiceItem } from "./linkedinvoiceitem.js";
import { LinkedLedgerAccount } from "./linkedledgeraccount.js";
import { LinkedTaxRate } from "./linkedtaxrate.js";
import { LinkedTaxRateInput } from "./linkedtaxrateinput.js";
import { LinkedTrackingCategory } from "./linkedtrackingcategory.js";
import { LinkedWorktag } from "./linkedworktag.js";
/**
 * Item type
 */
export declare const InvoiceLineItemType: {
    readonly SalesItem: "sales_item";
    readonly Discount: "discount";
    readonly Info: "info";
    readonly SubTotal: "sub_total";
    readonly Service: "service";
    readonly Other: "other";
};
/**
 * Item type
 */
export type InvoiceLineItemType = OpenEnum<typeof InvoiceLineItemType>;
export declare const InvoiceLineItemType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    info: "info";
    service: "service";
    other: "other";
    sub_total: "sub_total";
    sales_item: "sales_item";
    discount: "discount";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type InvoiceLineItem = {
    id?: string | null | undefined;
    row_id?: string | undefined;
    code?: string | null | undefined;
    line_number?: number | null | undefined;
    description?: string | null | undefined;
    type?: InvoiceLineItemType | null | undefined;
    tax_amount?: number | null | undefined;
    total_amount?: number | null | undefined;
    quantity?: number | null | undefined;
    unit_price?: number | null | undefined;
    unit_of_measure?: string | null | undefined;
    discount_percentage?: number | null | undefined;
    discount_amount?: number | null | undefined;
    service_date?: string | null | undefined;
    category_id?: string | null | undefined;
    location_id?: string | null | undefined;
    department_id?: string | null | undefined;
    subsidiary_id?: string | null | undefined;
    shipping_id?: string | null | undefined;
    memo?: string | null | undefined;
    prepaid?: boolean | null | undefined;
    item?: LinkedInvoiceItem | undefined;
    tax_applicable_on?: string | null | undefined;
    tax_recoverability?: string | null | undefined;
    tax_method?: string | null | undefined;
    worktags?: Array<LinkedWorktag | null> | undefined;
    tax_rate?: LinkedTaxRate | undefined;
    tracking_categories?: Array<LinkedTrackingCategory | null> | null | undefined;
    ledger_account?: LinkedLedgerAccount | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    row_version?: string | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    created_at?: string | null | undefined;
    updated_at?: string | null | undefined;
};
export declare const InvoiceLineItem$zodSchema: z.ZodType<InvoiceLineItem>;
export type InvoiceLineItemInput = {
    id?: string | null | undefined;
    row_id?: string | undefined;
    code?: string | null | undefined;
    line_number?: number | null | undefined;
    description?: string | null | undefined;
    type?: InvoiceLineItemType | null | undefined;
    tax_amount?: number | null | undefined;
    total_amount?: number | null | undefined;
    quantity?: number | null | undefined;
    unit_price?: number | null | undefined;
    unit_of_measure?: string | null | undefined;
    discount_percentage?: number | null | undefined;
    discount_amount?: number | null | undefined;
    service_date?: string | null | undefined;
    category_id?: string | null | undefined;
    location_id?: string | null | undefined;
    department_id?: string | null | undefined;
    subsidiary_id?: string | null | undefined;
    shipping_id?: string | null | undefined;
    memo?: string | null | undefined;
    prepaid?: boolean | null | undefined;
    item?: LinkedInvoiceItem | undefined;
    tax_applicable_on?: string | null | undefined;
    tax_recoverability?: string | null | undefined;
    tax_method?: string | null | undefined;
    worktags?: Array<LinkedWorktag | null> | undefined;
    tax_rate?: LinkedTaxRateInput | undefined;
    tracking_categories?: Array<LinkedTrackingCategory | null> | null | undefined;
    ledger_account?: LinkedLedgerAccount | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    row_version?: string | null | undefined;
};
export declare const InvoiceLineItemInput$zodSchema: z.ZodType<InvoiceLineItemInput>;
//# sourceMappingURL=invoicelineitem.d.ts.map