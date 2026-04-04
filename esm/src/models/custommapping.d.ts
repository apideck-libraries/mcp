import * as z from "zod";
export type CustomMapping = {
    id?: string | undefined;
    label?: string | undefined;
    description?: string | null | undefined;
    value?: string | undefined;
    key?: string | undefined;
    required?: boolean | undefined;
    custom_field?: boolean | undefined;
    consumer_id?: string | null | undefined;
    example?: string | null | undefined;
};
export declare const CustomMapping$zodSchema: z.ZodType<CustomMapping>;
//# sourceMappingURL=custommapping.d.ts.map