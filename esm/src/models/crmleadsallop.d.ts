import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetLeadsResponse } from "./getleadsresponse.js";
import { LeadsFilter } from "./leadsfilter.js";
import { LeadsSort } from "./leadssort.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmLeadsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmLeadsAllGlobals$zodSchema: z.ZodType<CrmLeadsAllGlobals>;
export type CrmLeadsAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: LeadsFilter | undefined;
    sort?: LeadsSort | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const CrmLeadsAllRequest$zodSchema: z.ZodType<CrmLeadsAllRequest>;
export type CrmLeadsAllResponseResult = GetLeadsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmLeadsAllResponseResult$zodSchema: z.ZodType<CrmLeadsAllResponseResult>;
export type CrmLeadsAllResponse = {
    Result: GetLeadsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const CrmLeadsAllResponse$zodSchema: z.ZodType<CrmLeadsAllResponse>;
//# sourceMappingURL=crmleadsallop.d.ts.map