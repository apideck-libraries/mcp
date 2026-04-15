import * as z from "zod";
import { PassThroughBody } from "./passthroughbody.js";
export type Department = {
    id?: string | undefined;
    parent_id?: string | null | undefined;
    name?: string | null | undefined;
    code?: string | null | undefined;
    description?: string | null | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const Department$zodSchema: z.ZodType<Department>;
//# sourceMappingURL=department.d.ts.map