import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { BankFeedAccountInput } from "./bankfeedaccount.js";
import { CreateBankFeedAccountResponse } from "./createbankfeedaccountresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingBankFeedAccountsAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingBankFeedAccountsAddGlobals$zodSchema: z.ZodType<AccountingBankFeedAccountsAddGlobals>;
export type AccountingBankFeedAccountsAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: BankFeedAccountInput;
};
export declare const AccountingBankFeedAccountsAddRequest$zodSchema: z.ZodType<AccountingBankFeedAccountsAddRequest>;
export type AccountingBankFeedAccountsAddResponse = CreateBankFeedAccountResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingBankFeedAccountsAddResponse$zodSchema: z.ZodType<AccountingBankFeedAccountsAddResponse>;
//# sourceMappingURL=accountingbankfeedaccountsaddop.d.ts.map