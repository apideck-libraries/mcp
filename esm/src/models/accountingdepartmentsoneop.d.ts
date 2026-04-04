import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetAccountingDepartmentResponse } from "./getaccountingdepartmentresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingDepartmentsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingDepartmentsOneGlobals$zodSchema: z.ZodType<AccountingDepartmentsOneGlobals>;
export type AccountingDepartmentsOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingDepartmentsOneRequest$zodSchema: z.ZodType<AccountingDepartmentsOneRequest>;
export type AccountingDepartmentsOneResponse = GetAccountingDepartmentResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingDepartmentsOneResponse$zodSchema: z.ZodType<AccountingDepartmentsOneResponse>;
//# sourceMappingURL=accountingdepartmentsoneop.d.ts.map