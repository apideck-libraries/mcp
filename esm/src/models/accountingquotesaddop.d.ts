import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateQuoteResponse } from "./createquoteresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { QuoteInput } from "./quote.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingQuotesAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingQuotesAddGlobals$zodSchema: z.ZodType<AccountingQuotesAddGlobals>;
export type AccountingQuotesAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    body: QuoteInput;
};
export declare const AccountingQuotesAddRequest$zodSchema: z.ZodType<AccountingQuotesAddRequest>;
export type AccountingQuotesAddResponse = CreateQuoteResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingQuotesAddResponse$zodSchema: z.ZodType<AccountingQuotesAddResponse>;
//# sourceMappingURL=accountingquotesaddop.d.ts.map