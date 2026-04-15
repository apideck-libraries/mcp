import * as z from "zod";
export type DeleteConsumerResponseData = {
    consumer_id?: string | undefined;
};
export declare const DeleteConsumerResponseData$zodSchema: z.ZodType<DeleteConsumerResponseData>;
/**
 * Consumer deleted
 */
export type DeleteConsumerResponse = {
    status_code: number;
    status: string;
    data: DeleteConsumerResponseData;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const DeleteConsumerResponse$zodSchema: z.ZodType<DeleteConsumerResponse>;
//# sourceMappingURL=deleteconsumerresponse.d.ts.map