import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateSessionResponse } from "./createsessionresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { Session } from "./session.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type VaultSessionsCreateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const VaultSessionsCreateGlobals$zodSchema: z.ZodType<VaultSessionsCreateGlobals>;
export type VaultSessionsCreateRequest = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    body?: Session | undefined;
};
export declare const VaultSessionsCreateRequest$zodSchema: z.ZodType<VaultSessionsCreateRequest>;
export type VaultSessionsCreateResponse = CreateSessionResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const VaultSessionsCreateResponse$zodSchema: z.ZodType<VaultSessionsCreateResponse>;
//# sourceMappingURL=vaultsessionscreateop.d.ts.map