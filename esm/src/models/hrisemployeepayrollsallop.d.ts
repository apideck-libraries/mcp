import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetEmployeePayrollsResponse } from "./getemployeepayrollsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { PayrollsFilter } from "./payrollsfilter.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type HrisEmployeePayrollsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const HrisEmployeePayrollsAllGlobals$zodSchema: z.ZodType<HrisEmployeePayrollsAllGlobals>;
export type HrisEmployeePayrollsAllRequest = {
    employee_id: string;
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    filter?: PayrollsFilter | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const HrisEmployeePayrollsAllRequest$zodSchema: z.ZodType<HrisEmployeePayrollsAllRequest>;
export type HrisEmployeePayrollsAllResponse = GetEmployeePayrollsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const HrisEmployeePayrollsAllResponse$zodSchema: z.ZodType<HrisEmployeePayrollsAllResponse>;
//# sourceMappingURL=hrisemployeepayrollsallop.d.ts.map