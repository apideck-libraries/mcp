import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { PurchaseOrderInput } from "./purchaseorder.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdatePurchaseOrderResponse } from "./updatepurchaseorderresponse.js";
export type AccountingPurchaseOrdersUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingPurchaseOrdersUpdateGlobals$zodSchema: z.ZodType<AccountingPurchaseOrdersUpdateGlobals>;
export type AccountingPurchaseOrdersUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    body: PurchaseOrderInput;
};
export declare const AccountingPurchaseOrdersUpdateRequest$zodSchema: z.ZodType<AccountingPurchaseOrdersUpdateRequest>;
export type AccountingPurchaseOrdersUpdateResponse = UpdatePurchaseOrderResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingPurchaseOrdersUpdateResponse$zodSchema: z.ZodType<AccountingPurchaseOrdersUpdateResponse>;
//# sourceMappingURL=accountingpurchaseordersupdateop.d.ts.map