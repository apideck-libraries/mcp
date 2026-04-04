import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateConsentRequest } from "./updateconsentrequest.js";
import { UpdateConsentResponse } from "./updateconsentresponse.js";
export type VaultConnectionConsentUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const VaultConnectionConsentUpdateGlobals$zodSchema: z.ZodType<VaultConnectionConsentUpdateGlobals>;
export type VaultConnectionConsentUpdateRequest = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    service_id: string;
    unified_api: string;
    body: UpdateConsentRequest;
};
export declare const VaultConnectionConsentUpdateRequest$zodSchema: z.ZodType<VaultConnectionConsentUpdateRequest>;
export type VaultConnectionConsentUpdateResponse = UpdateConsentResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const VaultConnectionConsentUpdateResponse$zodSchema: z.ZodType<VaultConnectionConsentUpdateResponse>;
//# sourceMappingURL=vaultconnectionconsentupdateop.d.ts.map