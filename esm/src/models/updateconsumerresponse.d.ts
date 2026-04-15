import * as z from "zod";
import { Consumer } from "./consumer.js";
/**
 * Consumer updated
 */
export type UpdateConsumerResponse = {
    status_code: number;
    status: string;
    data: Consumer;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const UpdateConsumerResponse$zodSchema: z.ZodType<UpdateConsumerResponse>;
//# sourceMappingURL=updateconsumerresponse.d.ts.map