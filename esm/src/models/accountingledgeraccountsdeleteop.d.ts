import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteLedgerAccountResponse } from "./deleteledgeraccountresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingLedgerAccountsDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingLedgerAccountsDeleteGlobals$zodSchema: z.ZodType<AccountingLedgerAccountsDeleteGlobals>;
export type AccountingLedgerAccountsDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingLedgerAccountsDeleteRequest$zodSchema: z.ZodType<AccountingLedgerAccountsDeleteRequest>;
export type AccountingLedgerAccountsDeleteResponse = DeleteLedgerAccountResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingLedgerAccountsDeleteResponse$zodSchema: z.ZodType<AccountingLedgerAccountsDeleteResponse>;
//# sourceMappingURL=accountingledgeraccountsdeleteop.d.ts.map