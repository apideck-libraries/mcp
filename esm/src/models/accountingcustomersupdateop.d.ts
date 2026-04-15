import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CustomerInput } from "./customer.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateCustomerResponse } from "./updatecustomerresponse.js";
export type AccountingCustomersUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingCustomersUpdateGlobals$zodSchema: z.ZodType<AccountingCustomersUpdateGlobals>;
export type AccountingCustomersUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: CustomerInput;
};
export declare const AccountingCustomersUpdateRequest$zodSchema: z.ZodType<AccountingCustomersUpdateRequest>;
export type AccountingCustomersUpdateResponse = UpdateCustomerResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingCustomersUpdateResponse$zodSchema: z.ZodType<AccountingCustomersUpdateResponse>;
//# sourceMappingURL=accountingcustomersupdateop.d.ts.map