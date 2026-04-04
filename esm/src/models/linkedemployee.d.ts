import * as z from "zod";
/**
 * The employee this entity is linked to.
 */
export type LinkedEmployee = {
    id?: string | undefined;
    display_id?: string | null | undefined;
    display_name?: string | null | undefined;
};
export declare const LinkedEmployee$zodSchema: z.ZodType<LinkedEmployee>;
//# sourceMappingURL=linkedemployee.d.ts.map