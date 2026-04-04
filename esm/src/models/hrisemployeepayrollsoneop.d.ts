import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetEmployeePayrollResponse } from "./getemployeepayrollresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type HrisEmployeePayrollsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const HrisEmployeePayrollsOneGlobals$zodSchema: z.ZodType<HrisEmployeePayrollsOneGlobals>;
export type HrisEmployeePayrollsOneRequest = {
    payroll_id: string;
    employee_id: string;
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    fields?: string | null | undefined;
};
export declare const HrisEmployeePayrollsOneRequest$zodSchema: z.ZodType<HrisEmployeePayrollsOneRequest>;
export type HrisEmployeePayrollsOneResponse = GetEmployeePayrollResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const HrisEmployeePayrollsOneResponse$zodSchema: z.ZodType<HrisEmployeePayrollsOneResponse>;
//# sourceMappingURL=hrisemployeepayrollsoneop.d.ts.map