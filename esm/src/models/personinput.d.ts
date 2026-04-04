import * as z from "zod";
import { Gender } from "./gender.js";
export type PersonInput = {
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    middle_name?: string | null | undefined;
    gender?: Gender | null | undefined;
    initials?: string | null | undefined;
    birthday?: string | null | undefined;
    deceased_on?: string | null | undefined;
};
export declare const PersonInput$zodSchema: z.ZodType<PersonInput>;
//# sourceMappingURL=personinput.d.ts.map