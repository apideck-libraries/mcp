import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetTaxRateResponse } from "./gettaxrateresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingTaxRatesOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingTaxRatesOneGlobals$zodSchema: z.ZodType<AccountingTaxRatesOneGlobals>;
export type AccountingTaxRatesOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingTaxRatesOneRequest$zodSchema: z.ZodType<AccountingTaxRatesOneRequest>;
export type AccountingTaxRatesOneResponse = GetTaxRateResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingTaxRatesOneResponse$zodSchema: z.ZodType<AccountingTaxRatesOneResponse>;
//# sourceMappingURL=accountingtaxratesoneop.d.ts.map