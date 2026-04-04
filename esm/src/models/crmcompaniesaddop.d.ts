import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { Company1Input } from "./company1.js";
import { CreateCompanyResponse } from "./createcompanyresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmCompaniesAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmCompaniesAddGlobals$zodSchema: z.ZodType<CrmCompaniesAddGlobals>;
export type CrmCompaniesAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: Company1Input;
};
export declare const CrmCompaniesAddRequest$zodSchema: z.ZodType<CrmCompaniesAddRequest>;
export type CrmCompaniesAddResponse = CreateCompanyResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmCompaniesAddResponse$zodSchema: z.ZodType<CrmCompaniesAddResponse>;
//# sourceMappingURL=crmcompaniesaddop.d.ts.map