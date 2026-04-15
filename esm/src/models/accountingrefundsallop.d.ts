import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetRefundsResponse } from "./getrefundsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { RefundsFilter } from "./refundsfilter.js";
import { RefundsSort } from "./refundssort.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingRefundsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingRefundsAllGlobals$zodSchema: z.ZodType<AccountingRefundsAllGlobals>;
export type AccountingRefundsAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: RefundsFilter | undefined;
    sort?: RefundsSort | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingRefundsAllRequest$zodSchema: z.ZodType<AccountingRefundsAllRequest>;
export type AccountingRefundsAllResponseResult = GetRefundsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingRefundsAllResponseResult$zodSchema: z.ZodType<AccountingRefundsAllResponseResult>;
export type AccountingRefundsAllResponse = {
    Result: GetRefundsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingRefundsAllResponse$zodSchema: z.ZodType<AccountingRefundsAllResponse>;
//# sourceMappingURL=accountingrefundsallop.d.ts.map