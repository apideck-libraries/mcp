import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { BankAccountsFilter } from "./bankaccountsfilter.js";
import { BankAccountsSort } from "./bankaccountssort.js";
import { GetBankAccountsResponse } from "./getbankaccountsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingBankAccountsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingBankAccountsAllGlobals$zodSchema: z.ZodType<AccountingBankAccountsAllGlobals>;
export type AccountingBankAccountsAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: BankAccountsFilter | undefined;
    sort?: BankAccountsSort | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingBankAccountsAllRequest$zodSchema: z.ZodType<AccountingBankAccountsAllRequest>;
export type AccountingBankAccountsAllResponseResult = GetBankAccountsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingBankAccountsAllResponseResult$zodSchema: z.ZodType<AccountingBankAccountsAllResponseResult>;
export type AccountingBankAccountsAllResponse = {
    Result: GetBankAccountsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingBankAccountsAllResponse$zodSchema: z.ZodType<AccountingBankAccountsAllResponse>;
//# sourceMappingURL=accountingbankaccountsallop.d.ts.map