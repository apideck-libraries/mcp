import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetInvoiceItemsResponse } from "./getinvoiceitemsresponse.js";
import { InvoiceItemsFilter } from "./invoiceitemsfilter.js";
import { InvoiceItemsSort } from "./invoiceitemssort.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingInvoiceItemsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingInvoiceItemsAllGlobals$zodSchema: z.ZodType<AccountingInvoiceItemsAllGlobals>;
export type AccountingInvoiceItemsAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: InvoiceItemsFilter | undefined;
    sort?: InvoiceItemsSort | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingInvoiceItemsAllRequest$zodSchema: z.ZodType<AccountingInvoiceItemsAllRequest>;
export type AccountingInvoiceItemsAllResponseResult = GetInvoiceItemsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingInvoiceItemsAllResponseResult$zodSchema: z.ZodType<AccountingInvoiceItemsAllResponseResult>;
export type AccountingInvoiceItemsAllResponse = {
    Result: GetInvoiceItemsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingInvoiceItemsAllResponse$zodSchema: z.ZodType<AccountingInvoiceItemsAllResponse>;
//# sourceMappingURL=accountinginvoiceitemsallop.d.ts.map