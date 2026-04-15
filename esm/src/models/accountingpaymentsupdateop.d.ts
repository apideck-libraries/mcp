import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentInput } from "./paymentinput.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdatePaymentResponse } from "./updatepaymentresponse.js";
export type AccountingPaymentsUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingPaymentsUpdateGlobals$zodSchema: z.ZodType<AccountingPaymentsUpdateGlobals>;
export type AccountingPaymentsUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    body: PaymentInput;
};
export declare const AccountingPaymentsUpdateRequest$zodSchema: z.ZodType<AccountingPaymentsUpdateRequest>;
export type AccountingPaymentsUpdateResponse = UpdatePaymentResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingPaymentsUpdateResponse$zodSchema: z.ZodType<AccountingPaymentsUpdateResponse>;
//# sourceMappingURL=accountingpaymentsupdateop.d.ts.map