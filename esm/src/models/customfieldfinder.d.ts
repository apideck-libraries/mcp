import * as z from "zod";
export type CustomFieldFinder = {
    id?: string | undefined;
    name?: string | null | undefined;
    description?: string | null | undefined;
    value?: any | undefined;
    finder?: string | undefined;
};
export declare const CustomFieldFinder$zodSchema: z.ZodType<CustomFieldFinder>;
//# sourceMappingURL=customfieldfinder.d.ts.map