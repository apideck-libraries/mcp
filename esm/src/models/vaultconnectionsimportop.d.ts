import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { ConnectionImportData } from "./connectionimportdata.js";
import { CreateConnectionResponse } from "./createconnectionresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type VaultConnectionsImportGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const VaultConnectionsImportGlobals$zodSchema: z.ZodType<VaultConnectionsImportGlobals>;
export type VaultConnectionsImportRequest = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    service_id: string;
    unified_api: string;
    body: ConnectionImportData;
};
export declare const VaultConnectionsImportRequest$zodSchema: z.ZodType<VaultConnectionsImportRequest>;
export type VaultConnectionsImportResponse = CreateConnectionResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const VaultConnectionsImportResponse$zodSchema: z.ZodType<VaultConnectionsImportResponse>;
//# sourceMappingURL=vaultconnectionsimportop.d.ts.map