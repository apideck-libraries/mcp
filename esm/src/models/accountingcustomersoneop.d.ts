import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetCustomerResponse } from "./getcustomerresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingCustomersOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingCustomersOneGlobals$zodSchema: z.ZodType<AccountingCustomersOneGlobals>;
export type AccountingCustomersOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingCustomersOneRequest$zodSchema: z.ZodType<AccountingCustomersOneRequest>;
export type AccountingCustomersOneResponse = GetCustomerResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingCustomersOneResponse$zodSchema: z.ZodType<AccountingCustomersOneResponse>;
//# sourceMappingURL=accountingcustomersoneop.d.ts.map