import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetAccountingEmployeeResponse } from "./getaccountingemployeeresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingEmployeesOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingEmployeesOneGlobals$zodSchema: z.ZodType<AccountingEmployeesOneGlobals>;
export type AccountingEmployeesOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingEmployeesOneRequest$zodSchema: z.ZodType<AccountingEmployeesOneRequest>;
export type AccountingEmployeesOneResponse = GetAccountingEmployeeResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingEmployeesOneResponse$zodSchema: z.ZodType<AccountingEmployeesOneResponse>;
//# sourceMappingURL=accountingemployeesoneop.d.ts.map