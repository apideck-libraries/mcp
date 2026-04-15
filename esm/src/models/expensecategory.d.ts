import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { LinkedLedgerAccount } from "./linkedledgeraccount.js";
import { LinkedTaxRate } from "./linkedtaxrate.js";
import { LinkedTaxRateInput } from "./linkedtaxrateinput.js";
import { PassThroughBody } from "./passthroughbody.js";
/**
 * The status of the expense category.
 */
export declare const ExpenseCategoryStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
};
/**
 * The status of the expense category.
 */
export type ExpenseCategoryStatus = OpenEnum<typeof ExpenseCategoryStatus>;
export declare const ExpenseCategoryStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    active: "active";
    inactive: "inactive";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type ExpenseCategory = {
    id?: string | undefined;
    display_id?: string | null | undefined;
    name: string;
    code?: string | null | undefined;
    description?: string | null | undefined;
    status?: ExpenseCategoryStatus | null | undefined;
    account?: LinkedLedgerAccount | null | undefined;
    offset_account?: LinkedLedgerAccount | null | undefined;
    tax_rate?: LinkedTaxRate | undefined;
    rate_required?: boolean | null | undefined;
    default_rate?: number | null | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    downstream_id?: string | null | undefined;
    row_version?: string | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const ExpenseCategory$zodSchema: z.ZodType<ExpenseCategory>;
export type ExpenseCategoryInput = {
    display_id?: string | null | undefined;
    name: string;
    code?: string | null | undefined;
    description?: string | null | undefined;
    status?: ExpenseCategoryStatus | null | undefined;
    account?: LinkedLedgerAccount | null | undefined;
    offset_account?: LinkedLedgerAccount | null | undefined;
    tax_rate?: LinkedTaxRateInput | undefined;
    rate_required?: boolean | null | undefined;
    default_rate?: number | null | undefined;
    row_version?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const ExpenseCategoryInput$zodSchema: z.ZodType<ExpenseCategoryInput>;
//# sourceMappingURL=expensecategory.d.ts.map