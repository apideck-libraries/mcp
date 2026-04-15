import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { BankAccountFilter } from "./bankaccountfilter.js";
import { GetBankAccountResponse } from "./getbankaccountresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingBankAccountsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingBankAccountsOneGlobals$zodSchema: z.ZodType<AccountingBankAccountsOneGlobals>;
export type AccountingBankAccountsOneRequest = {
    id: string;
    filter?: BankAccountFilter | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingBankAccountsOneRequest$zodSchema: z.ZodType<AccountingBankAccountsOneRequest>;
export type AccountingBankAccountsOneResponse = GetBankAccountResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingBankAccountsOneResponse$zodSchema: z.ZodType<AccountingBankAccountsOneResponse>;
//# sourceMappingURL=accountingbankaccountsoneop.d.ts.map