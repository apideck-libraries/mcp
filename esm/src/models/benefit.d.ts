import * as z from "zod";
export type Benefit = {
    name?: string | null | undefined;
    employee_deduction?: number | null | undefined;
    employer_contribution?: number | null | undefined;
};
export declare const Benefit$zodSchema: z.ZodType<Benefit>;
//# sourceMappingURL=benefit.d.ts.map