import * as z from "zod";
import { ConsumerMetadata } from "./consumermetadata.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
import { RequestCountAllocation } from "./requestcountallocation.js";
export type GetConsumersResponseData = {
    consumer_id?: string | undefined;
    application_id?: string | undefined;
    metadata?: ConsumerMetadata | undefined;
    aggregated_request_count?: number | undefined;
    request_counts?: RequestCountAllocation | undefined;
    created?: string | undefined;
    modified?: string | undefined;
    request_count_updated?: string | undefined;
    services?: Array<string> | undefined;
};
export declare const GetConsumersResponseData$zodSchema: z.ZodType<GetConsumersResponseData>;
/**
 * Consumers
 */
export type GetConsumersResponse = {
    status_code: number;
    status: string;
    data: Array<GetConsumersResponseData>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetConsumersResponse$zodSchema: z.ZodType<GetConsumersResponse>;
//# sourceMappingURL=getconsumersresponse.d.ts.map