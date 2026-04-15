import * as z from "zod";
import { AccountingEmployeeInput } from "./accountingemployee.js";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateAccountingEmployeeResponse } from "./updateaccountingemployeeresponse.js";
export type AccountingEmployeesUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingEmployeesUpdateGlobals$zodSchema: z.ZodType<AccountingEmployeesUpdateGlobals>;
export type AccountingEmployeesUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: AccountingEmployeeInput;
};
export declare const AccountingEmployeesUpdateRequest$zodSchema: z.ZodType<AccountingEmployeesUpdateRequest>;
export type AccountingEmployeesUpdateResponse = UpdateAccountingEmployeeResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingEmployeesUpdateResponse$zodSchema: z.ZodType<AccountingEmployeesUpdateResponse>;
//# sourceMappingURL=accountingemployeesupdateop.d.ts.map