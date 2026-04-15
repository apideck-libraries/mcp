import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { SimpleFormFieldOption } from "./simpleformfieldoption.js";
export declare const FormFieldOptionGroupOptionType: {
    readonly Group: "group";
};
export type FormFieldOptionGroupOptionType = OpenEnum<typeof FormFieldOptionGroupOptionType>;
export declare const FormFieldOptionGroupOptionType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    group: "group";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type FormFieldOptionGroup = {
    id?: string | undefined;
    label: string;
    options: Array<SimpleFormFieldOption>;
    option_type: FormFieldOptionGroupOptionType;
};
export declare const FormFieldOptionGroup$zodSchema: z.ZodType<FormFieldOptionGroup>;
//# sourceMappingURL=formfieldoptiongroup.d.ts.map