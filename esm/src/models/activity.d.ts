import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { ActivityAttendee, ActivityAttendeeInput } from "./activityattendee.js";
import { Address } from "./address.js";
import { CustomFieldUnion } from "./customfieldunion.js";
import { PassThroughBody } from "./passthroughbody.js";
/**
 * The type of the activity
 */
export declare const ActivityType: {
    readonly Call: "call";
    readonly Meeting: "meeting";
    readonly Email: "email";
    readonly Note: "note";
    readonly Task: "task";
    readonly Deadline: "deadline";
    readonly SendLetter: "send-letter";
    readonly SendQuote: "send-quote";
    readonly Other: "other";
};
/**
 * The type of the activity
 */
export type ActivityType = OpenEnum<typeof ActivityType>;
export declare const ActivityType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    email: "email";
    task: "task";
    other: "other";
    note: "note";
    call: "call";
    meeting: "meeting";
    deadline: "deadline";
    "send-letter": "send-letter";
    "send-quote": "send-quote";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export declare const ShowAs: {
    readonly Free: "free";
    readonly Busy: "busy";
};
export type ShowAs = OpenEnum<typeof ShowAs>;
export declare const ShowAs$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    free: "free";
    busy: "busy";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type Activity = {
    id?: string | undefined;
    downstream_id?: string | null | undefined;
    activity_datetime?: string | null | undefined;
    duration_seconds?: number | null | undefined;
    user_id?: string | null | undefined;
    account_id?: string | null | undefined;
    contact_id?: string | null | undefined;
    company_id?: string | null | undefined;
    opportunity_id?: string | null | undefined;
    lead_id?: string | null | undefined;
    owner_id?: string | null | undefined;
    campaign_id?: string | null | undefined;
    case_id?: string | null | undefined;
    asset_id?: string | null | undefined;
    contract_id?: string | null | undefined;
    product_id?: string | null | undefined;
    solution_id?: string | null | undefined;
    custom_object_id?: string | null | undefined;
    type: ActivityType | null;
    title?: string | null | undefined;
    description?: string | null | undefined;
    note?: string | null | undefined;
    location?: string | null | undefined;
    location_address?: Address | undefined;
    all_day_event?: boolean | null | undefined;
    private?: boolean | null | undefined;
    group_event?: boolean | null | undefined;
    event_sub_type?: string | null | undefined;
    group_event_type?: string | null | undefined;
    child?: boolean | null | undefined;
    archived?: boolean | null | undefined;
    deleted?: boolean | null | undefined;
    show_as?: ShowAs | null | undefined;
    done?: boolean | null | undefined;
    start_datetime?: string | null | undefined;
    end_datetime?: string | null | undefined;
    duration_minutes?: number | null | undefined;
    activity_date?: string | null | undefined;
    end_date?: string | null | undefined;
    recurrent?: boolean | undefined;
    reminder_datetime?: string | null | undefined;
    reminder_set?: boolean | null | undefined;
    video_conference_url?: string | null | undefined;
    video_conference_id?: string | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    attendees?: Array<ActivityAttendee> | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const Activity$zodSchema: z.ZodType<Activity>;
export type ActivityInput = {
    activity_datetime?: string | null | undefined;
    duration_seconds?: number | null | undefined;
    user_id?: string | null | undefined;
    account_id?: string | null | undefined;
    contact_id?: string | null | undefined;
    company_id?: string | null | undefined;
    opportunity_id?: string | null | undefined;
    lead_id?: string | null | undefined;
    owner_id?: string | null | undefined;
    campaign_id?: string | null | undefined;
    case_id?: string | null | undefined;
    asset_id?: string | null | undefined;
    contract_id?: string | null | undefined;
    product_id?: string | null | undefined;
    solution_id?: string | null | undefined;
    custom_object_id?: string | null | undefined;
    type: ActivityType | null;
    title?: string | null | undefined;
    description?: string | null | undefined;
    note?: string | null | undefined;
    location?: string | null | undefined;
    location_address?: Address | undefined;
    all_day_event?: boolean | null | undefined;
    private?: boolean | null | undefined;
    group_event?: boolean | null | undefined;
    event_sub_type?: string | null | undefined;
    group_event_type?: string | null | undefined;
    child?: boolean | null | undefined;
    archived?: boolean | null | undefined;
    deleted?: boolean | null | undefined;
    show_as?: ShowAs | null | undefined;
    done?: boolean | null | undefined;
    start_datetime?: string | null | undefined;
    end_datetime?: string | null | undefined;
    activity_date?: string | null | undefined;
    end_date?: string | null | undefined;
    recurrent?: boolean | undefined;
    reminder_datetime?: string | null | undefined;
    reminder_set?: boolean | null | undefined;
    video_conference_url?: string | null | undefined;
    video_conference_id?: string | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    attendees?: Array<ActivityAttendeeInput> | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const ActivityInput$zodSchema: z.ZodType<ActivityInput>;
//# sourceMappingURL=activity.d.ts.map