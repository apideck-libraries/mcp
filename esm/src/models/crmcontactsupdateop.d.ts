import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { ContactInput } from "./contact.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateContactResponse } from "./updatecontactresponse.js";
export type CrmContactsUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmContactsUpdateGlobals$zodSchema: z.ZodType<CrmContactsUpdateGlobals>;
export type CrmContactsUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: ContactInput;
};
export declare const CrmContactsUpdateRequest$zodSchema: z.ZodType<CrmContactsUpdateRequest>;
export type CrmContactsUpdateResponse = UpdateContactResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmContactsUpdateResponse$zodSchema: z.ZodType<CrmContactsUpdateResponse>;
//# sourceMappingURL=crmcontactsupdateop.d.ts.map