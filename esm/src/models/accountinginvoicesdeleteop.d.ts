import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteInvoiceResponse } from "./deleteinvoiceresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingInvoicesDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingInvoicesDeleteGlobals$zodSchema: z.ZodType<AccountingInvoicesDeleteGlobals>;
export type AccountingInvoicesDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingInvoicesDeleteRequest$zodSchema: z.ZodType<AccountingInvoicesDeleteRequest>;
export type AccountingInvoicesDeleteResponse = DeleteInvoiceResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingInvoicesDeleteResponse$zodSchema: z.ZodType<AccountingInvoicesDeleteResponse>;
//# sourceMappingURL=accountinginvoicesdeleteop.d.ts.map