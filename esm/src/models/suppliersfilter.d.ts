import * as z from "zod";
export type SuppliersFilter = {
    company_name?: string | undefined;
    display_name?: string | undefined;
    first_name?: string | undefined;
    last_name?: string | undefined;
    email?: string | undefined;
    updated_since?: string | undefined;
};
export declare const SuppliersFilter$zodSchema: z.ZodType<SuppliersFilter>;
//# sourceMappingURL=suppliersfilter.d.ts.map