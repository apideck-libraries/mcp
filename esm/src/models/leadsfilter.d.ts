import * as z from "zod";
export type LeadsFilter = {
    name?: string | undefined;
    first_name?: string | undefined;
    last_name?: string | undefined;
    email?: string | undefined;
    phone_number?: string | undefined;
};
export declare const LeadsFilter$zodSchema: z.ZodType<LeadsFilter>;
//# sourceMappingURL=leadsfilter.d.ts.map