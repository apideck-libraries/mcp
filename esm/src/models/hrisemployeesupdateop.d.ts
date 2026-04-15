import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { EmployeeInput } from "./employee.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateEmployeeResponse } from "./updateemployeeresponse.js";
export type HrisEmployeesUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const HrisEmployeesUpdateGlobals$zodSchema: z.ZodType<HrisEmployeesUpdateGlobals>;
export type HrisEmployeesUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: EmployeeInput;
};
export declare const HrisEmployeesUpdateRequest$zodSchema: z.ZodType<HrisEmployeesUpdateRequest>;
export type HrisEmployeesUpdateResponse = UpdateEmployeeResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const HrisEmployeesUpdateResponse$zodSchema: z.ZodType<HrisEmployeesUpdateResponse>;
//# sourceMappingURL=hrisemployeesupdateop.d.ts.map