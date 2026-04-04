import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetConsentRecordsResponse } from "./getconsentrecordsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type VaultConnectionConsentsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const VaultConnectionConsentsAllGlobals$zodSchema: z.ZodType<VaultConnectionConsentsAllGlobals>;
export type VaultConnectionConsentsAllRequest = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    service_id: string;
    unified_api: string;
};
export declare const VaultConnectionConsentsAllRequest$zodSchema: z.ZodType<VaultConnectionConsentsAllRequest>;
export type VaultConnectionConsentsAllResponse = GetConsentRecordsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const VaultConnectionConsentsAllResponse$zodSchema: z.ZodType<VaultConnectionConsentsAllResponse>;
//# sourceMappingURL=vaultconnectionconsentsallop.d.ts.map