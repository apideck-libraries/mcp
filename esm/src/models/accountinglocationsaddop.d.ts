import * as z from "zod";
import { AccountingLocationInput } from "./accountinglocation.js";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateAccountingLocationResponse } from "./createaccountinglocationresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingLocationsAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingLocationsAddGlobals$zodSchema: z.ZodType<AccountingLocationsAddGlobals>;
export type AccountingLocationsAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    body: AccountingLocationInput;
};
export declare const AccountingLocationsAddRequest$zodSchema: z.ZodType<AccountingLocationsAddRequest>;
export type AccountingLocationsAddResponse = CreateAccountingLocationResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingLocationsAddResponse$zodSchema: z.ZodType<AccountingLocationsAddResponse>;
//# sourceMappingURL=accountinglocationsaddop.d.ts.map