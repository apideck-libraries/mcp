import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetBankFeedStatementResponse } from "./getbankfeedstatementresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingBankFeedStatementsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingBankFeedStatementsOneGlobals$zodSchema: z.ZodType<AccountingBankFeedStatementsOneGlobals>;
export type AccountingBankFeedStatementsOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingBankFeedStatementsOneRequest$zodSchema: z.ZodType<AccountingBankFeedStatementsOneRequest>;
export type AccountingBankFeedStatementsOneResponse = GetBankFeedStatementResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingBankFeedStatementsOneResponse$zodSchema: z.ZodType<AccountingBankFeedStatementsOneResponse>;
//# sourceMappingURL=accountingbankfeedstatementsoneop.d.ts.map