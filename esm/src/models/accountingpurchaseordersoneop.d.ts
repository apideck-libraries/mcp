import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetPurchaseOrderResponse } from "./getpurchaseorderresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingPurchaseOrdersOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingPurchaseOrdersOneGlobals$zodSchema: z.ZodType<AccountingPurchaseOrdersOneGlobals>;
export type AccountingPurchaseOrdersOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingPurchaseOrdersOneRequest$zodSchema: z.ZodType<AccountingPurchaseOrdersOneRequest>;
export type AccountingPurchaseOrdersOneResponse = GetPurchaseOrderResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingPurchaseOrdersOneResponse$zodSchema: z.ZodType<AccountingPurchaseOrdersOneResponse>;
//# sourceMappingURL=accountingpurchaseordersoneop.d.ts.map