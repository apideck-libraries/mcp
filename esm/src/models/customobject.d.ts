import * as z from "zod";
import { PassThroughBody } from "./passthroughbody.js";
export type CustomObjectField = {
    name?: string | undefined;
    value?: string | undefined;
};
export declare const CustomObjectField$zodSchema: z.ZodType<CustomObjectField>;
export type CustomObject = {
    id?: string | undefined;
    owner_id?: string | undefined;
    name?: string | null | undefined;
    fields?: Array<CustomObjectField> | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const CustomObject$zodSchema: z.ZodType<CustomObject>;
export type CustomObjectInput = {
    name?: string | null | undefined;
    fields?: Array<CustomObjectField> | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const CustomObjectInput$zodSchema: z.ZodType<CustomObjectInput>;
//# sourceMappingURL=customobject.d.ts.map