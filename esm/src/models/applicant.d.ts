import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Address } from "./address.js";
import { CustomFieldUnion } from "./customfieldunion.js";
import { Email } from "./email.js";
import { PassThroughBody } from "./passthroughbody.js";
import { PhoneNumber } from "./phonenumber.js";
/**
 * The gender represents the gender identity of a person.
 */
export declare const ApplicantGender: {
    readonly Male: "male";
    readonly Female: "female";
    readonly Unisex: "unisex";
    readonly Other: "other";
    readonly NotSpecified: "not_specified";
};
/**
 * The gender represents the gender identity of a person.
 */
export type ApplicantGender = OpenEnum<typeof ApplicantGender>;
export declare const ApplicantGender$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    other: "other";
    male: "male";
    female: "female";
    unisex: "unisex";
    not_specified: "not_specified";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * The type of website
 */
export declare const ApplicantType: {
    readonly Primary: "primary";
    readonly Secondary: "secondary";
    readonly Work: "work";
    readonly Personal: "personal";
    readonly Other: "other";
};
/**
 * The type of website
 */
export type ApplicantType = OpenEnum<typeof ApplicantType>;
export declare const ApplicantType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    other: "other";
    primary: "primary";
    secondary: "secondary";
    work: "work";
    personal: "personal";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type ApplicantWebsite = {
    id?: string | null | undefined;
    url: string;
    type?: ApplicantType | null | undefined;
};
export declare const ApplicantWebsite$zodSchema: z.ZodType<ApplicantWebsite>;
export type ApplicantSocialLink = {
    id?: string | null | undefined;
    url: string;
    type?: string | null | undefined;
};
export declare const ApplicantSocialLink$zodSchema: z.ZodType<ApplicantSocialLink>;
export type Applicant = {
    id?: string | undefined;
    name?: string | undefined;
    salutation?: string | null | undefined;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    middle_name?: string | null | undefined;
    initials?: string | null | undefined;
    birthday?: string | null | undefined;
    gender?: ApplicantGender | null | undefined;
    social_security_number?: string | null | undefined;
    type?: string | undefined;
    cover_letter?: string | undefined;
    job_url?: string | null | undefined;
    photo_url?: string | null | undefined;
    headline?: string | undefined;
    title?: string | null | undefined;
    emails?: Array<Email> | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    phone_numbers?: Array<PhoneNumber> | undefined;
    addresses?: Array<Address> | undefined;
    websites?: Array<ApplicantWebsite> | undefined;
    social_links?: Array<ApplicantSocialLink> | undefined;
    stage_id?: string | undefined;
    recruiter_id?: string | undefined;
    coordinator_id?: string | undefined;
    application_ids?: Array<string> | null | undefined;
    applications?: Array<string> | null | undefined;
    followers?: Array<string> | null | undefined;
    sources?: Array<string> | null | undefined;
    source_id?: string | undefined;
    confidential?: boolean | undefined;
    anonymized?: boolean | undefined;
    tags?: Array<string> | null | undefined;
    archived?: boolean | null | undefined;
    last_interaction_at?: string | null | undefined;
    owner_id?: string | null | undefined;
    sourced_by?: string | null | undefined;
    cv_url?: string | undefined;
    record_url?: string | null | undefined;
    rejected_at?: string | null | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    deleted?: boolean | null | undefined;
    deleted_by?: string | null | undefined;
    deleted_at?: string | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const Applicant$zodSchema: z.ZodType<Applicant>;
export type ApplicantInput = {
    name?: string | undefined;
    salutation?: string | null | undefined;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    middle_name?: string | null | undefined;
    initials?: string | null | undefined;
    birthday?: string | null | undefined;
    gender?: ApplicantGender | null | undefined;
    social_security_number?: string | null | undefined;
    type?: string | undefined;
    cover_letter?: string | undefined;
    photo_url?: string | null | undefined;
    headline?: string | undefined;
    title?: string | null | undefined;
    emails?: Array<Email> | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    phone_numbers?: Array<PhoneNumber> | undefined;
    addresses?: Array<Address> | undefined;
    websites?: Array<ApplicantWebsite> | undefined;
    social_links?: Array<ApplicantSocialLink> | undefined;
    stage_id?: string | undefined;
    recruiter_id?: string | undefined;
    coordinator_id?: string | undefined;
    application_ids?: Array<string> | null | undefined;
    applications?: Array<string> | null | undefined;
    followers?: Array<string> | null | undefined;
    sources?: Array<string> | null | undefined;
    confidential?: boolean | undefined;
    anonymized?: boolean | undefined;
    tags?: Array<string> | null | undefined;
    archived?: boolean | null | undefined;
    owner_id?: string | null | undefined;
    record_url?: string | null | undefined;
    deleted?: boolean | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const ApplicantInput$zodSchema: z.ZodType<ApplicantInput>;
//# sourceMappingURL=applicant.d.ts.map