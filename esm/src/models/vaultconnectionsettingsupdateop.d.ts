import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { ConnectionInput } from "./connection.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateConnectionResponse } from "./updateconnectionresponse.js";
export type VaultConnectionSettingsUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const VaultConnectionSettingsUpdateGlobals$zodSchema: z.ZodType<VaultConnectionSettingsUpdateGlobals>;
export type VaultConnectionSettingsUpdateRequest = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    service_id: string;
    unified_api: string;
    resource: string;
    body: ConnectionInput;
};
export declare const VaultConnectionSettingsUpdateRequest$zodSchema: z.ZodType<VaultConnectionSettingsUpdateRequest>;
export type VaultConnectionSettingsUpdateResponse = UpdateConnectionResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const VaultConnectionSettingsUpdateResponse$zodSchema: z.ZodType<VaultConnectionSettingsUpdateResponse>;
//# sourceMappingURL=vaultconnectionsettingsupdateop.d.ts.map