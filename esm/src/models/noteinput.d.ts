import * as z from "zod";
import { PassThroughBody } from "./passthroughbody.js";
export type NoteInput = {
    title?: string | null | undefined;
    content?: string | null | undefined;
    owner_id?: string | null | undefined;
    contact_id?: string | null | undefined;
    company_id?: string | null | undefined;
    opportunity_id?: string | null | undefined;
    activity_id?: string | null | undefined;
    lead_id?: string | null | undefined;
    active?: boolean | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const NoteInput$zodSchema: z.ZodType<NoteInput>;
//# sourceMappingURL=noteinput.d.ts.map