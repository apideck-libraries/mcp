import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { DeprecatedLinkedTrackingCategory } from "./deprecatedlinkedtrackingcategory.js";
import { LinkedCustomer } from "./linkedcustomer.js";
import { LinkedCustomerInput } from "./linkedcustomerinput.js";
import { LinkedEmployee } from "./linkedemployee.js";
import { LinkedLedgerAccount } from "./linkedledgeraccount.js";
import { LinkedSupplier } from "./linkedsupplier.js";
import { LinkedSupplierInput } from "./linkedsupplierinput.js";
import { LinkedTaxRate } from "./linkedtaxrate.js";
import { LinkedTaxRateInput } from "./linkedtaxrateinput.js";
import { LinkedTrackingCategory } from "./linkedtrackingcategory.js";
import { LinkedWorktag } from "./linkedworktag.js";
/**
 * Debit entries are considered positive, and credit entries are considered negative.
 */
export declare const JournalEntryLineItemType: {
    readonly Debit: "debit";
    readonly Credit: "credit";
};
/**
 * Debit entries are considered positive, and credit entries are considered negative.
 */
export type JournalEntryLineItemType = OpenEnum<typeof JournalEntryLineItemType>;
export declare const JournalEntryLineItemType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    credit: "credit";
    debit: "debit";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * The tax applicability of this line item. Overrides the root-level tax_type for this line.
 */
export declare const TaxType: {
    readonly Sales: "sales";
    readonly Purchase: "purchase";
};
/**
 * The tax applicability of this line item. Overrides the root-level tax_type for this line.
 */
export type TaxType = OpenEnum<typeof TaxType>;
export declare const TaxType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    purchase: "purchase";
    sales: "sales";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type JournalEntryLineItem = {
    id?: string | undefined;
    description?: string | null | undefined;
    tax_amount?: number | null | undefined;
    sub_total?: number | null | undefined;
    total_amount?: number | null | undefined;
    type: JournalEntryLineItemType | null;
    tax_rate?: LinkedTaxRate | undefined;
    tax_type?: TaxType | null | undefined;
    tracking_category?: DeprecatedLinkedTrackingCategory | null | undefined;
    tracking_categories?: Array<LinkedTrackingCategory | null> | null | undefined;
    ledger_account: LinkedLedgerAccount | null;
    customer?: LinkedCustomer | null | undefined;
    supplier?: LinkedSupplier | null | undefined;
    employee?: LinkedEmployee | null | undefined;
    department_id?: string | null | undefined;
    location_id?: string | null | undefined;
    line_number?: number | null | undefined;
    worktags?: Array<LinkedWorktag | null> | undefined;
};
export declare const JournalEntryLineItem$zodSchema: z.ZodType<JournalEntryLineItem>;
export type JournalEntryLineItemInput = {
    description?: string | null | undefined;
    tax_amount?: number | null | undefined;
    sub_total?: number | null | undefined;
    total_amount?: number | null | undefined;
    type: JournalEntryLineItemType | null;
    tax_rate?: LinkedTaxRateInput | undefined;
    tax_type?: TaxType | null | undefined;
    tracking_category?: DeprecatedLinkedTrackingCategory | null | undefined;
    tracking_categories?: Array<LinkedTrackingCategory | null> | null | undefined;
    ledger_account: LinkedLedgerAccount | null;
    customer?: LinkedCustomerInput | null | undefined;
    supplier?: LinkedSupplierInput | null | undefined;
    employee?: LinkedEmployee | null | undefined;
    department_id?: string | null | undefined;
    location_id?: string | null | undefined;
    line_number?: number | null | undefined;
    worktags?: Array<LinkedWorktag | null> | undefined;
};
export declare const JournalEntryLineItemInput$zodSchema: z.ZodType<JournalEntryLineItemInput>;
//# sourceMappingURL=journalentrylineitem.d.ts.map