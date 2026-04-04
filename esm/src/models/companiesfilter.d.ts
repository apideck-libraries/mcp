import * as z from "zod";
export type CompaniesFilter = {
    name?: string | undefined;
    updated_since?: string | undefined;
    created_since?: string | undefined;
};
export declare const CompaniesFilter$zodSchema: z.ZodType<CompaniesFilter>;
//# sourceMappingURL=companiesfilter.d.ts.map