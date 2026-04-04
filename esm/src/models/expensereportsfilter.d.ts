import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
export declare const ExpenseReportsFilterStatus: {
    readonly Draft: "draft";
    readonly Submitted: "submitted";
    readonly Approved: "approved";
    readonly Reimbursed: "reimbursed";
    readonly Rejected: "rejected";
    readonly Reversed: "reversed";
    readonly Voided: "voided";
};
export type ExpenseReportsFilterStatus = OpenEnum<typeof ExpenseReportsFilterStatus>;
export declare const ExpenseReportsFilterStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    rejected: "rejected";
    draft: "draft";
    voided: "voided";
    submitted: "submitted";
    approved: "approved";
    reimbursed: "reimbursed";
    reversed: "reversed";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type ExpenseReportsFilter = {
    updated_since?: string | undefined;
    status?: ExpenseReportsFilterStatus | undefined;
    employee_id?: string | undefined;
};
export declare const ExpenseReportsFilter$zodSchema: z.ZodType<ExpenseReportsFilter>;
//# sourceMappingURL=expensereportsfilter.d.ts.map