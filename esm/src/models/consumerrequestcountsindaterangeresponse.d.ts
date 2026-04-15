import * as z from "zod";
import { RequestCountAllocation } from "./requestcountallocation.js";
export type ConsumerRequestCountsInDateRangeResponseData = {
    application_id?: string | undefined;
    consumer_id?: string | undefined;
    start_datetime?: string | undefined;
    end_datetime?: string | undefined;
    aggregated_request_count?: number | undefined;
    request_counts?: RequestCountAllocation | undefined;
};
export declare const ConsumerRequestCountsInDateRangeResponseData$zodSchema: z.ZodType<ConsumerRequestCountsInDateRangeResponseData>;
/**
 * Consumers Request Counts within Date Range
 */
export type ConsumerRequestCountsInDateRangeResponse = {
    status_code: number;
    status: string;
    data: ConsumerRequestCountsInDateRangeResponseData;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const ConsumerRequestCountsInDateRangeResponse$zodSchema: z.ZodType<ConsumerRequestCountsInDateRangeResponse>;
//# sourceMappingURL=consumerrequestcountsindaterangeresponse.d.ts.map