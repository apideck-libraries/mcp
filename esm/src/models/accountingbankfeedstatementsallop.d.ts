import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetBankFeedStatementsResponse } from "./getbankfeedstatementsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingBankFeedStatementsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingBankFeedStatementsAllGlobals$zodSchema: z.ZodType<AccountingBankFeedStatementsAllGlobals>;
export type AccountingBankFeedStatementsAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingBankFeedStatementsAllRequest$zodSchema: z.ZodType<AccountingBankFeedStatementsAllRequest>;
export type AccountingBankFeedStatementsAllResponseResult = GetBankFeedStatementsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingBankFeedStatementsAllResponseResult$zodSchema: z.ZodType<AccountingBankFeedStatementsAllResponseResult>;
export type AccountingBankFeedStatementsAllResponse = {
    Result: GetBankFeedStatementsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingBankFeedStatementsAllResponse$zodSchema: z.ZodType<AccountingBankFeedStatementsAllResponse>;
//# sourceMappingURL=accountingbankfeedstatementsallop.d.ts.map