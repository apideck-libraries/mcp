import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateSubsidiaryResponse } from "./createsubsidiaryresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { SubsidiaryInput } from "./subsidiary.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingSubsidiariesAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingSubsidiariesAddGlobals$zodSchema: z.ZodType<AccountingSubsidiariesAddGlobals>;
export type AccountingSubsidiariesAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    body: SubsidiaryInput;
};
export declare const AccountingSubsidiariesAddRequest$zodSchema: z.ZodType<AccountingSubsidiariesAddRequest>;
export type AccountingSubsidiariesAddResponse = CreateSubsidiaryResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingSubsidiariesAddResponse$zodSchema: z.ZodType<AccountingSubsidiariesAddResponse>;
//# sourceMappingURL=accountingsubsidiariesaddop.d.ts.map