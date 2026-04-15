import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * The type of period to include in the resource: month, quarter, year.
 */
export declare const PeriodType: {
    readonly Month: "month";
    readonly Quarter: "quarter";
    readonly Year: "year";
};
/**
 * The type of period to include in the resource: month, quarter, year.
 */
export type PeriodType = OpenEnum<typeof PeriodType>;
export declare const PeriodType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    month: "month";
    quarter: "quarter";
    year: "year";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * The accounting method used for the report: cash or accrual.
 */
export declare const BalanceSheetFilterAccountingMethod: {
    readonly Cash: "cash";
    readonly Accrual: "accrual";
};
/**
 * The accounting method used for the report: cash or accrual.
 */
export type BalanceSheetFilterAccountingMethod = OpenEnum<typeof BalanceSheetFilterAccountingMethod>;
export declare const BalanceSheetFilterAccountingMethod$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    cash: "cash";
    accrual: "accrual";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type BalanceSheetFilter = {
    start_date?: string | undefined;
    end_date?: string | undefined;
    period_count?: number | undefined;
    period_type?: PeriodType | undefined;
    location_id?: string | undefined;
    accounting_method?: BalanceSheetFilterAccountingMethod | undefined;
};
export declare const BalanceSheetFilter$zodSchema: z.ZodType<BalanceSheetFilter>;
//# sourceMappingURL=balancesheetfilter.d.ts.map