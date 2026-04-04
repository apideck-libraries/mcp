import * as z from "zod";
import { AccountingDepartmentInput } from "./accountingdepartment.js";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateAccountingDepartmentResponse } from "./createaccountingdepartmentresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingDepartmentsAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingDepartmentsAddGlobals$zodSchema: z.ZodType<AccountingDepartmentsAddGlobals>;
export type AccountingDepartmentsAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    body: AccountingDepartmentInput;
};
export declare const AccountingDepartmentsAddRequest$zodSchema: z.ZodType<AccountingDepartmentsAddRequest>;
export type AccountingDepartmentsAddResponse = CreateAccountingDepartmentResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingDepartmentsAddResponse$zodSchema: z.ZodType<AccountingDepartmentsAddResponse>;
//# sourceMappingURL=accountingdepartmentsaddop.d.ts.map