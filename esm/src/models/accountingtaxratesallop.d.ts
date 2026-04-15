import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetTaxRatesResponse } from "./gettaxratesresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { TaxRatesFilter } from "./taxratesfilter.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingTaxRatesAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingTaxRatesAllGlobals$zodSchema: z.ZodType<AccountingTaxRatesAllGlobals>;
export type AccountingTaxRatesAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: TaxRatesFilter | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingTaxRatesAllRequest$zodSchema: z.ZodType<AccountingTaxRatesAllRequest>;
export type AccountingTaxRatesAllResponseResult = GetTaxRatesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingTaxRatesAllResponseResult$zodSchema: z.ZodType<AccountingTaxRatesAllResponseResult>;
export type AccountingTaxRatesAllResponse = {
    Result: GetTaxRatesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingTaxRatesAllResponse$zodSchema: z.ZodType<AccountingTaxRatesAllResponse>;
//# sourceMappingURL=accountingtaxratesallop.d.ts.map