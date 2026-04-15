import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CustomersFilter } from "./customersfilter.js";
import { CustomersSort } from "./customerssort.js";
import { GetCustomersResponse } from "./getcustomersresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingCustomersAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingCustomersAllGlobals$zodSchema: z.ZodType<AccountingCustomersAllGlobals>;
export type AccountingCustomersAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: CustomersFilter | undefined;
    sort?: CustomersSort | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingCustomersAllRequest$zodSchema: z.ZodType<AccountingCustomersAllRequest>;
export type AccountingCustomersAllResponseResult = GetCustomersResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingCustomersAllResponseResult$zodSchema: z.ZodType<AccountingCustomersAllResponseResult>;
export type AccountingCustomersAllResponse = {
    Result: GetCustomersResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingCustomersAllResponse$zodSchema: z.ZodType<AccountingCustomersAllResponse>;
//# sourceMappingURL=accountingcustomersallop.d.ts.map