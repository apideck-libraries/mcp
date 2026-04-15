import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetInvoiceResponse } from "./getinvoiceresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingInvoicesOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingInvoicesOneGlobals$zodSchema: z.ZodType<AccountingInvoicesOneGlobals>;
export type AccountingInvoicesOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingInvoicesOneRequest$zodSchema: z.ZodType<AccountingInvoicesOneRequest>;
export type AccountingInvoicesOneResponse = GetInvoiceResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingInvoicesOneResponse$zodSchema: z.ZodType<AccountingInvoicesOneResponse>;
//# sourceMappingURL=accountinginvoicesoneop.d.ts.map