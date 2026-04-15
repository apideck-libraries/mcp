import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetPaymentResponse } from "./getpaymentresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingPaymentsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingPaymentsOneGlobals$zodSchema: z.ZodType<AccountingPaymentsOneGlobals>;
export type AccountingPaymentsOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingPaymentsOneRequest$zodSchema: z.ZodType<AccountingPaymentsOneRequest>;
export type AccountingPaymentsOneResponse = GetPaymentResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingPaymentsOneResponse$zodSchema: z.ZodType<AccountingPaymentsOneResponse>;
//# sourceMappingURL=accountingpaymentsoneop.d.ts.map