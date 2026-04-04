import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetDepartmentsResponse } from "./getdepartmentsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type HrisDepartmentsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const HrisDepartmentsAllGlobals$zodSchema: z.ZodType<HrisDepartmentsAllGlobals>;
export type HrisDepartmentsAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const HrisDepartmentsAllRequest$zodSchema: z.ZodType<HrisDepartmentsAllRequest>;
export type HrisDepartmentsAllResponseResult = GetDepartmentsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const HrisDepartmentsAllResponseResult$zodSchema: z.ZodType<HrisDepartmentsAllResponseResult>;
export type HrisDepartmentsAllResponse = {
    Result: GetDepartmentsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const HrisDepartmentsAllResponse$zodSchema: z.ZodType<HrisDepartmentsAllResponse>;
//# sourceMappingURL=hrisdepartmentsallop.d.ts.map