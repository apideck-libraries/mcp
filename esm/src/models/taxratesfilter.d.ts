import * as z from "zod";
export type TaxRatesFilter = {
    assets?: boolean | undefined;
    equity?: boolean | undefined;
    expenses?: boolean | undefined;
    liabilities?: boolean | undefined;
    revenue?: boolean | undefined;
};
export declare const TaxRatesFilter$zodSchema: z.ZodType<TaxRatesFilter>;
//# sourceMappingURL=taxratesfilter.d.ts.map