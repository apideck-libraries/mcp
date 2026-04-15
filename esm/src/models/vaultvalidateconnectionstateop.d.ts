import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { ValidateConnectionStateResponse } from "./validateconnectionstateresponse.js";
export type VaultValidateConnectionStateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const VaultValidateConnectionStateGlobals$zodSchema: z.ZodType<VaultValidateConnectionStateGlobals>;
export type VaultValidateConnectionStateRequestBody = {};
export declare const VaultValidateConnectionStateRequestBody$zodSchema: z.ZodType<VaultValidateConnectionStateRequestBody>;
export type VaultValidateConnectionStateRequest = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    service_id: string;
    unified_api: string;
    body?: VaultValidateConnectionStateRequestBody | undefined;
};
export declare const VaultValidateConnectionStateRequest$zodSchema: z.ZodType<VaultValidateConnectionStateRequest>;
export type VaultValidateConnectionStateResponse = ValidateConnectionStateResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const VaultValidateConnectionStateResponse$zodSchema: z.ZodType<VaultValidateConnectionStateResponse>;
//# sourceMappingURL=vaultvalidateconnectionstateop.d.ts.map