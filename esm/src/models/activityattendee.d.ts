import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Status of the attendee
 */
export declare const ActivityAttendeeStatus: {
    readonly Accepted: "accepted";
    readonly Tentative: "tentative";
    readonly Declined: "declined";
};
/**
 * Status of the attendee
 */
export type ActivityAttendeeStatus = OpenEnum<typeof ActivityAttendeeStatus>;
export declare const ActivityAttendeeStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    accepted: "accepted";
    tentative: "tentative";
    declined: "declined";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type ActivityAttendee = {
    id?: string | null | undefined;
    name?: string | null | undefined;
    first_name?: string | null | undefined;
    middle_name?: string | null | undefined;
    last_name?: string | null | undefined;
    prefix?: string | null | undefined;
    suffix?: string | null | undefined;
    email_address?: string | null | undefined;
    is_organizer?: boolean | null | undefined;
    status?: ActivityAttendeeStatus | null | undefined;
    user_id?: string | null | undefined;
    contact_id?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
};
export declare const ActivityAttendee$zodSchema: z.ZodType<ActivityAttendee>;
export type ActivityAttendeeInput = {
    name?: string | null | undefined;
    first_name?: string | null | undefined;
    middle_name?: string | null | undefined;
    last_name?: string | null | undefined;
    prefix?: string | null | undefined;
    suffix?: string | null | undefined;
    email_address?: string | null | undefined;
    is_organizer?: boolean | null | undefined;
    status?: ActivityAttendeeStatus | null | undefined;
};
export declare const ActivityAttendeeInput$zodSchema: z.ZodType<ActivityAttendeeInput>;
//# sourceMappingURL=activityattendee.d.ts.map