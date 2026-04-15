import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CompaniesFilter } from "./companiesfilter.js";
import { CompaniesSort } from "./companiessort.js";
import { GetCompaniesResponse1 } from "./getcompaniesresponse1.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmCompaniesAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmCompaniesAllGlobals$zodSchema: z.ZodType<CrmCompaniesAllGlobals>;
export type CrmCompaniesAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: CompaniesFilter | undefined;
    sort?: CompaniesSort | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const CrmCompaniesAllRequest$zodSchema: z.ZodType<CrmCompaniesAllRequest>;
export type CrmCompaniesAllResponseResult = GetCompaniesResponse1 | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmCompaniesAllResponseResult$zodSchema: z.ZodType<CrmCompaniesAllResponseResult>;
export type CrmCompaniesAllResponse = {
    Result: GetCompaniesResponse1 | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const CrmCompaniesAllResponse$zodSchema: z.ZodType<CrmCompaniesAllResponse>;
//# sourceMappingURL=crmcompaniesallop.d.ts.map