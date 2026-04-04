import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { PassThroughBody } from "./passthroughbody.js";
export declare const CustomObjectSchemaType: {
    readonly String: "string";
    readonly Number: "number";
    readonly Integer: "integer";
    readonly Boolean: "boolean";
    readonly Date: "date";
    readonly Datetime: "datetime";
    readonly Currency: "currency";
    readonly Email: "email";
    readonly Phone: "phone";
    readonly Reference: "reference";
    readonly Select: "select";
    readonly Multiselect: "multiselect";
};
export type CustomObjectSchemaType = OpenEnum<typeof CustomObjectSchemaType>;
export declare const CustomObjectSchemaType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    string: "string";
    number: "number";
    boolean: "boolean";
    email: "email";
    date: "date";
    integer: "integer";
    currency: "currency";
    datetime: "datetime";
    reference: "reference";
    select: "select";
    phone: "phone";
    multiselect: "multiselect";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type CustomObjectSchemaOption = {
    value?: string | undefined;
    label?: string | undefined;
};
export declare const CustomObjectSchemaOption$zodSchema: z.ZodType<CustomObjectSchemaOption>;
export type CustomObjectSchemaField = {
    id?: string | undefined;
    name?: string | undefined;
    description?: string | null | undefined;
    type?: CustomObjectSchemaType | undefined;
    required?: boolean | undefined;
    options?: Array<CustomObjectSchemaOption> | null | undefined;
    default_value?: string | null | undefined;
};
export declare const CustomObjectSchemaField$zodSchema: z.ZodType<CustomObjectSchemaField>;
export type CustomObjectSchema = {
    id?: string | undefined;
    name?: string | null | undefined;
    description?: string | null | undefined;
    fields?: Array<CustomObjectSchemaField> | undefined;
    visible?: boolean | null | undefined;
    active?: boolean | null | undefined;
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const CustomObjectSchema$zodSchema: z.ZodType<CustomObjectSchema>;
export type CustomObjectSchemaInput = {
    name?: string | null | undefined;
    description?: string | null | undefined;
    fields?: Array<CustomObjectSchemaField> | undefined;
    visible?: boolean | null | undefined;
    active?: boolean | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const CustomObjectSchemaInput$zodSchema: z.ZodType<CustomObjectSchemaInput>;
//# sourceMappingURL=customobjectschema.d.ts.map