import * as z from "zod";
export type CreateCallbackStateResponseData = {
    state?: string | undefined;
};
export declare const CreateCallbackStateResponseData$zodSchema: z.ZodType<CreateCallbackStateResponseData>;
/**
 * Callback state created
 */
export type CreateCallbackStateResponse = {
    status_code: number;
    status: string;
    data: CreateCallbackStateResponseData;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const CreateCallbackStateResponse$zodSchema: z.ZodType<CreateCallbackStateResponse>;
//# sourceMappingURL=createcallbackstateresponse.d.ts.map