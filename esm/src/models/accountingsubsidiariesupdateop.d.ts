import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { SubsidiaryInput } from "./subsidiary.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateSubsidiaryResponse } from "./updatesubsidiaryresponse.js";
export type AccountingSubsidiariesUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingSubsidiariesUpdateGlobals$zodSchema: z.ZodType<AccountingSubsidiariesUpdateGlobals>;
export type AccountingSubsidiariesUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    body: SubsidiaryInput;
};
export declare const AccountingSubsidiariesUpdateRequest$zodSchema: z.ZodType<AccountingSubsidiariesUpdateRequest>;
export type AccountingSubsidiariesUpdateResponse = UpdateSubsidiaryResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingSubsidiariesUpdateResponse$zodSchema: z.ZodType<AccountingSubsidiariesUpdateResponse>;
//# sourceMappingURL=accountingsubsidiariesupdateop.d.ts.map