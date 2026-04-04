import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetConnectionsResponse } from "./getconnectionsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type VaultConnectionsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const VaultConnectionsAllGlobals$zodSchema: z.ZodType<VaultConnectionsAllGlobals>;
export type VaultConnectionsAllRequest = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    api?: string | undefined;
    configured?: boolean | undefined;
};
export declare const VaultConnectionsAllRequest$zodSchema: z.ZodType<VaultConnectionsAllRequest>;
export type VaultConnectionsAllResponse = GetConnectionsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const VaultConnectionsAllResponse$zodSchema: z.ZodType<VaultConnectionsAllResponse>;
//# sourceMappingURL=vaultconnectionsallop.d.ts.map