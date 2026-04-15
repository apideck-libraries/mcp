import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetProjectsResponse } from "./getprojectsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { ProjectsFilter } from "./projectsfilter.js";
import { ProjectsSort } from "./projectssort.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingProjectsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingProjectsAllGlobals$zodSchema: z.ZodType<AccountingProjectsAllGlobals>;
export type AccountingProjectsAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: ProjectsFilter | undefined;
    sort?: ProjectsSort | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingProjectsAllRequest$zodSchema: z.ZodType<AccountingProjectsAllRequest>;
export type AccountingProjectsAllResponseResult = GetProjectsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingProjectsAllResponseResult$zodSchema: z.ZodType<AccountingProjectsAllResponseResult>;
export type AccountingProjectsAllResponse = {
    Result: GetProjectsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingProjectsAllResponse$zodSchema: z.ZodType<AccountingProjectsAllResponse>;
//# sourceMappingURL=accountingprojectsallop.d.ts.map