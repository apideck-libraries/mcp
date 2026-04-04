import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { RefundInput } from "./refundinput.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateRefundResponse } from "./updaterefundresponse.js";
export type AccountingRefundsUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingRefundsUpdateGlobals$zodSchema: z.ZodType<AccountingRefundsUpdateGlobals>;
export type AccountingRefundsUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: RefundInput;
};
export declare const AccountingRefundsUpdateRequest$zodSchema: z.ZodType<AccountingRefundsUpdateRequest>;
export type AccountingRefundsUpdateResponse = UpdateRefundResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingRefundsUpdateResponse$zodSchema: z.ZodType<AccountingRefundsUpdateResponse>;
//# sourceMappingURL=accountingrefundsupdateop.d.ts.map