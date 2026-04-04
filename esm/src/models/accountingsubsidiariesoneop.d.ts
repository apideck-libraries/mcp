import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetSubsidiaryResponse } from "./getsubsidiaryresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingSubsidiariesOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingSubsidiariesOneGlobals$zodSchema: z.ZodType<AccountingSubsidiariesOneGlobals>;
export type AccountingSubsidiariesOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingSubsidiariesOneRequest$zodSchema: z.ZodType<AccountingSubsidiariesOneRequest>;
export type AccountingSubsidiariesOneResponse = GetSubsidiaryResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingSubsidiariesOneResponse$zodSchema: z.ZodType<AccountingSubsidiariesOneResponse>;
//# sourceMappingURL=accountingsubsidiariesoneop.d.ts.map