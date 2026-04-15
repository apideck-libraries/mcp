import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { InvoiceItemInput } from "./invoiceitem.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateInvoiceItemsResponse } from "./updateinvoiceitemsresponse.js";
export type AccountingInvoiceItemsUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingInvoiceItemsUpdateGlobals$zodSchema: z.ZodType<AccountingInvoiceItemsUpdateGlobals>;
export type AccountingInvoiceItemsUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: InvoiceItemInput;
};
export declare const AccountingInvoiceItemsUpdateRequest$zodSchema: z.ZodType<AccountingInvoiceItemsUpdateRequest>;
export type AccountingInvoiceItemsUpdateResponse = UpdateInvoiceItemsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingInvoiceItemsUpdateResponse$zodSchema: z.ZodType<AccountingInvoiceItemsUpdateResponse>;
//# sourceMappingURL=accountinginvoiceitemsupdateop.d.ts.map