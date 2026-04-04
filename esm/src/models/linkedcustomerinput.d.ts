import * as z from "zod";
/**
 * The customer this entity is linked to.
 */
export type LinkedCustomerInput = {
    id?: string | undefined;
    display_name?: string | null | undefined;
    name?: string | undefined;
    email?: string | undefined;
};
export declare const LinkedCustomerInput$zodSchema: z.ZodType<LinkedCustomerInput>;
//# sourceMappingURL=linkedcustomerinput.d.ts.map