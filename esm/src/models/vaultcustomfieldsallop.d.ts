import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetCustomFieldsResponse } from "./getcustomfieldsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type VaultCustomFieldsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const VaultCustomFieldsAllGlobals$zodSchema: z.ZodType<VaultCustomFieldsAllGlobals>;
export type VaultCustomFieldsAllRequest = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    unified_api: string;
    service_id: string;
    resource: string;
    resource_id?: string | undefined;
};
export declare const VaultCustomFieldsAllRequest$zodSchema: z.ZodType<VaultCustomFieldsAllRequest>;
export type VaultCustomFieldsAllResponse = GetCustomFieldsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const VaultCustomFieldsAllResponse$zodSchema: z.ZodType<VaultCustomFieldsAllResponse>;
//# sourceMappingURL=vaultcustomfieldsallop.d.ts.map