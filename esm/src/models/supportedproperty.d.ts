import * as z from "zod";
export type SupportedProperty = {
    unified_property?: string | undefined;
    child_properties?: Array<SupportedProperty> | undefined;
};
export declare const SupportedProperty$zodSchema: z.ZodType<SupportedProperty>;
//# sourceMappingURL=supportedproperty.d.ts.map