import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteExpenseReportResponse } from "./deleteexpensereportresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingExpenseReportsDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingExpenseReportsDeleteGlobals$zodSchema: z.ZodType<AccountingExpenseReportsDeleteGlobals>;
export type AccountingExpenseReportsDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingExpenseReportsDeleteRequest$zodSchema: z.ZodType<AccountingExpenseReportsDeleteRequest>;
export type AccountingExpenseReportsDeleteResponse = DeleteExpenseReportResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingExpenseReportsDeleteResponse$zodSchema: z.ZodType<AccountingExpenseReportsDeleteResponse>;
//# sourceMappingURL=accountingexpensereportsdeleteop.d.ts.map