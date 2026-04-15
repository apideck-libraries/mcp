import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetBillResponse } from "./getbillresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingBillsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingBillsOneGlobals$zodSchema: z.ZodType<AccountingBillsOneGlobals>;
export type AccountingBillsOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingBillsOneRequest$zodSchema: z.ZodType<AccountingBillsOneRequest>;
export type AccountingBillsOneResponse = GetBillResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingBillsOneResponse$zodSchema: z.ZodType<AccountingBillsOneResponse>;
//# sourceMappingURL=accountingbillsoneop.d.ts.map