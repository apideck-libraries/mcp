import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { BillPaymentInput } from "./billpayment.js";
import { CreateBillPaymentResponse } from "./createbillpaymentresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingBillPaymentsAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingBillPaymentsAddGlobals$zodSchema: z.ZodType<AccountingBillPaymentsAddGlobals>;
export type AccountingBillPaymentsAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    body: BillPaymentInput;
};
export declare const AccountingBillPaymentsAddRequest$zodSchema: z.ZodType<AccountingBillPaymentsAddRequest>;
export type AccountingBillPaymentsAddResponse = CreateBillPaymentResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingBillPaymentsAddResponse$zodSchema: z.ZodType<AccountingBillPaymentsAddResponse>;
//# sourceMappingURL=accountingbillpaymentsaddop.d.ts.map