import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Address } from "./address.js";
import { Currency } from "./currency.js";
import { CustomFieldUnion } from "./customfieldunion.js";
import { Department } from "./department.js";
import { DepartmentInput } from "./departmentinput.js";
import { JobStatus } from "./jobstatus.js";
/**
 * The visibility of the job
 */
export declare const Visibility: {
    readonly Draft: "draft";
    readonly Public: "public";
    readonly Internal: "internal";
};
/**
 * The visibility of the job
 */
export type Visibility = OpenEnum<typeof Visibility>;
export declare const Visibility$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    draft: "draft";
    internal: "internal";
    public: "public";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export declare const EmploymentTerms: {
    readonly FullTime: "full-time";
    readonly PartTime: "part-time";
    readonly Internship: "internship";
    readonly Contractor: "contractor";
    readonly Employee: "employee";
    readonly Freelance: "freelance";
    readonly Temp: "temp";
    readonly Seasonal: "seasonal";
    readonly Volunteer: "volunteer";
    readonly Other: "other";
};
export type EmploymentTerms = OpenEnum<typeof EmploymentTerms>;
export declare const EmploymentTerms$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    other: "other";
    employee: "employee";
    "full-time": "full-time";
    "part-time": "part-time";
    internship: "internship";
    contractor: "contractor";
    freelance: "freelance";
    temp: "temp";
    seasonal: "seasonal";
    volunteer: "volunteer";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * Details of the branch for which the job is created.
 */
export type Branch = {
    id?: string | undefined;
    name?: string | undefined;
};
export declare const Branch$zodSchema: z.ZodType<Branch>;
export type Block = {
    title?: string | undefined;
    content?: string | null | undefined;
};
export declare const Block$zodSchema: z.ZodType<Block>;
export type Salary = {
    min?: number | undefined;
    max?: number | undefined;
    currency?: Currency | null | undefined;
    interval?: string | null | undefined;
};
export declare const Salary$zodSchema: z.ZodType<Salary>;
export declare const JobType: {
    readonly JobPortal: "job_portal";
    readonly JobDescription: "job_description";
};
export type JobType = OpenEnum<typeof JobType>;
export declare const JobType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    job_portal: "job_portal";
    job_description: "job_description";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type Link = {
    type?: JobType | undefined;
    url?: string | undefined;
};
export declare const Link$zodSchema: z.ZodType<Link>;
export type Job = {
    id?: string | undefined;
    slug?: string | null | undefined;
    title?: string | null | undefined;
    sequence?: number | undefined;
    visibility?: Visibility | undefined;
    status?: JobStatus | undefined;
    code?: string | undefined;
    language?: string | null | undefined;
    employment_terms?: EmploymentTerms | null | undefined;
    experience?: string | undefined;
    location?: string | null | undefined;
    remote?: boolean | null | undefined;
    requisition_id?: string | undefined;
    department?: Department | undefined;
    branch?: Branch | undefined;
    recruiters?: Array<string> | null | undefined;
    hiring_managers?: Array<string> | undefined;
    followers?: Array<string> | null | undefined;
    description?: string | null | undefined;
    description_html?: string | null | undefined;
    blocks?: Array<Block> | undefined;
    closing?: string | null | undefined;
    closing_html?: string | null | undefined;
    closing_date?: string | null | undefined;
    salary?: Salary | undefined;
    url?: string | null | undefined;
    job_portal_url?: string | null | undefined;
    record_url?: string | null | undefined;
    links?: Array<Link> | undefined;
    confidential?: boolean | undefined;
    available_to_employees?: boolean | undefined;
    tags?: Array<string> | null | undefined;
    addresses?: Array<Address> | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    deleted?: boolean | null | undefined;
    owner_id?: string | null | undefined;
    published_at?: string | null | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
};
export declare const Job$zodSchema: z.ZodType<Job>;
/**
 * Details of the branch for which the job is created.
 */
export type BranchInput = {
    name?: string | undefined;
};
export declare const BranchInput$zodSchema: z.ZodType<BranchInput>;
export type JobInput = {
    slug?: string | null | undefined;
    title?: string | null | undefined;
    sequence?: number | undefined;
    visibility?: Visibility | undefined;
    status?: JobStatus | undefined;
    code?: string | undefined;
    language?: string | null | undefined;
    employment_terms?: EmploymentTerms | null | undefined;
    experience?: string | undefined;
    location?: string | null | undefined;
    remote?: boolean | null | undefined;
    requisition_id?: string | undefined;
    department?: DepartmentInput | undefined;
    branch?: BranchInput | undefined;
    recruiters?: Array<string> | null | undefined;
    hiring_managers?: Array<string> | undefined;
    followers?: Array<string> | null | undefined;
    description?: string | null | undefined;
    description_html?: string | null | undefined;
    blocks?: Array<Block> | undefined;
    closing?: string | null | undefined;
    closing_html?: string | null | undefined;
    closing_date?: string | null | undefined;
    salary?: Salary | undefined;
    url?: string | null | undefined;
    job_portal_url?: string | null | undefined;
    record_url?: string | null | undefined;
    links?: Array<Link> | undefined;
    confidential?: boolean | undefined;
    available_to_employees?: boolean | undefined;
    tags?: Array<string> | null | undefined;
    addresses?: Array<Address> | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    deleted?: boolean | null | undefined;
    owner_id?: string | null | undefined;
};
export declare const JobInput$zodSchema: z.ZodType<JobInput>;
//# sourceMappingURL=job.d.ts.map