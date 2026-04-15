import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
export type SimpleFormFieldOptionValue1 = string | number | number;
export declare const SimpleFormFieldOptionValue1$zodSchema: z.ZodType<SimpleFormFieldOptionValue1>;
export type SimpleFormFieldOptionValue2 = string | number | number | boolean | Array<string | number | number>;
export declare const SimpleFormFieldOptionValue2$zodSchema: z.ZodType<SimpleFormFieldOptionValue2>;
export declare const SimpleFormFieldOptionOptionType: {
    readonly Simple: "simple";
};
export type SimpleFormFieldOptionOptionType = OpenEnum<typeof SimpleFormFieldOptionOptionType>;
export declare const SimpleFormFieldOptionOptionType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    simple: "simple";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type SimpleFormFieldOption = {
    label: string;
    value?: string | number | number | boolean | Array<string | number | number> | undefined;
    option_type: SimpleFormFieldOptionOptionType;
};
export declare const SimpleFormFieldOption$zodSchema: z.ZodType<SimpleFormFieldOption>;
//# sourceMappingURL=simpleformfieldoption.d.ts.map