import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetCustomMappingsResponse } from "./getcustommappingsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type VaultConnectionCustomMappingsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const VaultConnectionCustomMappingsAllGlobals$zodSchema: z.ZodType<VaultConnectionCustomMappingsAllGlobals>;
export type VaultConnectionCustomMappingsAllRequest = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    unified_api: string;
    service_id: string;
    resource: string;
    resource_id?: string | undefined;
};
export declare const VaultConnectionCustomMappingsAllRequest$zodSchema: z.ZodType<VaultConnectionCustomMappingsAllRequest>;
export type VaultConnectionCustomMappingsAllResponse = GetCustomMappingsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const VaultConnectionCustomMappingsAllResponse$zodSchema: z.ZodType<VaultConnectionCustomMappingsAllResponse>;
//# sourceMappingURL=vaultconnectioncustommappingsallop.d.ts.map