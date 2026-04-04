import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetExpenseReportResponse } from "./getexpensereportresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingExpenseReportsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingExpenseReportsOneGlobals$zodSchema: z.ZodType<AccountingExpenseReportsOneGlobals>;
export type AccountingExpenseReportsOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingExpenseReportsOneRequest$zodSchema: z.ZodType<AccountingExpenseReportsOneRequest>;
export type AccountingExpenseReportsOneResponse = GetExpenseReportResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingExpenseReportsOneResponse$zodSchema: z.ZodType<AccountingExpenseReportsOneResponse>;
//# sourceMappingURL=accountingexpensereportsoneop.d.ts.map