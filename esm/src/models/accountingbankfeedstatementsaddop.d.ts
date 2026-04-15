import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { BankFeedStatementInput } from "./bankfeedstatement.js";
import { CreateBankFeedStatementResponse } from "./createbankfeedstatementresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingBankFeedStatementsAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingBankFeedStatementsAddGlobals$zodSchema: z.ZodType<AccountingBankFeedStatementsAddGlobals>;
export type AccountingBankFeedStatementsAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    body: BankFeedStatementInput;
};
export declare const AccountingBankFeedStatementsAddRequest$zodSchema: z.ZodType<AccountingBankFeedStatementsAddRequest>;
export type AccountingBankFeedStatementsAddResponse = CreateBankFeedStatementResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingBankFeedStatementsAddResponse$zodSchema: z.ZodType<AccountingBankFeedStatementsAddResponse>;
//# sourceMappingURL=accountingbankfeedstatementsaddop.d.ts.map