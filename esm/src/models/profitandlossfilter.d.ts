import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * The accounting method used for the report: cash or accrual.
 */
export declare const ProfitAndLossFilterAccountingMethod: {
    readonly Cash: "cash";
    readonly Accrual: "accrual";
};
/**
 * The accounting method used for the report: cash or accrual.
 */
export type ProfitAndLossFilterAccountingMethod = OpenEnum<typeof ProfitAndLossFilterAccountingMethod>;
export declare const ProfitAndLossFilterAccountingMethod$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    cash: "cash";
    accrual: "accrual";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type ProfitAndLossFilter = {
    customer_id?: string | undefined;
    start_date?: string | undefined;
    end_date?: string | undefined;
    location_id?: string | undefined;
    accounting_method?: ProfitAndLossFilterAccountingMethod | undefined;
};
export declare const ProfitAndLossFilter$zodSchema: z.ZodType<ProfitAndLossFilter>;
//# sourceMappingURL=profitandlossfilter.d.ts.map