import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetConnectionResponse } from "./getconnectionresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type VaultConnectionSettingsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const VaultConnectionSettingsAllGlobals$zodSchema: z.ZodType<VaultConnectionSettingsAllGlobals>;
export type VaultConnectionSettingsAllRequest = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    unified_api: string;
    service_id: string;
    resource: string;
};
export declare const VaultConnectionSettingsAllRequest$zodSchema: z.ZodType<VaultConnectionSettingsAllRequest>;
export type VaultConnectionSettingsAllResponse = GetConnectionResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const VaultConnectionSettingsAllResponse$zodSchema: z.ZodType<VaultConnectionSettingsAllResponse>;
//# sourceMappingURL=vaultconnectionsettingsallop.d.ts.map