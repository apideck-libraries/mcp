import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { TaxRateInput } from "./taxrate.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateTaxRateResponse } from "./updatetaxrateresponse.js";
export type AccountingTaxRatesUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingTaxRatesUpdateGlobals$zodSchema: z.ZodType<AccountingTaxRatesUpdateGlobals>;
export type AccountingTaxRatesUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    body: TaxRateInput;
};
export declare const AccountingTaxRatesUpdateRequest$zodSchema: z.ZodType<AccountingTaxRatesUpdateRequest>;
export type AccountingTaxRatesUpdateResponse = UpdateTaxRateResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingTaxRatesUpdateResponse$zodSchema: z.ZodType<AccountingTaxRatesUpdateResponse>;
//# sourceMappingURL=accountingtaxratesupdateop.d.ts.map