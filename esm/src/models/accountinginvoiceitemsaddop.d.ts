import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateInvoiceItemResponse } from "./createinvoiceitemresponse.js";
import { InvoiceItemInput } from "./invoiceitem.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingInvoiceItemsAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingInvoiceItemsAddGlobals$zodSchema: z.ZodType<AccountingInvoiceItemsAddGlobals>;
export type AccountingInvoiceItemsAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    body: InvoiceItemInput;
};
export declare const AccountingInvoiceItemsAddRequest$zodSchema: z.ZodType<AccountingInvoiceItemsAddRequest>;
export type AccountingInvoiceItemsAddResponse = CreateInvoiceItemResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingInvoiceItemsAddResponse$zodSchema: z.ZodType<AccountingInvoiceItemsAddResponse>;
//# sourceMappingURL=accountinginvoiceitemsaddop.d.ts.map