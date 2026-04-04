import * as z from "zod";
import { FormFieldOptionGroup } from "./formfieldoptiongroup.js";
import { SimpleFormFieldOption } from "./simpleformfieldoption.js";
export type FormFieldOption = (FormFieldOptionGroup & {
    option_type: "group";
}) | (SimpleFormFieldOption & {
    option_type: "simple";
});
export declare const FormFieldOption$zodSchema: z.ZodType<FormFieldOption>;
//# sourceMappingURL=formfieldoption.d.ts.map