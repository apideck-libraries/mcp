import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetInvoicesResponse } from "./getinvoicesresponse.js";
import { InvoicesFilter } from "./invoicesfilter.js";
import { InvoicesSort } from "./invoicessort.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingInvoicesAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingInvoicesAllGlobals$zodSchema: z.ZodType<AccountingInvoicesAllGlobals>;
export type AccountingInvoicesAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: InvoicesFilter | undefined;
    sort?: InvoicesSort | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingInvoicesAllRequest$zodSchema: z.ZodType<AccountingInvoicesAllRequest>;
export type AccountingInvoicesAllResponseResult = GetInvoicesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingInvoicesAllResponseResult$zodSchema: z.ZodType<AccountingInvoicesAllResponseResult>;
export type AccountingInvoicesAllResponse = {
    Result: GetInvoicesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingInvoicesAllResponse$zodSchema: z.ZodType<AccountingInvoicesAllResponse>;
//# sourceMappingURL=accountinginvoicesallop.d.ts.map