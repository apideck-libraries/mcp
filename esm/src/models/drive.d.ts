import * as z from "zod";
import { PassThroughBody } from "./passthroughbody.js";
export type Drive = {
    id: string;
    name: string;
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
export declare const Drive$zodSchema: z.ZodType<Drive>;
//# sourceMappingURL=drive.d.ts.map