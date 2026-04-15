import * as z from "zod";
import { AccountingEmployeeInput } from "./accountingemployee.js";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateAccountingEmployeeResponse } from "./createaccountingemployeeresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingEmployeesAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingEmployeesAddGlobals$zodSchema: z.ZodType<AccountingEmployeesAddGlobals>;
export type AccountingEmployeesAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: AccountingEmployeeInput;
};
export declare const AccountingEmployeesAddRequest$zodSchema: z.ZodType<AccountingEmployeesAddRequest>;
export type AccountingEmployeesAddResponse = CreateAccountingEmployeeResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingEmployeesAddResponse$zodSchema: z.ZodType<AccountingEmployeesAddResponse>;
//# sourceMappingURL=accountingemployeesaddop.d.ts.map