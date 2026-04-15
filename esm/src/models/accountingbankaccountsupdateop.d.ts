import * as z from "zod";
import { AccountingBankAccountInput } from "./accountingbankaccount.js";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateBankAccountResponse } from "./updatebankaccountresponse.js";
export type AccountingBankAccountsUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingBankAccountsUpdateGlobals$zodSchema: z.ZodType<AccountingBankAccountsUpdateGlobals>;
export type AccountingBankAccountsUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: AccountingBankAccountInput;
};
export declare const AccountingBankAccountsUpdateRequest$zodSchema: z.ZodType<AccountingBankAccountsUpdateRequest>;
export type AccountingBankAccountsUpdateResponse = UpdateBankAccountResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingBankAccountsUpdateResponse$zodSchema: z.ZodType<AccountingBankAccountsUpdateResponse>;
//# sourceMappingURL=accountingbankaccountsupdateop.d.ts.map