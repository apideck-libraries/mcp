import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { InvoiceInput } from "./invoice.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateInvoiceResponse } from "./updateinvoiceresponse.js";
export type AccountingInvoicesUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingInvoicesUpdateGlobals$zodSchema: z.ZodType<AccountingInvoicesUpdateGlobals>;
export type AccountingInvoicesUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: InvoiceInput;
};
export declare const AccountingInvoicesUpdateRequest$zodSchema: z.ZodType<AccountingInvoicesUpdateRequest>;
export type AccountingInvoicesUpdateResponse = UpdateInvoiceResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingInvoicesUpdateResponse$zodSchema: z.ZodType<AccountingInvoicesUpdateResponse>;
//# sourceMappingURL=accountinginvoicesupdateop.d.ts.map