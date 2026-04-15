import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreditNotesFilter } from "./creditnotesfilter.js";
import { CreditNotesSort } from "./creditnotessort.js";
import { GetCreditNotesResponse } from "./getcreditnotesresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingCreditNotesAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingCreditNotesAllGlobals$zodSchema: z.ZodType<AccountingCreditNotesAllGlobals>;
export type AccountingCreditNotesAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: CreditNotesFilter | undefined;
    sort?: CreditNotesSort | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingCreditNotesAllRequest$zodSchema: z.ZodType<AccountingCreditNotesAllRequest>;
export type AccountingCreditNotesAllResponseResult = GetCreditNotesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingCreditNotesAllResponseResult$zodSchema: z.ZodType<AccountingCreditNotesAllResponseResult>;
export type AccountingCreditNotesAllResponse = {
    Result: GetCreditNotesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingCreditNotesAllResponse$zodSchema: z.ZodType<AccountingCreditNotesAllResponse>;
//# sourceMappingURL=accountingcreditnotesallop.d.ts.map