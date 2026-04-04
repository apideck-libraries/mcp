import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetBankFeedAccountResponse } from "./getbankfeedaccountresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingBankFeedAccountsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingBankFeedAccountsOneGlobals$zodSchema: z.ZodType<AccountingBankFeedAccountsOneGlobals>;
export type AccountingBankFeedAccountsOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingBankFeedAccountsOneRequest$zodSchema: z.ZodType<AccountingBankFeedAccountsOneRequest>;
export type AccountingBankFeedAccountsOneResponse = GetBankFeedAccountResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingBankFeedAccountsOneResponse$zodSchema: z.ZodType<AccountingBankFeedAccountsOneResponse>;
//# sourceMappingURL=accountingbankfeedaccountsoneop.d.ts.map