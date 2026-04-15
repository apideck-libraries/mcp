import * as z from "zod";
/**
 * The customer this entity is linked to.
 */
export type LinkedCustomer = {
    id?: string | undefined;
    display_id?: string | null | undefined;
    display_name?: string | null | undefined;
    name?: string | undefined;
    company_name?: string | null | undefined;
    email?: string | undefined;
};
export declare const LinkedCustomer$zodSchema: z.ZodType<LinkedCustomer>;
//# sourceMappingURL=linkedcustomer.d.ts.map