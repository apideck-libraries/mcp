import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { EmployeesFilter } from "./employeesfilter.js";
import { EmployeesSort } from "./employeessort.js";
import { GetEmployeesResponse } from "./getemployeesresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type HrisEmployeesAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const HrisEmployeesAllGlobals$zodSchema: z.ZodType<HrisEmployeesAllGlobals>;
export type HrisEmployeesAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: EmployeesFilter | undefined;
    sort?: EmployeesSort | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const HrisEmployeesAllRequest$zodSchema: z.ZodType<HrisEmployeesAllRequest>;
export type HrisEmployeesAllResponseResult = GetEmployeesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const HrisEmployeesAllResponseResult$zodSchema: z.ZodType<HrisEmployeesAllResponseResult>;
export type HrisEmployeesAllResponse = {
    Result: GetEmployeesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const HrisEmployeesAllResponse$zodSchema: z.ZodType<HrisEmployeesAllResponse>;
//# sourceMappingURL=hrisemployeesallop.d.ts.map