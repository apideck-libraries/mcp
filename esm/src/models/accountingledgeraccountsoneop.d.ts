import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetLedgerAccountResponse } from "./getledgeraccountresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingLedgerAccountsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingLedgerAccountsOneGlobals$zodSchema: z.ZodType<AccountingLedgerAccountsOneGlobals>;
export type AccountingLedgerAccountsOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingLedgerAccountsOneRequest$zodSchema: z.ZodType<AccountingLedgerAccountsOneRequest>;
export type AccountingLedgerAccountsOneResponse = GetLedgerAccountResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingLedgerAccountsOneResponse$zodSchema: z.ZodType<AccountingLedgerAccountsOneResponse>;
//# sourceMappingURL=accountingledgeraccountsoneop.d.ts.map