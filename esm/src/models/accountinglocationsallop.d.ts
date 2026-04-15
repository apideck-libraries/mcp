import * as z from "zod";
import { AccountingLocationsFilter } from "./accountinglocationsfilter.js";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetAccountingLocationsResponse } from "./getaccountinglocationsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingLocationsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingLocationsAllGlobals$zodSchema: z.ZodType<AccountingLocationsAllGlobals>;
export type AccountingLocationsAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    fields?: string | null | undefined;
    filter?: AccountingLocationsFilter | undefined;
};
export declare const AccountingLocationsAllRequest$zodSchema: z.ZodType<AccountingLocationsAllRequest>;
export type AccountingLocationsAllResponseResult = GetAccountingLocationsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingLocationsAllResponseResult$zodSchema: z.ZodType<AccountingLocationsAllResponseResult>;
export type AccountingLocationsAllResponse = {
    Result: GetAccountingLocationsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingLocationsAllResponse$zodSchema: z.ZodType<AccountingLocationsAllResponse>;
//# sourceMappingURL=accountinglocationsallop.d.ts.map