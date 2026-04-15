import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateLedgerAccountResponse } from "./createledgeraccountresponse.js";
import { LedgerAccountInput } from "./ledgeraccount.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingLedgerAccountsAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingLedgerAccountsAddGlobals$zodSchema: z.ZodType<AccountingLedgerAccountsAddGlobals>;
export type AccountingLedgerAccountsAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    body: LedgerAccountInput;
};
export declare const AccountingLedgerAccountsAddRequest$zodSchema: z.ZodType<AccountingLedgerAccountsAddRequest>;
export type AccountingLedgerAccountsAddResponse = CreateLedgerAccountResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingLedgerAccountsAddResponse$zodSchema: z.ZodType<AccountingLedgerAccountsAddResponse>;
//# sourceMappingURL=accountingledgeraccountsaddop.d.ts.map