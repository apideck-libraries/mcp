import * as z from "zod";
import { AccountingBankAccountInput } from "./accountingbankaccount.js";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateBankAccountResponse } from "./createbankaccountresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingBankAccountsAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingBankAccountsAddGlobals$zodSchema: z.ZodType<AccountingBankAccountsAddGlobals>;
export type AccountingBankAccountsAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: AccountingBankAccountInput;
};
export declare const AccountingBankAccountsAddRequest$zodSchema: z.ZodType<AccountingBankAccountsAddRequest>;
export type AccountingBankAccountsAddResponse = CreateBankAccountResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingBankAccountsAddResponse$zodSchema: z.ZodType<AccountingBankAccountsAddResponse>;
//# sourceMappingURL=accountingbankaccountsaddop.d.ts.map