import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { Company1Input } from "./company1.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateCompanyResponse } from "./updatecompanyresponse.js";
export type CrmCompaniesUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmCompaniesUpdateGlobals$zodSchema: z.ZodType<CrmCompaniesUpdateGlobals>;
export type CrmCompaniesUpdateRequest = {
    id: string;
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: Company1Input;
};
export declare const CrmCompaniesUpdateRequest$zodSchema: z.ZodType<CrmCompaniesUpdateRequest>;
export type CrmCompaniesUpdateResponse = UpdateCompanyResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmCompaniesUpdateResponse$zodSchema: z.ZodType<CrmCompaniesUpdateResponse>;
//# sourceMappingURL=crmcompaniesupdateop.d.ts.map