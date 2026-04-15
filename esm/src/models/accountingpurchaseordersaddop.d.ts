import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreatePurchaseOrderResponse } from "./createpurchaseorderresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { PurchaseOrderInput } from "./purchaseorder.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingPurchaseOrdersAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingPurchaseOrdersAddGlobals$zodSchema: z.ZodType<AccountingPurchaseOrdersAddGlobals>;
export type AccountingPurchaseOrdersAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    body: PurchaseOrderInput;
};
export declare const AccountingPurchaseOrdersAddRequest$zodSchema: z.ZodType<AccountingPurchaseOrdersAddRequest>;
export type AccountingPurchaseOrdersAddResponse = CreatePurchaseOrderResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingPurchaseOrdersAddResponse$zodSchema: z.ZodType<AccountingPurchaseOrdersAddResponse>;
//# sourceMappingURL=accountingpurchaseordersaddop.d.ts.map