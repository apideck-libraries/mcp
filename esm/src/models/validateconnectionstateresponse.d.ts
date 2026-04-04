import * as z from "zod";
import { ConnectionState } from "./connectionstate.js";
export type ValidateConnectionStateResponseData = {
    id?: string | undefined;
    state?: ConnectionState | undefined;
};
export declare const ValidateConnectionStateResponseData$zodSchema: z.ZodType<ValidateConnectionStateResponseData>;
/**
 * Connection access token refreshed
 */
export type ValidateConnectionStateResponse = {
    status_code: number;
    status: string;
    data: ValidateConnectionStateResponseData;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const ValidateConnectionStateResponse$zodSchema: z.ZodType<ValidateConnectionStateResponse>;
//# sourceMappingURL=validateconnectionstateresponse.d.ts.map