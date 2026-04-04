import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Currency } from "./currency.js";
import { CustomFieldUnion } from "./customfieldunion.js";
import { ExpenseReportLineItem } from "./expensereportlineitem.js";
import { ExpenseReportLineItemInput } from "./expensereportlineiteminput.js";
import { LinkedDepartment } from "./linkeddepartment.js";
import { LinkedDepartmentInput } from "./linkeddepartmentinput.js";
import { LinkedLedgerAccount } from "./linkedledgeraccount.js";
import { LinkedLocation } from "./linkedlocation.js";
import { LinkedLocationInput } from "./linkedlocationinput.js";
import { LinkedSubsidiary } from "./linkedsubsidiary.js";
import { LinkedSubsidiaryInput } from "./linkedsubsidiaryinput.js";
import { LinkedTrackingCategory } from "./linkedtrackingcategory.js";
import { PassThroughBody } from "./passthroughbody.js";
/**
 * The employee who submitted the expense report.
 */
export type ExpenseReportEmployee = {
    id?: string | undefined;
    display_name?: string | null | undefined;
};
export declare const ExpenseReportEmployee$zodSchema: z.ZodType<ExpenseReportEmployee>;
/**
 * The status of the expense report.
 */
export declare const ExpenseReportStatus: {
    readonly Draft: "draft";
    readonly Submitted: "submitted";
    readonly Approved: "approved";
    readonly Reimbursed: "reimbursed";
    readonly Rejected: "rejected";
    readonly Reversed: "reversed";
    readonly Voided: "voided";
};
/**
 * The status of the expense report.
 */
export type ExpenseReportStatus = OpenEnum<typeof ExpenseReportStatus>;
export declare const ExpenseReportStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    rejected: "rejected";
    draft: "draft";
    voided: "voided";
    submitted: "submitted";
    approved: "approved";
    reimbursed: "reimbursed";
    reversed: "reversed";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * The accounting period the expense report is posted to.
 */
export type AccountingPeriod = {
    id?: string | undefined;
    name?: string | null | undefined;
};
export declare const AccountingPeriod$zodSchema: z.ZodType<AccountingPeriod>;
/**
 * The person who approved the expense report.
 */
export type ApprovedBy = {
    id?: string | undefined;
    display_name?: string | null | undefined;
};
export declare const ApprovedBy$zodSchema: z.ZodType<ApprovedBy>;
export type ExpenseReport = {
    id?: string | undefined;
    display_id?: string | null | undefined;
    number?: string | null | undefined;
    title?: string | null | undefined;
    employee: ExpenseReportEmployee;
    status?: ExpenseReportStatus | null | undefined;
    transaction_date: string | null;
    posting_date?: string | null | undefined;
    due_date?: string | null | undefined;
    currency?: Currency | null | undefined;
    currency_rate?: number | null | undefined;
    sub_total?: number | null | undefined;
    total_tax?: number | null | undefined;
    total_amount?: number | null | undefined;
    reimbursable_amount?: number | null | undefined;
    memo?: string | null | undefined;
    department?: LinkedDepartment | null | undefined;
    location?: LinkedLocation | null | undefined;
    account?: LinkedLedgerAccount | null | undefined;
    accounting_period?: AccountingPeriod | null | undefined;
    line_items: Array<ExpenseReportLineItem>;
    subsidiary?: LinkedSubsidiary | null | undefined;
    tracking_categories?: Array<LinkedTrackingCategory | null> | null | undefined;
    tax_inclusive?: boolean | null | undefined;
    approved_by?: ApprovedBy | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
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
export declare const ExpenseReport$zodSchema: z.ZodType<ExpenseReport>;
export type ExpenseReportInput = {
    display_id?: string | null | undefined;
    number?: string | null | undefined;
    title?: string | null | undefined;
    employee: ExpenseReportEmployee;
    status?: ExpenseReportStatus | null | undefined;
    transaction_date: string | null;
    posting_date?: string | null | undefined;
    due_date?: string | null | undefined;
    currency?: Currency | null | undefined;
    currency_rate?: number | null | undefined;
    sub_total?: number | null | undefined;
    total_tax?: number | null | undefined;
    total_amount?: number | null | undefined;
    reimbursable_amount?: number | null | undefined;
    memo?: string | null | undefined;
    department?: LinkedDepartmentInput | null | undefined;
    location?: LinkedLocationInput | null | undefined;
    account?: LinkedLedgerAccount | null | undefined;
    accounting_period?: AccountingPeriod | null | undefined;
    line_items: Array<ExpenseReportLineItemInput>;
    subsidiary?: LinkedSubsidiaryInput | null | undefined;
    tracking_categories?: Array<LinkedTrackingCategory | null> | null | undefined;
    tax_inclusive?: boolean | null | undefined;
    approved_by?: ApprovedBy | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    row_version?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const ExpenseReportInput$zodSchema: z.ZodType<ExpenseReportInput>;
//# sourceMappingURL=expensereport.d.ts.map