import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeletePaymentResponse } from "./deletepaymentresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingPaymentsDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingPaymentsDeleteGlobals$zodSchema: z.ZodType<AccountingPaymentsDeleteGlobals>;
export type AccountingPaymentsDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingPaymentsDeleteRequest$zodSchema: z.ZodType<AccountingPaymentsDeleteRequest>;
export type AccountingPaymentsDeleteResponse = DeletePaymentResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingPaymentsDeleteResponse$zodSchema: z.ZodType<AccountingPaymentsDeleteResponse>;
//# sourceMappingURL=accountingpaymentsdeleteop.d.ts.map