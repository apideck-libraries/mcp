import * as z from "zod";
import { ConsumerConnection } from "./consumerconnection.js";
import { ConsumerMetadata } from "./consumermetadata.js";
import { RequestCountAllocation } from "./requestcountallocation.js";
export type Consumer = {
    consumer_id: string;
    application_id?: string | undefined;
    metadata?: ConsumerMetadata | undefined;
    connections?: Array<ConsumerConnection> | undefined;
    services?: Array<string> | undefined;
    aggregated_request_count?: number | undefined;
    request_counts?: RequestCountAllocation | undefined;
    created?: string | undefined;
    modified?: string | undefined;
    request_count_updated?: string | undefined;
};
export declare const Consumer$zodSchema: z.ZodType<Consumer>;
//# sourceMappingURL=consumer.d.ts.map