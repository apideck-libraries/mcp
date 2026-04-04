import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetPayrollsResponse } from "./getpayrollsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { PayrollsFilter } from "./payrollsfilter.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type HrisPayrollsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const HrisPayrollsAllGlobals$zodSchema: z.ZodType<HrisPayrollsAllGlobals>;
export type HrisPayrollsAllRequest = {
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
export declare const HrisPayrollsAllRequest$zodSchema: z.ZodType<HrisPayrollsAllRequest>;
export type HrisPayrollsAllResponse = GetPayrollsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const HrisPayrollsAllResponse$zodSchema: z.ZodType<HrisPayrollsAllResponse>;
//# sourceMappingURL=hrispayrollsallop.d.ts.map