import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteCustomerResponse } from "./deletecustomerresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingCustomersDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingCustomersDeleteGlobals$zodSchema: z.ZodType<AccountingCustomersDeleteGlobals>;
export type AccountingCustomersDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingCustomersDeleteRequest$zodSchema: z.ZodType<AccountingCustomersDeleteRequest>;
export type AccountingCustomersDeleteResponse = DeleteCustomerResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingCustomersDeleteResponse$zodSchema: z.ZodType<AccountingCustomersDeleteResponse>;
//# sourceMappingURL=accountingcustomersdeleteop.d.ts.map