import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreatePaymentResponse } from "./createpaymentresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentInput } from "./paymentinput.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingPaymentsAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingPaymentsAddGlobals$zodSchema: z.ZodType<AccountingPaymentsAddGlobals>;
export type AccountingPaymentsAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    body: PaymentInput;
};
export declare const AccountingPaymentsAddRequest$zodSchema: z.ZodType<AccountingPaymentsAddRequest>;
export type AccountingPaymentsAddResponse = CreatePaymentResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingPaymentsAddResponse$zodSchema: z.ZodType<AccountingPaymentsAddResponse>;
//# sourceMappingURL=accountingpaymentsaddop.d.ts.map