import * as z from "zod";
import { ConsumerMetadata } from "./consumermetadata.js";
export type UpdateConsumerRequest = {
    metadata?: ConsumerMetadata | undefined;
};
export declare const UpdateConsumerRequest$zodSchema: z.ZodType<UpdateConsumerRequest>;
//# sourceMappingURL=updateconsumerrequest.d.ts.map