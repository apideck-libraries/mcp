import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteAccountingEmployeeResponse } from "./deleteaccountingemployeeresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingEmployeesDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingEmployeesDeleteGlobals$zodSchema: z.ZodType<AccountingEmployeesDeleteGlobals>;
export type AccountingEmployeesDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingEmployeesDeleteRequest$zodSchema: z.ZodType<AccountingEmployeesDeleteRequest>;
export type AccountingEmployeesDeleteResponse = DeleteAccountingEmployeeResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingEmployeesDeleteResponse$zodSchema: z.ZodType<AccountingEmployeesDeleteResponse>;
//# sourceMappingURL=accountingemployeesdeleteop.d.ts.map