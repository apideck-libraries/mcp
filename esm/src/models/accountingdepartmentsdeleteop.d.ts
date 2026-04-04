import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteAccountingDepartmentResponse } from "./deleteaccountingdepartmentresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingDepartmentsDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingDepartmentsDeleteGlobals$zodSchema: z.ZodType<AccountingDepartmentsDeleteGlobals>;
export type AccountingDepartmentsDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingDepartmentsDeleteRequest$zodSchema: z.ZodType<AccountingDepartmentsDeleteRequest>;
export type AccountingDepartmentsDeleteResponse = DeleteAccountingDepartmentResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingDepartmentsDeleteResponse$zodSchema: z.ZodType<AccountingDepartmentsDeleteResponse>;
//# sourceMappingURL=accountingdepartmentsdeleteop.d.ts.map