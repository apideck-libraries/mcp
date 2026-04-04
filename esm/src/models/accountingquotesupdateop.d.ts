import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { QuoteInput } from "./quote.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateQuoteResponse } from "./updatequoteresponse.js";
export type AccountingQuotesUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingQuotesUpdateGlobals$zodSchema: z.ZodType<AccountingQuotesUpdateGlobals>;
export type AccountingQuotesUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    body: QuoteInput;
};
export declare const AccountingQuotesUpdateRequest$zodSchema: z.ZodType<AccountingQuotesUpdateRequest>;
export type AccountingQuotesUpdateResponse = UpdateQuoteResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingQuotesUpdateResponse$zodSchema: z.ZodType<AccountingQuotesUpdateResponse>;
//# sourceMappingURL=accountingquotesupdateop.d.ts.map