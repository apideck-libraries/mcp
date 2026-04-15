import * as z from "zod";
/**
 * The expense category this entity is linked to.
 */
export type LinkedExpenseCategory = {
    id?: string | undefined;
    downstream_id?: string | null | undefined;
    display_id?: string | null | undefined;
    name?: string | null | undefined;
};
export declare const LinkedExpenseCategory$zodSchema: z.ZodType<LinkedExpenseCategory>;
//# sourceMappingURL=linkedexpensecategory.d.ts.map