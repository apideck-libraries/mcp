import * as z from "zod";
import { AccountingDepartmentInput } from "./accountingdepartment.js";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateAccountingDepartmentResponse } from "./updateaccountingdepartmentresponse.js";
export type AccountingDepartmentsUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingDepartmentsUpdateGlobals$zodSchema: z.ZodType<AccountingDepartmentsUpdateGlobals>;
export type AccountingDepartmentsUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: AccountingDepartmentInput;
};
export declare const AccountingDepartmentsUpdateRequest$zodSchema: z.ZodType<AccountingDepartmentsUpdateRequest>;
export type AccountingDepartmentsUpdateResponse = UpdateAccountingDepartmentResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingDepartmentsUpdateResponse$zodSchema: z.ZodType<AccountingDepartmentsUpdateResponse>;
//# sourceMappingURL=accountingdepartmentsupdateop.d.ts.map