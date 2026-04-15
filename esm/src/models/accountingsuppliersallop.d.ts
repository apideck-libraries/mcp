import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetSuppliersResponse } from "./getsuppliersresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { SuppliersFilter } from "./suppliersfilter.js";
import { SuppliersSort } from "./supplierssort.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingSuppliersAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingSuppliersAllGlobals$zodSchema: z.ZodType<AccountingSuppliersAllGlobals>;
export type AccountingSuppliersAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: SuppliersFilter | undefined;
    sort?: SuppliersSort | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingSuppliersAllRequest$zodSchema: z.ZodType<AccountingSuppliersAllRequest>;
export type AccountingSuppliersAllResponseResult = GetSuppliersResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingSuppliersAllResponseResult$zodSchema: z.ZodType<AccountingSuppliersAllResponseResult>;
export type AccountingSuppliersAllResponse = {
    Result: GetSuppliersResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingSuppliersAllResponse$zodSchema: z.ZodType<AccountingSuppliersAllResponse>;
//# sourceMappingURL=accountingsuppliersallop.d.ts.map