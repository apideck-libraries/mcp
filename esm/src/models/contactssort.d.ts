import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { SortDirection } from "./sortdirection.js";
/**
 * The field on which to sort the Contacts
 */
export declare const ContactsSortBy: {
    readonly CreatedAt: "created_at";
    readonly UpdatedAt: "updated_at";
    readonly Name: "name";
    readonly FirstName: "first_name";
    readonly LastName: "last_name";
    readonly Email: "email";
};
/**
 * The field on which to sort the Contacts
 */
export type ContactsSortBy = OpenEnum<typeof ContactsSortBy>;
export declare const ContactsSortBy$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    email: "email";
    name: "name";
    updated_at: "updated_at";
    created_at: "created_at";
    first_name: "first_name";
    last_name: "last_name";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type ContactsSort = {
    by?: ContactsSortBy | undefined;
    direction?: SortDirection | undefined;
};
export declare const ContactsSort$zodSchema: z.ZodType<ContactsSort>;
//# sourceMappingURL=contactssort.d.ts.map