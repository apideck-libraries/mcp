import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeletePurchaseOrderResponse } from "./deletepurchaseorderresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingPurchaseOrdersDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingPurchaseOrdersDeleteGlobals$zodSchema: z.ZodType<AccountingPurchaseOrdersDeleteGlobals>;
export type AccountingPurchaseOrdersDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingPurchaseOrdersDeleteRequest$zodSchema: z.ZodType<AccountingPurchaseOrdersDeleteRequest>;
export type AccountingPurchaseOrdersDeleteResponse = DeletePurchaseOrderResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingPurchaseOrdersDeleteResponse$zodSchema: z.ZodType<AccountingPurchaseOrdersDeleteResponse>;
//# sourceMappingURL=accountingpurchaseordersdeleteop.d.ts.map