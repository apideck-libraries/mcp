import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetConnectionResponse } from "./getconnectionresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type VaultConnectionsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const VaultConnectionsOneGlobals$zodSchema: z.ZodType<VaultConnectionsOneGlobals>;
export type VaultConnectionsOneRequest = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    service_id: string;
    unified_api: string;
};
export declare const VaultConnectionsOneRequest$zodSchema: z.ZodType<VaultConnectionsOneRequest>;
export type VaultConnectionsOneResponse = GetConnectionResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const VaultConnectionsOneResponse$zodSchema: z.ZodType<VaultConnectionsOneResponse>;
//# sourceMappingURL=vaultconnectionsoneop.d.ts.map