import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteBankAccountResponse } from "./deletebankaccountresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingBankAccountsDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingBankAccountsDeleteGlobals$zodSchema: z.ZodType<AccountingBankAccountsDeleteGlobals>;
export type AccountingBankAccountsDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingBankAccountsDeleteRequest$zodSchema: z.ZodType<AccountingBankAccountsDeleteRequest>;
export type AccountingBankAccountsDeleteResponse = DeleteBankAccountResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingBankAccountsDeleteResponse$zodSchema: z.ZodType<AccountingBankAccountsDeleteResponse>;
//# sourceMappingURL=accountingbankaccountsdeleteop.d.ts.map