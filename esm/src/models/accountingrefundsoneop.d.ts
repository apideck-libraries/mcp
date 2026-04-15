import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetRefundResponse } from "./getrefundresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingRefundsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingRefundsOneGlobals$zodSchema: z.ZodType<AccountingRefundsOneGlobals>;
export type AccountingRefundsOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingRefundsOneRequest$zodSchema: z.ZodType<AccountingRefundsOneRequest>;
export type AccountingRefundsOneResponse = GetRefundResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingRefundsOneResponse$zodSchema: z.ZodType<AccountingRefundsOneResponse>;
//# sourceMappingURL=accountingrefundsoneop.d.ts.map