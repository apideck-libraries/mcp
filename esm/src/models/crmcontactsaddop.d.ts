import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { ContactInput } from "./contact.js";
import { CreateContactResponse } from "./createcontactresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmContactsAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmContactsAddGlobals$zodSchema: z.ZodType<CrmContactsAddGlobals>;
export type CrmContactsAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: ContactInput;
};
export declare const CrmContactsAddRequest$zodSchema: z.ZodType<CrmContactsAddRequest>;
export type CrmContactsAddResponse = CreateContactResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmContactsAddResponse$zodSchema: z.ZodType<CrmContactsAddResponse>;
//# sourceMappingURL=crmcontactsaddop.d.ts.map