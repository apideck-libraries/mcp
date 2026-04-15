import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteBankFeedAccountResponse } from "./deletebankfeedaccountresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingBankFeedAccountsDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingBankFeedAccountsDeleteGlobals$zodSchema: z.ZodType<AccountingBankFeedAccountsDeleteGlobals>;
export type AccountingBankFeedAccountsDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingBankFeedAccountsDeleteRequest$zodSchema: z.ZodType<AccountingBankFeedAccountsDeleteRequest>;
export type AccountingBankFeedAccountsDeleteResponse = DeleteBankFeedAccountResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingBankFeedAccountsDeleteResponse$zodSchema: z.ZodType<AccountingBankFeedAccountsDeleteResponse>;
//# sourceMappingURL=accountingbankfeedaccountsdeleteop.d.ts.map