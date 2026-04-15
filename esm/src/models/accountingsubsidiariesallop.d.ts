import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetSubsidiariesResponse } from "./getsubsidiariesresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingSubsidiariesAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingSubsidiariesAllGlobals$zodSchema: z.ZodType<AccountingSubsidiariesAllGlobals>;
export type AccountingSubsidiariesAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingSubsidiariesAllRequest$zodSchema: z.ZodType<AccountingSubsidiariesAllRequest>;
export type AccountingSubsidiariesAllResponseResult = GetSubsidiariesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingSubsidiariesAllResponseResult$zodSchema: z.ZodType<AccountingSubsidiariesAllResponseResult>;
export type AccountingSubsidiariesAllResponse = {
    Result: GetSubsidiariesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingSubsidiariesAllResponse$zodSchema: z.ZodType<AccountingSubsidiariesAllResponse>;
//# sourceMappingURL=accountingsubsidiariesallop.d.ts.map