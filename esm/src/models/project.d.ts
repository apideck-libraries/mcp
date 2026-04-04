import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Address } from "./address.js";
import { Currency } from "./currency.js";
import { CustomFieldUnion } from "./customfieldunion.js";
import { LinkedCustomer } from "./linkedcustomer.js";
import { LinkedCustomerInput } from "./linkedcustomerinput.js";
import { LinkedTaxRate } from "./linkedtaxrate.js";
import { LinkedTaxRateInput } from "./linkedtaxrateinput.js";
import { LinkedTrackingCategory } from "./linkedtrackingcategory.js";
/**
 * Current status of the project
 */
export declare const ProjectProjectStatus: {
    readonly Active: "active";
    readonly Completed: "completed";
    readonly OnHold: "on_hold";
    readonly Cancelled: "cancelled";
    readonly Draft: "draft";
    readonly InProgress: "in_progress";
    readonly Approved: "approved";
    readonly Other: "other";
};
/**
 * Current status of the project
 */
export type ProjectProjectStatus = OpenEnum<typeof ProjectProjectStatus>;
export declare const ProjectProjectStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    completed: "completed";
    cancelled: "cancelled";
    other: "other";
    active: "active";
    draft: "draft";
    approved: "approved";
    on_hold: "on_hold";
    in_progress: "in_progress";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * Type or category of the project
 */
export declare const ProjectType: {
    readonly ClientProject: "client_project";
    readonly InternalProject: "internal_project";
    readonly Maintenance: "maintenance";
    readonly ResearchDevelopment: "research_development";
    readonly Training: "training";
    readonly Other: "other";
};
/**
 * Type or category of the project
 */
export type ProjectType = OpenEnum<typeof ProjectType>;
export declare const ProjectType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    other: "other";
    client_project: "client_project";
    internal_project: "internal_project";
    maintenance: "maintenance";
    research_development: "research_development";
    training: "training";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * Priority level of the project
 */
export declare const ProjectPriority: {
    readonly Low: "low";
    readonly Medium: "medium";
    readonly High: "high";
    readonly Critical: "critical";
};
/**
 * Priority level of the project
 */
export type ProjectPriority = OpenEnum<typeof ProjectPriority>;
export declare const ProjectPriority$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    critical: "critical";
    high: "high";
    low: "low";
    medium: "medium";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * Department or organizational unit associated with the project
 */
export type ProjectDepartment = {
    id?: string | undefined;
    name?: string | undefined;
};
export declare const ProjectDepartment$zodSchema: z.ZodType<ProjectDepartment>;
/**
 * Parent project if this is a subproject
 */
export type ParentProject = {
    id?: string | undefined;
    name?: string | undefined;
};
export declare const ParentProject$zodSchema: z.ZodType<ParentProject>;
/**
 * Method used for billing this project
 */
export declare const BillingMethod: {
    readonly FixedPrice: "fixed_price";
    readonly TimeAndMaterials: "time_and_materials";
    readonly MilestoneBased: "milestone_based";
    readonly Retainer: "retainer";
    readonly NonBillable: "non_billable";
};
/**
 * Method used for billing this project
 */
export type BillingMethod = OpenEnum<typeof BillingMethod>;
export declare const BillingMethod$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    fixed_price: "fixed_price";
    time_and_materials: "time_and_materials";
    milestone_based: "milestone_based";
    retainer: "retainer";
    non_billable: "non_billable";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * Current phase of the project lifecycle
 */
export declare const ProjectPhase: {
    readonly Initiation: "initiation";
    readonly Planning: "planning";
    readonly Execution: "execution";
    readonly Monitoring: "monitoring";
    readonly Closure: "closure";
    readonly Other: "other";
};
/**
 * Current phase of the project lifecycle
 */
export type ProjectPhase = OpenEnum<typeof ProjectPhase>;
export declare const ProjectPhase$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    execution: "execution";
    other: "other";
    initiation: "initiation";
    planning: "planning";
    monitoring: "monitoring";
    closure: "closure";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * Current status of project schedule compared to plan
 */
export declare const ScheduleStatus: {
    readonly AheadOfSchedule: "ahead_of_schedule";
    readonly OnSchedule: "on_schedule";
    readonly BehindSchedule: "behind_schedule";
    readonly CriticalDelay: "critical_delay";
};
/**
 * Current status of project schedule compared to plan
 */
export type ScheduleStatus = OpenEnum<typeof ScheduleStatus>;
export declare const ScheduleStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    ahead_of_schedule: "ahead_of_schedule";
    on_schedule: "on_schedule";
    behind_schedule: "behind_schedule";
    critical_delay: "critical_delay";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type Project = {
    id?: string | undefined;
    downstream_id?: string | null | undefined;
    name: string;
    display_id?: string | null | undefined;
    reference_id?: string | null | undefined;
    description?: string | null | undefined;
    status?: ProjectProjectStatus | null | undefined;
    active?: boolean | null | undefined;
    project_type?: ProjectType | null | undefined;
    priority?: ProjectPriority | null | undefined;
    completion_percentage?: number | null | undefined;
    start_date?: string | null | undefined;
    end_date?: string | null | undefined;
    completion_date?: string | null | undefined;
    customer?: LinkedCustomer | null | undefined;
    department?: ProjectDepartment | null | undefined;
    company_id?: string | null | undefined;
    owner_id?: string | null | undefined;
    parent_project?: ParentProject | null | undefined;
    currency?: Currency | null | undefined;
    budget_amount?: number | null | undefined;
    approved_amount?: number | null | undefined;
    actual_amount?: number | null | undefined;
    budget_hours?: number | null | undefined;
    actual_hours?: number | null | undefined;
    hourly_rate?: number | null | undefined;
    billing_method?: BillingMethod | null | undefined;
    is_billable?: boolean | null | undefined;
    phase?: ProjectPhase | null | undefined;
    tax_rate?: LinkedTaxRate | undefined;
    tracking_categories?: Array<LinkedTrackingCategory | null> | null | undefined;
    tags?: Array<string> | undefined;
    notes?: string | null | undefined;
    contract_number?: string | null | undefined;
    profit_margin?: number | null | undefined;
    schedule_status?: ScheduleStatus | null | undefined;
    addresses?: Array<Address> | undefined;
    team_size?: number | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    row_version?: string | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    created_at?: string | null | undefined;
    updated_at?: string | null | undefined;
};
export declare const Project$zodSchema: z.ZodType<Project>;
export type ProjectInput = {
    name: string;
    display_id?: string | null | undefined;
    reference_id?: string | null | undefined;
    description?: string | null | undefined;
    status?: ProjectProjectStatus | null | undefined;
    active?: boolean | null | undefined;
    project_type?: ProjectType | null | undefined;
    priority?: ProjectPriority | null | undefined;
    completion_percentage?: number | null | undefined;
    start_date?: string | null | undefined;
    end_date?: string | null | undefined;
    completion_date?: string | null | undefined;
    customer?: LinkedCustomerInput | null | undefined;
    department?: ProjectDepartment | null | undefined;
    company_id?: string | null | undefined;
    owner_id?: string | null | undefined;
    parent_project?: ParentProject | null | undefined;
    currency?: Currency | null | undefined;
    budget_amount?: number | null | undefined;
    approved_amount?: number | null | undefined;
    budget_hours?: number | null | undefined;
    hourly_rate?: number | null | undefined;
    billing_method?: BillingMethod | null | undefined;
    is_billable?: boolean | null | undefined;
    phase?: ProjectPhase | null | undefined;
    tax_rate?: LinkedTaxRateInput | undefined;
    tracking_categories?: Array<LinkedTrackingCategory | null> | null | undefined;
    tags?: Array<string> | undefined;
    notes?: string | null | undefined;
    contract_number?: string | null | undefined;
    profit_margin?: number | null | undefined;
    schedule_status?: ScheduleStatus | null | undefined;
    addresses?: Array<Address> | undefined;
    team_size?: number | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    row_version?: string | null | undefined;
};
export declare const ProjectInput$zodSchema: z.ZodType<ProjectInput>;
//# sourceMappingURL=project.d.ts.map