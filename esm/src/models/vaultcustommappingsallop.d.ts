import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetCustomMappingsResponse } from "./getcustommappingsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type VaultCustomMappingsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const VaultCustomMappingsAllGlobals$zodSchema: z.ZodType<VaultCustomMappingsAllGlobals>;
export type VaultCustomMappingsAllRequest = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    unified_api: string;
    service_id: string;
};
export declare const VaultCustomMappingsAllRequest$zodSchema: z.ZodType<VaultCustomMappingsAllRequest>;
export type VaultCustomMappingsAllResponse = GetCustomMappingsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const VaultCustomMappingsAllResponse$zodSchema: z.ZodType<VaultCustomMappingsAllResponse>;
//# sourceMappingURL=vaultcustommappingsallop.d.ts.map