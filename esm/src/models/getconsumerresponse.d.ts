import * as z from "zod";
import { Consumer } from "./consumer.js";
/**
 * Consumer
 */
export type GetConsumerResponse = {
    status_code: number;
    status: string;
    data: Consumer;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetConsumerResponse$zodSchema: z.ZodType<GetConsumerResponse>;
//# sourceMappingURL=getconsumerresponse.d.ts.map