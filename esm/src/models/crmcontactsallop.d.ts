import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { ContactsFilter } from "./contactsfilter.js";
import { ContactsSort } from "./contactssort.js";
import { GetContactsResponse } from "./getcontactsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmContactsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmContactsAllGlobals$zodSchema: z.ZodType<CrmContactsAllGlobals>;
export type CrmContactsAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: ContactsFilter | undefined;
    sort?: ContactsSort | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const CrmContactsAllRequest$zodSchema: z.ZodType<CrmContactsAllRequest>;
export type CrmContactsAllResponseResult = GetContactsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmContactsAllResponseResult$zodSchema: z.ZodType<CrmContactsAllResponseResult>;
export type CrmContactsAllResponse = {
    Result: GetContactsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const CrmContactsAllResponse$zodSchema: z.ZodType<CrmContactsAllResponse>;
//# sourceMappingURL=crmcontactsallop.d.ts.map