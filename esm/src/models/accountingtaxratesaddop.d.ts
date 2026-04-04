import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateTaxRateResponse } from "./createtaxrateresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { TaxRateInput } from "./taxrate.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingTaxRatesAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingTaxRatesAddGlobals$zodSchema: z.ZodType<AccountingTaxRatesAddGlobals>;
export type AccountingTaxRatesAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    body: TaxRateInput;
};
export declare const AccountingTaxRatesAddRequest$zodSchema: z.ZodType<AccountingTaxRatesAddRequest>;
export type AccountingTaxRatesAddResponse = CreateTaxRateResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingTaxRatesAddResponse$zodSchema: z.ZodType<AccountingTaxRatesAddResponse>;
//# sourceMappingURL=accountingtaxratesaddop.d.ts.map