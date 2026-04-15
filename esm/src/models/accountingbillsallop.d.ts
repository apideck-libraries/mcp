import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { BillsFilter } from "./billsfilter.js";
import { BillsSort } from "./billssort.js";
import { GetBillsResponse } from "./getbillsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingBillsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingBillsAllGlobals$zodSchema: z.ZodType<AccountingBillsAllGlobals>;
export type AccountingBillsAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: BillsFilter | undefined;
    sort?: BillsSort | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingBillsAllRequest$zodSchema: z.ZodType<AccountingBillsAllRequest>;
export type AccountingBillsAllResponseResult = GetBillsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingBillsAllResponseResult$zodSchema: z.ZodType<AccountingBillsAllResponseResult>;
export type AccountingBillsAllResponse = {
    Result: GetBillsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingBillsAllResponse$zodSchema: z.ZodType<AccountingBillsAllResponse>;
//# sourceMappingURL=accountingbillsallop.d.ts.map