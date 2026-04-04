import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteContactResponse } from "./deletecontactresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmContactsDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmContactsDeleteGlobals$zodSchema: z.ZodType<CrmContactsDeleteGlobals>;
export type CrmContactsDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const CrmContactsDeleteRequest$zodSchema: z.ZodType<CrmContactsDeleteRequest>;
export type CrmContactsDeleteResponse = DeleteContactResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmContactsDeleteResponse$zodSchema: z.ZodType<CrmContactsDeleteResponse>;
//# sourceMappingURL=crmcontactsdeleteop.d.ts.map