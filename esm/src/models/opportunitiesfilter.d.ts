import * as z from "zod";
export type OpportunitiesFilter = {
    title?: string | undefined;
    status?: string | undefined;
    monetary_amount?: number | undefined;
    win_probability?: number | undefined;
    company_id?: string | undefined;
    owner_id?: string | undefined;
    primary_contact_id?: string | undefined;
};
export declare const OpportunitiesFilter$zodSchema: z.ZodType<OpportunitiesFilter>;
//# sourceMappingURL=opportunitiesfilter.d.ts.map