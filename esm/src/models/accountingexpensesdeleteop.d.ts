import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteExpenseResponse } from "./deleteexpenseresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingExpensesDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingExpensesDeleteGlobals$zodSchema: z.ZodType<AccountingExpensesDeleteGlobals>;
export type AccountingExpensesDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingExpensesDeleteRequest$zodSchema: z.ZodType<AccountingExpensesDeleteRequest>;
export type AccountingExpensesDeleteResponse = DeleteExpenseResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingExpensesDeleteResponse$zodSchema: z.ZodType<AccountingExpensesDeleteResponse>;
//# sourceMappingURL=accountingexpensesdeleteop.d.ts.map