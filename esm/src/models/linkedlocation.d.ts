import * as z from "zod";
export type LinkedLocation = {
    id?: string | undefined;
    display_id?: string | null | undefined;
    name?: string | null | undefined;
    downstream_id?: string | null | undefined;
};
export declare const LinkedLocation$zodSchema: z.ZodType<LinkedLocation>;
//# sourceMappingURL=linkedlocation.d.ts.map