import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateRefundResponse } from "./createrefundresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { RefundInput } from "./refundinput.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingRefundsAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingRefundsAddGlobals$zodSchema: z.ZodType<AccountingRefundsAddGlobals>;
export type AccountingRefundsAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: RefundInput;
};
export declare const AccountingRefundsAddRequest$zodSchema: z.ZodType<AccountingRefundsAddRequest>;
export type AccountingRefundsAddResponse = CreateRefundResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingRefundsAddResponse$zodSchema: z.ZodType<AccountingRefundsAddResponse>;
//# sourceMappingURL=accountingrefundsaddop.d.ts.map