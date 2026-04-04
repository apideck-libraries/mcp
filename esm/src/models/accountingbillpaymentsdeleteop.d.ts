import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteBillPaymentResponse } from "./deletebillpaymentresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingBillPaymentsDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingBillPaymentsDeleteGlobals$zodSchema: z.ZodType<AccountingBillPaymentsDeleteGlobals>;
export type AccountingBillPaymentsDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingBillPaymentsDeleteRequest$zodSchema: z.ZodType<AccountingBillPaymentsDeleteRequest>;
export type AccountingBillPaymentsDeleteResponse = DeleteBillPaymentResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingBillPaymentsDeleteResponse$zodSchema: z.ZodType<AccountingBillPaymentsDeleteResponse>;
//# sourceMappingURL=accountingbillpaymentsdeleteop.d.ts.map