import * as z from "zod";
import { PassThroughBody } from "./passthroughbody.js";
export type Note = {
    id?: string | undefined;
    title?: string | null | undefined;
    content?: string | null | undefined;
    owner_id?: string | null | undefined;
    contact_id?: string | null | undefined;
    company_id?: string | null | undefined;
    opportunity_id?: string | null | undefined;
    activity_id?: string | null | undefined;
    lead_id?: string | null | undefined;
    active?: boolean | null | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const Note$zodSchema: z.ZodType<Note>;
//# sourceMappingURL=note.d.ts.map