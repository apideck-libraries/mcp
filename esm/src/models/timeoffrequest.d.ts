import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { PassThroughBody } from "./passthroughbody.js";
/**
 * The status of the time off request.
 */
export declare const TimeOffRequestStatus: {
    readonly Requested: "requested";
    readonly Approved: "approved";
    readonly Declined: "declined";
    readonly Cancelled: "cancelled";
    readonly Deleted: "deleted";
    readonly Other: "other";
};
/**
 * The status of the time off request.
 */
export type TimeOffRequestStatus = OpenEnum<typeof TimeOffRequestStatus>;
export declare const TimeOffRequestStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    cancelled: "cancelled";
    other: "other";
    deleted: "deleted";
    approved: "approved";
    requested: "requested";
    declined: "declined";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * The type of request
 */
export declare const RequestType: {
    readonly Vacation: "vacation";
    readonly Sick: "sick";
    readonly Personal: "personal";
    readonly JuryDuty: "jury_duty";
    readonly Volunteer: "volunteer";
    readonly Bereavement: "bereavement";
    readonly Other: "other";
};
/**
 * The type of request
 */
export type RequestType = OpenEnum<typeof RequestType>;
export declare const RequestType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    other: "other";
    personal: "personal";
    vacation: "vacation";
    sick: "sick";
    jury_duty: "jury_duty";
    volunteer: "volunteer";
    bereavement: "bereavement";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * The unit of time off requested. Possible values include: `hours`, `days`, or `other`.
 */
export declare const Units: {
    readonly Days: "days";
    readonly Hours: "hours";
    readonly Other: "other";
};
/**
 * The unit of time off requested. Possible values include: `hours`, `days`, or `other`.
 */
export type Units = OpenEnum<typeof Units>;
export declare const Units$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    other: "other";
    days: "days";
    hours: "hours";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type Notes = {
    employee?: string | null | undefined;
    manager?: string | null | undefined;
};
export declare const Notes$zodSchema: z.ZodType<Notes>;
export type TimeOffRequest = {
    id?: string | undefined;
    employee_id?: string | null | undefined;
    policy_id?: string | null | undefined;
    status?: TimeOffRequestStatus | null | undefined;
    description?: string | null | undefined;
    start_date?: string | null | undefined;
    end_date?: string | null | undefined;
    request_date?: string | null | undefined;
    request_type?: RequestType | null | undefined;
    approval_date?: string | null | undefined;
    units?: Units | null | undefined;
    amount?: number | null | undefined;
    day_part?: string | null | undefined;
    notes?: Notes | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
    policy_type?: string | undefined;
};
export declare const TimeOffRequest$zodSchema: z.ZodType<TimeOffRequest>;
export type TimeOffRequestInput = {
    employee_id?: string | null | undefined;
    policy_id?: string | null | undefined;
    status?: TimeOffRequestStatus | null | undefined;
    description?: string | null | undefined;
    start_date?: string | null | undefined;
    end_date?: string | null | undefined;
    request_date?: string | null | undefined;
    request_type?: RequestType | null | undefined;
    approval_date?: string | null | undefined;
    units?: Units | null | undefined;
    amount?: number | null | undefined;
    day_part?: string | null | undefined;
    notes?: Notes | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
    policy_type?: string | undefined;
};
export declare const TimeOffRequestInput$zodSchema: z.ZodType<TimeOffRequestInput>;
//# sourceMappingURL=timeoffrequest.d.ts.map