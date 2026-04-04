import * as z from "zod";
export type Tax = {
    name?: string | null | undefined;
    employer?: boolean | null | undefined;
    amount?: number | null | undefined;
};
export declare const Tax$zodSchema: z.ZodType<Tax>;
//# sourceMappingURL=tax.d.ts.map