import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetAccountingLocationResponse } from "./getaccountinglocationresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingLocationsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingLocationsOneGlobals$zodSchema: z.ZodType<AccountingLocationsOneGlobals>;
export type AccountingLocationsOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingLocationsOneRequest$zodSchema: z.ZodType<AccountingLocationsOneRequest>;
export type AccountingLocationsOneResponse = GetAccountingLocationResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingLocationsOneResponse$zodSchema: z.ZodType<AccountingLocationsOneResponse>;
//# sourceMappingURL=accountinglocationsoneop.d.ts.map