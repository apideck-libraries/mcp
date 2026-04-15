import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetConnectionResponse } from "./getconnectionresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type VaultConnectionsTokenGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const VaultConnectionsTokenGlobals$zodSchema: z.ZodType<VaultConnectionsTokenGlobals>;
export type VaultConnectionsTokenRequestBody = {};
export declare const VaultConnectionsTokenRequestBody$zodSchema: z.ZodType<VaultConnectionsTokenRequestBody>;
export type VaultConnectionsTokenRequest = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    service_id: string;
    unified_api: string;
    body?: VaultConnectionsTokenRequestBody | undefined;
};
export declare const VaultConnectionsTokenRequest$zodSchema: z.ZodType<VaultConnectionsTokenRequest>;
export type VaultConnectionsTokenResponse = GetConnectionResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const VaultConnectionsTokenResponse$zodSchema: z.ZodType<VaultConnectionsTokenResponse>;
//# sourceMappingURL=vaultconnectionstokenop.d.ts.map