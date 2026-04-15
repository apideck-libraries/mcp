import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetPaymentsResponse } from "./getpaymentsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { PaymentsFilter } from "./paymentsfilter.js";
import { PaymentsSort } from "./paymentssort.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingPaymentsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingPaymentsAllGlobals$zodSchema: z.ZodType<AccountingPaymentsAllGlobals>;
export type AccountingPaymentsAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: PaymentsFilter | undefined;
    sort?: PaymentsSort | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingPaymentsAllRequest$zodSchema: z.ZodType<AccountingPaymentsAllRequest>;
export type AccountingPaymentsAllResponseResult = GetPaymentsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingPaymentsAllResponseResult$zodSchema: z.ZodType<AccountingPaymentsAllResponseResult>;
export type AccountingPaymentsAllResponse = {
    Result: GetPaymentsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingPaymentsAllResponse$zodSchema: z.ZodType<AccountingPaymentsAllResponse>;
//# sourceMappingURL=accountingpaymentsallop.d.ts.map