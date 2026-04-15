import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetQuoteResponse } from "./getquoteresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingQuotesOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingQuotesOneGlobals$zodSchema: z.ZodType<AccountingQuotesOneGlobals>;
export type AccountingQuotesOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingQuotesOneRequest$zodSchema: z.ZodType<AccountingQuotesOneRequest>;
export type AccountingQuotesOneResponse = GetQuoteResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingQuotesOneResponse$zodSchema: z.ZodType<AccountingQuotesOneResponse>;
//# sourceMappingURL=accountingquotesoneop.d.ts.map