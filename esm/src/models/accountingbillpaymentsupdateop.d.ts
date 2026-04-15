import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { BillPaymentInput } from "./billpayment.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateBillPaymentResponse } from "./updatebillpaymentresponse.js";
export type AccountingBillPaymentsUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingBillPaymentsUpdateGlobals$zodSchema: z.ZodType<AccountingBillPaymentsUpdateGlobals>;
export type AccountingBillPaymentsUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: BillPaymentInput;
};
export declare const AccountingBillPaymentsUpdateRequest$zodSchema: z.ZodType<AccountingBillPaymentsUpdateRequest>;
export type AccountingBillPaymentsUpdateResponse = UpdateBillPaymentResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingBillPaymentsUpdateResponse$zodSchema: z.ZodType<AccountingBillPaymentsUpdateResponse>;
//# sourceMappingURL=accountingbillpaymentsupdateop.d.ts.map