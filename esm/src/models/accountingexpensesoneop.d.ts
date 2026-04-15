import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetExpenseResponse } from "./getexpenseresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingExpensesOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingExpensesOneGlobals$zodSchema: z.ZodType<AccountingExpensesOneGlobals>;
export type AccountingExpensesOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingExpensesOneRequest$zodSchema: z.ZodType<AccountingExpensesOneRequest>;
export type AccountingExpensesOneResponse = GetExpenseResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingExpensesOneResponse$zodSchema: z.ZodType<AccountingExpensesOneResponse>;
//# sourceMappingURL=accountingexpensesoneop.d.ts.map