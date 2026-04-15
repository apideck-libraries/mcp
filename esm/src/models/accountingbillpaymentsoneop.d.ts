import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetBillPaymentResponse } from "./getbillpaymentresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingBillPaymentsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingBillPaymentsOneGlobals$zodSchema: z.ZodType<AccountingBillPaymentsOneGlobals>;
export type AccountingBillPaymentsOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingBillPaymentsOneRequest$zodSchema: z.ZodType<AccountingBillPaymentsOneRequest>;
export type AccountingBillPaymentsOneResponse = GetBillPaymentResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingBillPaymentsOneResponse$zodSchema: z.ZodType<AccountingBillPaymentsOneResponse>;
//# sourceMappingURL=accountingbillpaymentsoneop.d.ts.map