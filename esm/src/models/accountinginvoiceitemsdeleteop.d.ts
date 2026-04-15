import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteTaxRateResponse } from "./deletetaxrateresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingInvoiceItemsDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingInvoiceItemsDeleteGlobals$zodSchema: z.ZodType<AccountingInvoiceItemsDeleteGlobals>;
export type AccountingInvoiceItemsDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingInvoiceItemsDeleteRequest$zodSchema: z.ZodType<AccountingInvoiceItemsDeleteRequest>;
export type AccountingInvoiceItemsDeleteResponse = DeleteTaxRateResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingInvoiceItemsDeleteResponse$zodSchema: z.ZodType<AccountingInvoiceItemsDeleteResponse>;
//# sourceMappingURL=accountinginvoiceitemsdeleteop.d.ts.map