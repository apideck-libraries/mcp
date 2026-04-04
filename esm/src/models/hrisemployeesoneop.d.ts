import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { EmployeesOneFilter } from "./employeesonefilter.js";
import { GetEmployeeResponse } from "./getemployeeresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type HrisEmployeesOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const HrisEmployeesOneGlobals$zodSchema: z.ZodType<HrisEmployeesOneGlobals>;
export type HrisEmployeesOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
    filter?: EmployeesOneFilter | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
};
export declare const HrisEmployeesOneRequest$zodSchema: z.ZodType<HrisEmployeesOneRequest>;
export type HrisEmployeesOneResponse = GetEmployeeResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const HrisEmployeesOneResponse$zodSchema: z.ZodType<HrisEmployeesOneResponse>;
//# sourceMappingURL=hrisemployeesoneop.d.ts.map