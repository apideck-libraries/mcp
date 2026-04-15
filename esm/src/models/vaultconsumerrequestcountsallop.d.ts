import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { ConsumerRequestCountsInDateRangeResponse } from "./consumerrequestcountsindaterangeresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type VaultConsumerRequestCountsAllGlobals = {
    xApideckAppId?: string | undefined;
};
export declare const VaultConsumerRequestCountsAllGlobals$zodSchema: z.ZodType<VaultConsumerRequestCountsAllGlobals>;
export type VaultConsumerRequestCountsAllRequest = {
    xApideckAppId?: string | undefined;
    consumer_id: string;
    start_datetime: string;
    end_datetime: string;
};
export declare const VaultConsumerRequestCountsAllRequest$zodSchema: z.ZodType<VaultConsumerRequestCountsAllRequest>;
export type VaultConsumerRequestCountsAllResponse = ConsumerRequestCountsInDateRangeResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const VaultConsumerRequestCountsAllResponse$zodSchema: z.ZodType<VaultConsumerRequestCountsAllResponse>;
//# sourceMappingURL=vaultconsumerrequestcountsallop.d.ts.map