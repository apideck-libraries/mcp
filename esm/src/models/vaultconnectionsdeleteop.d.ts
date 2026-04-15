import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type VaultConnectionsDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const VaultConnectionsDeleteGlobals$zodSchema: z.ZodType<VaultConnectionsDeleteGlobals>;
export type VaultConnectionsDeleteRequest = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    service_id: string;
    unified_api: string;
};
export declare const VaultConnectionsDeleteRequest$zodSchema: z.ZodType<VaultConnectionsDeleteRequest>;
export type VaultConnectionsDeleteResponse = BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const VaultConnectionsDeleteResponse$zodSchema: z.ZodType<VaultConnectionsDeleteResponse>;
//# sourceMappingURL=vaultconnectionsdeleteop.d.ts.map