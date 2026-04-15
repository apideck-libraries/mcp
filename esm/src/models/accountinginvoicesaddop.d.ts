import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateInvoiceResponse } from "./createinvoiceresponse.js";
import { InvoiceInput } from "./invoice.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingInvoicesAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingInvoicesAddGlobals$zodSchema: z.ZodType<AccountingInvoicesAddGlobals>;
export type AccountingInvoicesAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    body: InvoiceInput;
};
export declare const AccountingInvoicesAddRequest$zodSchema: z.ZodType<AccountingInvoicesAddRequest>;
export type AccountingInvoicesAddResponse = CreateInvoiceResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingInvoicesAddResponse$zodSchema: z.ZodType<AccountingInvoicesAddResponse>;
//# sourceMappingURL=accountinginvoicesaddop.d.ts.map