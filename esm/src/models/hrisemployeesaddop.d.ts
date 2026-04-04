import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateEmployeeResponse } from "./createemployeeresponse.js";
import { EmployeeInput } from "./employee.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type HrisEmployeesAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const HrisEmployeesAddGlobals$zodSchema: z.ZodType<HrisEmployeesAddGlobals>;
export type HrisEmployeesAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: EmployeeInput;
};
export declare const HrisEmployeesAddRequest$zodSchema: z.ZodType<HrisEmployeesAddRequest>;
export type HrisEmployeesAddResponse = CreateEmployeeResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const HrisEmployeesAddResponse$zodSchema: z.ZodType<HrisEmployeesAddResponse>;
//# sourceMappingURL=hrisemployeesaddop.d.ts.map