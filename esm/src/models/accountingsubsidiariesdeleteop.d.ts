import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteSubsidiaryResponse } from "./deletesubsidiaryresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingSubsidiariesDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingSubsidiariesDeleteGlobals$zodSchema: z.ZodType<AccountingSubsidiariesDeleteGlobals>;
export type AccountingSubsidiariesDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingSubsidiariesDeleteRequest$zodSchema: z.ZodType<AccountingSubsidiariesDeleteRequest>;
export type AccountingSubsidiariesDeleteResponse = DeleteSubsidiaryResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingSubsidiariesDeleteResponse$zodSchema: z.ZodType<AccountingSubsidiariesDeleteResponse>;
//# sourceMappingURL=accountingsubsidiariesdeleteop.d.ts.map