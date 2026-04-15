import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { BankFeedAccountInput } from "./bankfeedaccount.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateBankFeedAccountResponse } from "./updatebankfeedaccountresponse.js";
export type AccountingBankFeedAccountsUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingBankFeedAccountsUpdateGlobals$zodSchema: z.ZodType<AccountingBankFeedAccountsUpdateGlobals>;
export type AccountingBankFeedAccountsUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: BankFeedAccountInput;
};
export declare const AccountingBankFeedAccountsUpdateRequest$zodSchema: z.ZodType<AccountingBankFeedAccountsUpdateRequest>;
export type AccountingBankFeedAccountsUpdateResponse = UpdateBankFeedAccountResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingBankFeedAccountsUpdateResponse$zodSchema: z.ZodType<AccountingBankFeedAccountsUpdateResponse>;
//# sourceMappingURL=accountingbankfeedaccountsupdateop.d.ts.map