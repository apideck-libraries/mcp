import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Filter by tax rate status
 */
export declare const TaxRatesFilterStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
    readonly Archived: "archived";
};
/**
 * Filter by tax rate status
 */
export type TaxRatesFilterStatus = OpenEnum<typeof TaxRatesFilterStatus>;
export declare const TaxRatesFilterStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    active: "active";
    inactive: "inactive";
    archived: "archived";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type TaxRatesFilter = {
    assets?: boolean | undefined;
    equity?: boolean | undefined;
    expenses?: boolean | undefined;
    liabilities?: boolean | undefined;
    revenue?: boolean | undefined;
    status?: TaxRatesFilterStatus | undefined;
};
export declare const TaxRatesFilter$zodSchema: z.ZodType<TaxRatesFilter>;
//# sourceMappingURL=taxratesfilter.d.ts.map