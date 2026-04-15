import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { ConnectionInput } from "./connection.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateConnectionResponse } from "./updateconnectionresponse.js";
export type VaultConnectionsUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const VaultConnectionsUpdateGlobals$zodSchema: z.ZodType<VaultConnectionsUpdateGlobals>;
export type VaultConnectionsUpdateRequest = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    service_id: string;
    unified_api: string;
    body: ConnectionInput;
};
export declare const VaultConnectionsUpdateRequest$zodSchema: z.ZodType<VaultConnectionsUpdateRequest>;
export type VaultConnectionsUpdateResponse = UpdateConnectionResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const VaultConnectionsUpdateResponse$zodSchema: z.ZodType<VaultConnectionsUpdateResponse>;
//# sourceMappingURL=vaultconnectionsupdateop.d.ts.map