import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetDepartmentResponse } from "./getdepartmentresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type HrisDepartmentsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const HrisDepartmentsOneGlobals$zodSchema: z.ZodType<HrisDepartmentsOneGlobals>;
export type HrisDepartmentsOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const HrisDepartmentsOneRequest$zodSchema: z.ZodType<HrisDepartmentsOneRequest>;
export type HrisDepartmentsOneResponse = GetDepartmentResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const HrisDepartmentsOneResponse$zodSchema: z.ZodType<HrisDepartmentsOneResponse>;
//# sourceMappingURL=hrisdepartmentsoneop.d.ts.map