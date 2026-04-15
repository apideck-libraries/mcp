import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateCustomerResponse } from "./createcustomerresponse.js";
import { CustomerInput } from "./customer.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingCustomersAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingCustomersAddGlobals$zodSchema: z.ZodType<AccountingCustomersAddGlobals>;
export type AccountingCustomersAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    body: CustomerInput;
};
export declare const AccountingCustomersAddRequest$zodSchema: z.ZodType<AccountingCustomersAddRequest>;
export type AccountingCustomersAddResponse = CreateCustomerResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingCustomersAddResponse$zodSchema: z.ZodType<AccountingCustomersAddResponse>;
//# sourceMappingURL=accountingcustomersaddop.d.ts.map