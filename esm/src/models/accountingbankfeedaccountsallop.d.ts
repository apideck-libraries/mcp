import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetBankFeedAccountsResponse } from "./getbankfeedaccountsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingBankFeedAccountsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingBankFeedAccountsAllGlobals$zodSchema: z.ZodType<AccountingBankFeedAccountsAllGlobals>;
export type AccountingBankFeedAccountsAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingBankFeedAccountsAllRequest$zodSchema: z.ZodType<AccountingBankFeedAccountsAllRequest>;
export type AccountingBankFeedAccountsAllResponseResult = GetBankFeedAccountsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingBankFeedAccountsAllResponseResult$zodSchema: z.ZodType<AccountingBankFeedAccountsAllResponseResult>;
export type AccountingBankFeedAccountsAllResponse = {
    Result: GetBankFeedAccountsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingBankFeedAccountsAllResponse$zodSchema: z.ZodType<AccountingBankFeedAccountsAllResponse>;
//# sourceMappingURL=accountingbankfeedaccountsallop.d.ts.map