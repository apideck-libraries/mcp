import * as z from "zod";
export type ContactsFilter = {
    name?: string | undefined;
    first_name?: string | undefined;
    last_name?: string | undefined;
    email?: string | undefined;
    phone_number?: string | undefined;
    company_id?: string | undefined;
    owner_id?: string | undefined;
    updated_since?: string | undefined;
    created_since?: string | undefined;
};
export declare const ContactsFilter$zodSchema: z.ZodType<ContactsFilter>;
//# sourceMappingURL=contactsfilter.d.ts.map