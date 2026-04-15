import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { LedgerAccountInput } from "./ledgeraccount.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateLedgerAccountResponse } from "./updateledgeraccountresponse.js";
export type AccountingLedgerAccountsUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingLedgerAccountsUpdateGlobals$zodSchema: z.ZodType<AccountingLedgerAccountsUpdateGlobals>;
export type AccountingLedgerAccountsUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    body: LedgerAccountInput;
};
export declare const AccountingLedgerAccountsUpdateRequest$zodSchema: z.ZodType<AccountingLedgerAccountsUpdateRequest>;
export type AccountingLedgerAccountsUpdateResponse = UpdateLedgerAccountResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingLedgerAccountsUpdateResponse$zodSchema: z.ZodType<AccountingLedgerAccountsUpdateResponse>;
//# sourceMappingURL=accountingledgeraccountsupdateop.d.ts.map