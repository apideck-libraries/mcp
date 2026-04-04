import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetLedgerAccountsResponse } from "./getledgeraccountsresponse.js";
import { LedgerAccountsFilter } from "./ledgeraccountsfilter.js";
import { LedgerAccountsSort } from "./ledgeraccountssort.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingLedgerAccountsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingLedgerAccountsAllGlobals$zodSchema: z.ZodType<AccountingLedgerAccountsAllGlobals>;
export type AccountingLedgerAccountsAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: LedgerAccountsFilter | undefined;
    sort?: LedgerAccountsSort | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingLedgerAccountsAllRequest$zodSchema: z.ZodType<AccountingLedgerAccountsAllRequest>;
export type AccountingLedgerAccountsAllResponseResult = GetLedgerAccountsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingLedgerAccountsAllResponseResult$zodSchema: z.ZodType<AccountingLedgerAccountsAllResponseResult>;
export type AccountingLedgerAccountsAllResponse = {
    Result: GetLedgerAccountsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingLedgerAccountsAllResponse$zodSchema: z.ZodType<AccountingLedgerAccountsAllResponse>;
//# sourceMappingURL=accountingledgeraccountsallop.d.ts.map