import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateCallbackState } from "./createcallbackstate.js";
import { CreateCallbackStateResponse } from "./createcallbackstateresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type VaultCreateCallbackStateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const VaultCreateCallbackStateGlobals$zodSchema: z.ZodType<VaultCreateCallbackStateGlobals>;
export type VaultCreateCallbackStateRequest = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    service_id: string;
    unified_api: string;
    body: CreateCallbackState;
};
export declare const VaultCreateCallbackStateRequest$zodSchema: z.ZodType<VaultCreateCallbackStateRequest>;
export type VaultCreateCallbackStateResponse = CreateCallbackStateResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const VaultCreateCallbackStateResponse$zodSchema: z.ZodType<VaultCreateCallbackStateResponse>;
//# sourceMappingURL=vaultcreatecallbackstateop.d.ts.map