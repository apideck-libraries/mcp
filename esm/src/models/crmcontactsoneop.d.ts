import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { ContactsFilter } from "./contactsfilter.js";
import { GetContactResponse } from "./getcontactresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmContactsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmContactsOneGlobals$zodSchema: z.ZodType<CrmContactsOneGlobals>;
export type CrmContactsOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
    filter?: ContactsFilter | undefined;
};
export declare const CrmContactsOneRequest$zodSchema: z.ZodType<CrmContactsOneRequest>;
export type CrmContactsOneResponse = GetContactResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmContactsOneResponse$zodSchema: z.ZodType<CrmContactsOneResponse>;
//# sourceMappingURL=crmcontactsoneop.d.ts.map