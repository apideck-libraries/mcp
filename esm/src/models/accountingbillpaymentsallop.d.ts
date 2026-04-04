import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetBillPaymentsResponse } from "./getbillpaymentsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { PaymentsFilter } from "./paymentsfilter.js";
import { PaymentsSort } from "./paymentssort.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingBillPaymentsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingBillPaymentsAllGlobals$zodSchema: z.ZodType<AccountingBillPaymentsAllGlobals>;
export type AccountingBillPaymentsAllRequest = {
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
export declare const AccountingBillPaymentsAllRequest$zodSchema: z.ZodType<AccountingBillPaymentsAllRequest>;
export type AccountingBillPaymentsAllResponseResult = GetBillPaymentsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingBillPaymentsAllResponseResult$zodSchema: z.ZodType<AccountingBillPaymentsAllResponseResult>;
export type AccountingBillPaymentsAllResponse = {
    Result: GetBillPaymentsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingBillPaymentsAllResponse$zodSchema: z.ZodType<AccountingBillPaymentsAllResponse>;
//# sourceMappingURL=accountingbillpaymentsallop.d.ts.map