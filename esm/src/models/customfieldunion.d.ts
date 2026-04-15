import * as z from "zod";
export type CustomFieldValue3 = string | number | boolean | {
    [k: string]: any;
};
export declare const CustomFieldValue3$zodSchema: z.ZodType<CustomFieldValue3>;
export type CustomFieldValue4 = string | number | boolean | {
    [k: string]: any;
} | Array<string | number | boolean | {
    [k: string]: any;
} | null>;
export declare const CustomFieldValue4$zodSchema: z.ZodType<CustomFieldValue4>;
export type CustomField2 = {
    id?: string | null | undefined;
    name: string | null;
    description?: string | null | undefined;
    value?: string | number | boolean | {
        [k: string]: any;
    } | Array<string | number | boolean | {
        [k: string]: any;
    } | null> | null | undefined;
};
export declare const CustomField2$zodSchema: z.ZodType<CustomField2>;
export type CustomFieldValue1 = string | number | boolean | {
    [k: string]: any;
};
export declare const CustomFieldValue1$zodSchema: z.ZodType<CustomFieldValue1>;
export type CustomFieldValue2 = string | number | boolean | {
    [k: string]: any;
} | Array<string | number | boolean | {
    [k: string]: any;
} | null>;
export declare const CustomFieldValue2$zodSchema: z.ZodType<CustomFieldValue2>;
export type CustomField1 = {
    id: string | null;
    name?: string | null | undefined;
    description?: string | null | undefined;
    value?: string | number | boolean | {
        [k: string]: any;
    } | Array<string | number | boolean | {
        [k: string]: any;
    } | null> | null | undefined;
};
export declare const CustomField1$zodSchema: z.ZodType<CustomField1>;
export type CustomFieldUnion = CustomField1 | CustomField2;
export declare const CustomFieldUnion$zodSchema: z.ZodType<CustomFieldUnion>;
//# sourceMappingURL=customfieldunion.d.ts.map