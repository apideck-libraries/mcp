import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Address } from "./address.js";
import { BankAccount2 } from "./bankaccount2.js";
import { CustomFieldUnion } from "./customfieldunion.js";
import { Email } from "./email.js";
import { EmployeeCompensation, EmployeeCompensationInput } from "./employeecompensation.js";
import { EmployeeJob, EmployeeJobInput } from "./employeejob.js";
import { EmploymentStatus } from "./employmentstatus.js";
import { Gender } from "./gender.js";
import { PassThroughBody } from "./passthroughbody.js";
import { Person } from "./person.js";
import { PersonInput } from "./personinput.js";
import { PhoneNumber } from "./phonenumber.js";
import { SocialLink } from "./sociallink.js";
import { Team } from "./team.js";
/**
 * The reason because the employment ended.
 */
export declare const LeavingReason: {
    readonly Dismissed: "dismissed";
    readonly Resigned: "resigned";
    readonly Redundancy: "redundancy";
    readonly Retired: "retired";
    readonly Other: "other";
};
/**
 * The reason because the employment ended.
 */
export type LeavingReason = OpenEnum<typeof LeavingReason>;
export declare const LeavingReason$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    other: "other";
    dismissed: "dismissed";
    resigned: "resigned";
    redundancy: "redundancy";
    retired: "retired";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * The type of employment relationship the employee has with the organization.
 */
export declare const EmploymentType: {
    readonly Contractor: "contractor";
    readonly Employee: "employee";
    readonly Freelance: "freelance";
    readonly Temp: "temp";
    readonly Internship: "internship";
    readonly Other: "other";
};
/**
 * The type of employment relationship the employee has with the organization.
 */
export type EmploymentType = OpenEnum<typeof EmploymentType>;
export declare const EmploymentType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    other: "other";
    employee: "employee";
    internship: "internship";
    contractor: "contractor";
    freelance: "freelance";
    temp: "temp";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * The work schedule of the employee.
 */
export declare const EmploymentSubType: {
    readonly FullTime: "full_time";
    readonly PartTime: "part_time";
    readonly Hourly: "hourly";
    readonly Other: "other";
    readonly NotSpecified: "not_specified";
};
/**
 * The work schedule of the employee.
 */
export type EmploymentSubType = OpenEnum<typeof EmploymentSubType>;
export declare const EmploymentSubType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    other: "other";
    not_specified: "not_specified";
    full_time: "full_time";
    part_time: "part_time";
    hourly: "hourly";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type EmploymentRole = {
    type?: EmploymentType | null | undefined;
    sub_type?: EmploymentSubType | null | undefined;
};
export declare const EmploymentRole$zodSchema: z.ZodType<EmploymentRole>;
export type EmployeeManager = {
    id?: string | null | undefined;
    name?: string | null | undefined;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    email?: string | null | undefined;
    employment_status?: EmploymentStatus | null | undefined;
};
export declare const EmployeeManager$zodSchema: z.ZodType<EmployeeManager>;
export type ProbationPeriod = {
    start_date?: string | null | undefined;
    end_date?: string | null | undefined;
};
export declare const ProbationPeriod$zodSchema: z.ZodType<ProbationPeriod>;
export type Employee = {
    id?: string | null | undefined;
    downstream_id?: string | null | undefined;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    middle_name?: string | null | undefined;
    display_name?: string | null | undefined;
    preferred_name?: string | null | undefined;
    initials?: string | null | undefined;
    salutation?: string | null | undefined;
    title?: string | null | undefined;
    marital_status?: string | null | undefined;
    partner?: Person | undefined;
    division?: string | null | undefined;
    division_id?: string | null | undefined;
    department?: string | null | undefined;
    department_id?: string | null | undefined;
    department_name?: string | null | undefined;
    team?: Team | null | undefined;
    company_id?: string | null | undefined;
    company_name?: string | null | undefined;
    employment_start_date?: string | null | undefined;
    employment_end_date?: string | null | undefined;
    leaving_reason?: LeavingReason | null | undefined;
    employee_number?: string | null | undefined;
    employment_status?: EmploymentStatus | null | undefined;
    employment_role?: EmploymentRole | undefined;
    ethnicity?: string | null | undefined;
    manager?: EmployeeManager | undefined;
    direct_reports?: Array<string> | null | undefined;
    social_security_number?: string | null | undefined;
    birthday?: string | null | undefined;
    deceased_on?: string | null | undefined;
    country_of_birth?: string | null | undefined;
    description?: string | null | undefined;
    gender?: Gender | null | undefined;
    pronouns?: string | null | undefined;
    preferred_language?: string | null | undefined;
    languages?: Array<string | null> | undefined;
    nationalities?: Array<string | null> | undefined;
    photo_url?: string | null | undefined;
    timezone?: string | null | undefined;
    source?: string | null | undefined;
    source_id?: string | null | undefined;
    record_url?: string | null | undefined;
    jobs?: Array<EmployeeJob> | null | undefined;
    compensations?: Array<EmployeeCompensation> | null | undefined;
    works_remote?: boolean | null | undefined;
    addresses?: Array<Address> | undefined;
    phone_numbers?: Array<PhoneNumber> | undefined;
    emails?: Array<Email> | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    social_links?: Array<SocialLink> | undefined;
    bank_accounts?: Array<BankAccount2> | undefined;
    tax_code?: string | null | undefined;
    tax_id?: string | null | undefined;
    dietary_preference?: string | null | undefined;
    food_allergies?: Array<string> | null | undefined;
    probation_period?: ProbationPeriod | undefined;
    tags?: Array<string> | null | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    row_version?: string | null | undefined;
    deleted?: boolean | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const Employee$zodSchema: z.ZodType<Employee>;
export type EmployeeInput = {
    id?: string | null | undefined;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    middle_name?: string | null | undefined;
    display_name?: string | null | undefined;
    preferred_name?: string | null | undefined;
    initials?: string | null | undefined;
    salutation?: string | null | undefined;
    title?: string | null | undefined;
    marital_status?: string | null | undefined;
    partner?: PersonInput | undefined;
    division?: string | null | undefined;
    division_id?: string | null | undefined;
    department?: string | null | undefined;
    department_id?: string | null | undefined;
    department_name?: string | null | undefined;
    team?: Team | null | undefined;
    company_id?: string | null | undefined;
    company_name?: string | null | undefined;
    employment_start_date?: string | null | undefined;
    employment_end_date?: string | null | undefined;
    leaving_reason?: LeavingReason | null | undefined;
    employee_number?: string | null | undefined;
    employment_status?: EmploymentStatus | null | undefined;
    employment_role?: EmploymentRole | undefined;
    ethnicity?: string | null | undefined;
    manager?: EmployeeManager | undefined;
    direct_reports?: Array<string> | null | undefined;
    social_security_number?: string | null | undefined;
    birthday?: string | null | undefined;
    deceased_on?: string | null | undefined;
    country_of_birth?: string | null | undefined;
    description?: string | null | undefined;
    gender?: Gender | null | undefined;
    pronouns?: string | null | undefined;
    preferred_language?: string | null | undefined;
    languages?: Array<string | null> | undefined;
    nationalities?: Array<string | null> | undefined;
    photo_url?: string | null | undefined;
    timezone?: string | null | undefined;
    source?: string | null | undefined;
    source_id?: string | null | undefined;
    record_url?: string | null | undefined;
    jobs?: Array<EmployeeJobInput> | null | undefined;
    compensations?: Array<EmployeeCompensationInput> | null | undefined;
    works_remote?: boolean | null | undefined;
    addresses?: Array<Address> | undefined;
    phone_numbers?: Array<PhoneNumber> | undefined;
    emails?: Array<Email> | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    social_links?: Array<SocialLink> | undefined;
    bank_accounts?: Array<BankAccount2> | undefined;
    tax_code?: string | null | undefined;
    tax_id?: string | null | undefined;
    dietary_preference?: string | null | undefined;
    food_allergies?: Array<string> | null | undefined;
    probation_period?: ProbationPeriod | undefined;
    tags?: Array<string> | null | undefined;
    row_version?: string | null | undefined;
    deleted?: boolean | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const EmployeeInput$zodSchema: z.ZodType<EmployeeInput>;
//# sourceMappingURL=employee.d.ts.map