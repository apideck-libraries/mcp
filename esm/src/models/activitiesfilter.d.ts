import * as z from "zod";
export type ActivitiesFilter = {
    company_id?: string | undefined;
    owner_id?: string | undefined;
    contact_id?: string | undefined;
    updated_since?: string | undefined;
    type?: string | undefined;
};
export declare const ActivitiesFilter$zodSchema: z.ZodType<ActivitiesFilter>;
//# sourceMappingURL=activitiesfilter.d.ts.map