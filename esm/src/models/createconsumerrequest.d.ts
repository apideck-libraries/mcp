import * as z from "zod";
import { ConsumerMetadata } from "./consumermetadata.js";
export type CreateConsumerRequest = {
    consumer_id: string;
    metadata?: ConsumerMetadata | undefined;
};
export declare const CreateConsumerRequest$zodSchema: z.ZodType<CreateConsumerRequest>;
//# sourceMappingURL=createconsumerrequest.d.ts.map