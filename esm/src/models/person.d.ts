import * as z from "zod";
import { Gender } from "./gender.js";
export type Person = {
    id?: string | null | undefined;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    middle_name?: string | null | undefined;
    gender?: Gender | null | undefined;
    initials?: string | null | undefined;
    birthday?: string | null | undefined;
    deceased_on?: string | null | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const Person$zodSchema: z.ZodType<Person>;
//# sourceMappingURL=person.d.ts.map