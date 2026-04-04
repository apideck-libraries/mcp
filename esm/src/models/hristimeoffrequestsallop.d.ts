import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetTimeOffRequestsResponse } from "./gettimeoffrequestsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { TimeOffRequestsFilter } from "./timeoffrequestsfilter.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type HrisTimeOffRequestsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const HrisTimeOffRequestsAllGlobals$zodSchema: z.ZodType<HrisTimeOffRequestsAllGlobals>;
export type HrisTimeOffRequestsAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: TimeOffRequestsFilter | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const HrisTimeOffRequestsAllRequest$zodSchema: z.ZodType<HrisTimeOffRequestsAllRequest>;
export type HrisTimeOffRequestsAllResponseResult = GetTimeOffRequestsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const HrisTimeOffRequestsAllResponseResult$zodSchema: z.ZodType<HrisTimeOffRequestsAllResponseResult>;
export type HrisTimeOffRequestsAllResponse = {
    Result: GetTimeOffRequestsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const HrisTimeOffRequestsAllResponse$zodSchema: z.ZodType<HrisTimeOffRequestsAllResponse>;
//# sourceMappingURL=hristimeoffrequestsallop.d.ts.map