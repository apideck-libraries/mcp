import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteTaxRateResponse } from "./deletetaxrateresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingTaxRatesDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingTaxRatesDeleteGlobals$zodSchema: z.ZodType<AccountingTaxRatesDeleteGlobals>;
export type AccountingTaxRatesDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingTaxRatesDeleteRequest$zodSchema: z.ZodType<AccountingTaxRatesDeleteRequest>;
export type AccountingTaxRatesDeleteResponse = DeleteTaxRateResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingTaxRatesDeleteResponse$zodSchema: z.ZodType<AccountingTaxRatesDeleteResponse>;
//# sourceMappingURL=accountingtaxratesdeleteop.d.ts.map