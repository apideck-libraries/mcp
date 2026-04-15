import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetInvoiceItemResponse } from "./getinvoiceitemresponse.js";
import { InvoiceItemFilter } from "./invoiceitemfilter.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingInvoiceItemsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingInvoiceItemsOneGlobals$zodSchema: z.ZodType<AccountingInvoiceItemsOneGlobals>;
export type AccountingInvoiceItemsOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
    filter?: InvoiceItemFilter | undefined;
};
export declare const AccountingInvoiceItemsOneRequest$zodSchema: z.ZodType<AccountingInvoiceItemsOneRequest>;
export type AccountingInvoiceItemsOneResponse = GetInvoiceItemResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingInvoiceItemsOneResponse$zodSchema: z.ZodType<AccountingInvoiceItemsOneResponse>;
//# sourceMappingURL=accountinginvoiceitemsoneop.d.ts.map