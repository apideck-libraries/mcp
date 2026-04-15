import * as z from "zod";
import { Consumer } from "./consumer.js";
/**
 * Consumer created
 */
export type CreateConsumerResponse = {
    status_code: number;
    status: string;
    data: Consumer;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const CreateConsumerResponse$zodSchema: z.ZodType<CreateConsumerResponse>;
//# sourceMappingURL=createconsumerresponse.d.ts.map