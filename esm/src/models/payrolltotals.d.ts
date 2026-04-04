import * as z from "zod";
/**
 * The overview of the payroll totals.
 */
export type PayrollTotals = {
    company_debit?: number | null | undefined;
    tax_debit?: number | null | undefined;
    check_amount?: number | null | undefined;
    net_pay?: number | null | undefined;
    gross_pay?: number | null | undefined;
    employer_taxes?: number | null | undefined;
    employee_taxes?: number | null | undefined;
    employer_benefit_contributions?: number | null | undefined;
    employee_benefit_deductions?: number | null | undefined;
};
export declare const PayrollTotals$zodSchema: z.ZodType<PayrollTotals>;
//# sourceMappingURL=payrolltotals.d.ts.map