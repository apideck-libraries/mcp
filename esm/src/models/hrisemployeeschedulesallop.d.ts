import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetEmployeeSchedulesResponse } from "./getemployeeschedulesresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type HrisEmployeeSchedulesAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const HrisEmployeeSchedulesAllGlobals$zodSchema: z.ZodType<HrisEmployeeSchedulesAllGlobals>;
export type HrisEmployeeSchedulesAllRequest = {
    employee_id: string;
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const HrisEmployeeSchedulesAllRequest$zodSchema: z.ZodType<HrisEmployeeSchedulesAllRequest>;
export type HrisEmployeeSchedulesAllResponse = GetEmployeeSchedulesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const HrisEmployeeSchedulesAllResponse$zodSchema: z.ZodType<HrisEmployeeSchedulesAllResponse>;
//# sourceMappingURL=hrisemployeeschedulesallop.d.ts.map