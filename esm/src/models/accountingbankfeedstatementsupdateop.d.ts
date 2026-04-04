import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { BankFeedStatementInput } from "./bankfeedstatement.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateBankFeedStatementResponse } from "./updatebankfeedstatementresponse.js";
export type AccountingBankFeedStatementsUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingBankFeedStatementsUpdateGlobals$zodSchema: z.ZodType<AccountingBankFeedStatementsUpdateGlobals>;
export type AccountingBankFeedStatementsUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: BankFeedStatementInput;
};
export declare const AccountingBankFeedStatementsUpdateRequest$zodSchema: z.ZodType<AccountingBankFeedStatementsUpdateRequest>;
export type AccountingBankFeedStatementsUpdateResponse = UpdateBankFeedStatementResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingBankFeedStatementsUpdateResponse$zodSchema: z.ZodType<AccountingBankFeedStatementsUpdateResponse>;
//# sourceMappingURL=accountingbankfeedstatementsupdateop.d.ts.map