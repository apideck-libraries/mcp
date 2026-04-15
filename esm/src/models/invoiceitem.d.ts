import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Currency } from "./currency.js";
import { DeprecatedLinkedTrackingCategory } from "./deprecatedlinkedtrackingcategory.js";
import { LinkedLedgerAccount } from "./linkedledgeraccount.js";
import { LinkedTaxRate } from "./linkedtaxrate.js";
import { LinkedTaxRateInput } from "./linkedtaxrateinput.js";
import { LinkedTrackingCategory } from "./linkedtrackingcategory.js";
import { PassThroughBody } from "./passthroughbody.js";
/**
 * Item type
 */
export declare const InvoiceItemType: {
    readonly Inventory: "inventory";
    readonly NonInventory: "non_inventory";
    readonly Service: "service";
    readonly Description: "description";
    readonly Other: "other";
};
/**
 * Item type
 */
export type InvoiceItemType = OpenEnum<typeof InvoiceItemType>;
export declare const InvoiceItemType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    description: "description";
    service: "service";
    other: "other";
    inventory: "inventory";
    non_inventory: "non_inventory";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type SalesDetails = {
    unit_price?: number | null | undefined;
    unit_of_measure?: string | null | undefined;
    tax_inclusive?: boolean | null | undefined;
    tax_rate?: LinkedTaxRate | undefined;
};
export declare const SalesDetails$zodSchema: z.ZodType<SalesDetails>;
export type PurchaseDetails = {
    unit_price?: number | null | undefined;
    unit_of_measure?: string | null | undefined;
    tax_inclusive?: boolean | null | undefined;
    tax_rate?: LinkedTaxRate | undefined;
};
export declare const PurchaseDetails$zodSchema: z.ZodType<PurchaseDetails>;
export type InvoiceItem = {
    id?: string | undefined;
    name?: string | null | undefined;
    description?: string | null | undefined;
    display_id?: string | null | undefined;
    code?: string | null | undefined;
    sold?: boolean | null | undefined;
    purchased?: boolean | null | undefined;
    tracked?: boolean | null | undefined;
    taxable?: boolean | null | undefined;
    inventory_date?: string | null | undefined;
    type?: InvoiceItemType | null | undefined;
    sales_details?: SalesDetails | undefined;
    purchase_details?: PurchaseDetails | undefined;
    quantity?: number | null | undefined;
    unit_price?: number | null | undefined;
    currency?: Currency | null | undefined;
    asset_account?: LinkedLedgerAccount | null | undefined;
    income_account?: LinkedLedgerAccount | null | undefined;
    expense_account?: LinkedLedgerAccount | null | undefined;
    tracking_category?: DeprecatedLinkedTrackingCategory | null | undefined;
    tracking_categories?: Array<LinkedTrackingCategory | null> | null | undefined;
    active?: boolean | null | undefined;
    department_id?: string | null | undefined;
    location_id?: string | null | undefined;
    subsidiary_id?: string | null | undefined;
    category_id?: string | null | undefined;
    tax_schedule_id?: string | null | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    row_version?: string | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const InvoiceItem$zodSchema: z.ZodType<InvoiceItem>;
export type SalesDetailsInput = {
    unit_price?: number | null | undefined;
    unit_of_measure?: string | null | undefined;
    tax_inclusive?: boolean | null | undefined;
    tax_rate?: LinkedTaxRateInput | undefined;
};
export declare const SalesDetailsInput$zodSchema: z.ZodType<SalesDetailsInput>;
export type PurchaseDetailsInput = {
    unit_price?: number | null | undefined;
    unit_of_measure?: string | null | undefined;
    tax_inclusive?: boolean | null | undefined;
    tax_rate?: LinkedTaxRateInput | undefined;
};
export declare const PurchaseDetailsInput$zodSchema: z.ZodType<PurchaseDetailsInput>;
export type InvoiceItemInput = {
    name?: string | null | undefined;
    description?: string | null | undefined;
    display_id?: string | null | undefined;
    code?: string | null | undefined;
    sold?: boolean | null | undefined;
    purchased?: boolean | null | undefined;
    tracked?: boolean | null | undefined;
    taxable?: boolean | null | undefined;
    inventory_date?: string | null | undefined;
    type?: InvoiceItemType | null | undefined;
    sales_details?: SalesDetailsInput | undefined;
    purchase_details?: PurchaseDetailsInput | undefined;
    quantity?: number | null | undefined;
    unit_price?: number | null | undefined;
    currency?: Currency | null | undefined;
    asset_account?: LinkedLedgerAccount | null | undefined;
    income_account?: LinkedLedgerAccount | null | undefined;
    expense_account?: LinkedLedgerAccount | null | undefined;
    tracking_category?: DeprecatedLinkedTrackingCategory | null | undefined;
    tracking_categories?: Array<LinkedTrackingCategory | null> | null | undefined;
    active?: boolean | null | undefined;
    department_id?: string | null | undefined;
    location_id?: string | null | undefined;
    subsidiary_id?: string | null | undefined;
    category_id?: string | null | undefined;
    tax_schedule_id?: string | null | undefined;
    row_version?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const InvoiceItemInput$zodSchema: z.ZodType<InvoiceItemInput>;
//# sourceMappingURL=invoiceitem.d.ts.map