import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteBankFeedStatementResponse } from "./deletebankfeedstatementresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingBankFeedStatementsDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingBankFeedStatementsDeleteGlobals$zodSchema: z.ZodType<AccountingBankFeedStatementsDeleteGlobals>;
export type AccountingBankFeedStatementsDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingBankFeedStatementsDeleteRequest$zodSchema: z.ZodType<AccountingBankFeedStatementsDeleteRequest>;
export type AccountingBankFeedStatementsDeleteResponse = DeleteBankFeedStatementResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingBankFeedStatementsDeleteResponse$zodSchema: z.ZodType<AccountingBankFeedStatementsDeleteResponse>;
//# sourceMappingURL=accountingbankfeedstatementsdeleteop.d.ts.map