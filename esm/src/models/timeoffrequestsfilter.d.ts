import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Time off request status to filter on
 */
export declare const TimeOffRequestsFilterTimeOffRequestStatus: {
    readonly Requested: "requested";
    readonly Approved: "approved";
    readonly Declined: "declined";
    readonly Cancelled: "cancelled";
    readonly Deleted: "deleted";
    readonly Other: "other";
};
/**
 * Time off request status to filter on
 */
export type TimeOffRequestsFilterTimeOffRequestStatus = OpenEnum<typeof TimeOffRequestsFilterTimeOffRequestStatus>;
export declare const TimeOffRequestsFilterTimeOffRequestStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    cancelled: "cancelled";
    other: "other";
    deleted: "deleted";
    approved: "approved";
    requested: "requested";
    declined: "declined";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type TimeOffRequestsFilter = {
    start_date?: string | undefined;
    end_date?: string | undefined;
    updated_since?: string | undefined;
    employee_id?: string | undefined;
    time_off_request_status?: TimeOffRequestsFilterTimeOffRequestStatus | undefined;
    company_id?: string | undefined;
};
export declare const TimeOffRequestsFilter$zodSchema: z.ZodType<TimeOffRequestsFilter>;
//# sourceMappingURL=timeoffrequestsfilter.d.ts.map