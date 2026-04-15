import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetHrisCompaniesResponse } from "./gethriscompaniesresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type HrisCompaniesAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const HrisCompaniesAllGlobals$zodSchema: z.ZodType<HrisCompaniesAllGlobals>;
export type HrisCompaniesAllRequest = {
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
export declare const HrisCompaniesAllRequest$zodSchema: z.ZodType<HrisCompaniesAllRequest>;
export type HrisCompaniesAllResponseResult = GetHrisCompaniesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const HrisCompaniesAllResponseResult$zodSchema: z.ZodType<HrisCompaniesAllResponseResult>;
export type HrisCompaniesAllResponse = {
    Result: GetHrisCompaniesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const HrisCompaniesAllResponse$zodSchema: z.ZodType<HrisCompaniesAllResponse>;
//# sourceMappingURL=hriscompaniesallop.d.ts.map