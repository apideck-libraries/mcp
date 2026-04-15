import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetPayrollResponse } from "./getpayrollresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type HrisPayrollsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const HrisPayrollsOneGlobals$zodSchema: z.ZodType<HrisPayrollsOneGlobals>;
export type HrisPayrollsOneRequest = {
    payroll_id: string;
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    fields?: string | null | undefined;
};
export declare const HrisPayrollsOneRequest$zodSchema: z.ZodType<HrisPayrollsOneRequest>;
export type HrisPayrollsOneResponse = GetPayrollResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const HrisPayrollsOneResponse$zodSchema: z.ZodType<HrisPayrollsOneResponse>;
//# sourceMappingURL=hrispayrollsoneop.d.ts.map