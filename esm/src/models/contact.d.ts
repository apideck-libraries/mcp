import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Address } from "./address.js";
import { CustomFieldUnion } from "./customfieldunion.js";
import { Email } from "./email.js";
import { PassThroughBody } from "./passthroughbody.js";
import { PhoneNumber } from "./phonenumber.js";
import { SocialLink } from "./sociallink.js";
import { Website } from "./website.js";
/**
 * The type of the contact.
 */
export declare const ContactType: {
    readonly Customer: "customer";
    readonly Supplier: "supplier";
    readonly Employee: "employee";
    readonly Personal: "personal";
};
/**
 * The type of the contact.
 */
export type ContactType = OpenEnum<typeof ContactType>;
export declare const ContactType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    supplier: "supplier";
    customer: "customer";
    personal: "personal";
    employee: "employee";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * The gender of the contact.
 */
export declare const ContactGender: {
    readonly Male: "male";
    readonly Female: "female";
    readonly Unisex: "unisex";
};
/**
 * The gender of the contact.
 */
export type ContactGender = OpenEnum<typeof ContactGender>;
export declare const ContactGender$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    male: "male";
    female: "female";
    unisex: "unisex";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type Contact = {
    id?: string | undefined;
    name?: string | null | undefined;
    owner_id?: string | null | undefined;
    type?: ContactType | null | undefined;
    company_id?: string | null | undefined;
    company_name?: string | null | undefined;
    lead_id?: string | null | undefined;
    first_name?: string | null | undefined;
    middle_name?: string | null | undefined;
    last_name?: string | null | undefined;
    prefix?: string | null | undefined;
    suffix?: string | null | undefined;
    title?: string | null | undefined;
    department?: string | null | undefined;
    language?: string | null | undefined;
    gender?: ContactGender | null | undefined;
    birthday?: string | null | undefined;
    image?: string | null | undefined;
    photo_url?: string | null | undefined;
    lead_source?: string | null | undefined;
    fax?: string | null | undefined;
    description?: string | null | undefined;
    current_balance?: number | null | undefined;
    status?: string | null | undefined;
    active?: boolean | null | undefined;
    websites?: Array<Website> | undefined;
    addresses?: Array<Address> | undefined;
    social_links?: Array<SocialLink> | undefined;
    phone_numbers?: Array<PhoneNumber> | undefined;
    emails?: Array<Email> | undefined;
    email_domain?: string | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | null | undefined;
    tags?: Array<string> | null | undefined;
    first_call_at?: string | null | undefined;
    first_email_at?: string | null | undefined;
    last_activity_at?: string | null | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    opportunity_ids?: Array<string> | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const Contact$zodSchema: z.ZodType<Contact>;
export type ContactInput = {
    name?: string | null | undefined;
    owner_id?: string | null | undefined;
    type?: ContactType | null | undefined;
    company_id?: string | null | undefined;
    company_name?: string | null | undefined;
    lead_id?: string | null | undefined;
    first_name?: string | null | undefined;
    middle_name?: string | null | undefined;
    last_name?: string | null | undefined;
    prefix?: string | null | undefined;
    suffix?: string | null | undefined;
    title?: string | null | undefined;
    department?: string | null | undefined;
    language?: string | null | undefined;
    gender?: ContactGender | null | undefined;
    birthday?: string | null | undefined;
    image?: string | null | undefined;
    photo_url?: string | null | undefined;
    lead_source?: string | null | undefined;
    fax?: string | null | undefined;
    description?: string | null | undefined;
    current_balance?: number | null | undefined;
    status?: string | null | undefined;
    active?: boolean | null | undefined;
    websites?: Array<Website> | undefined;
    addresses?: Array<Address> | undefined;
    social_links?: Array<SocialLink> | undefined;
    phone_numbers?: Array<PhoneNumber> | undefined;
    emails?: Array<Email> | undefined;
    email_domain?: string | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | null | undefined;
    tags?: Array<string> | null | undefined;
    opportunity_ids?: Array<string> | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const ContactInput$zodSchema: z.ZodType<ContactInput>;
//# sourceMappingURL=contact.d.ts.map