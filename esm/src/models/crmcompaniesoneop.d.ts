import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetCompanyResponse } from "./getcompanyresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmCompaniesOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmCompaniesOneGlobals$zodSchema: z.ZodType<CrmCompaniesOneGlobals>;
export type CrmCompaniesOneRequest = {
    id: string;
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    fields?: string | null | undefined;
};
export declare const CrmCompaniesOneRequest$zodSchema: z.ZodType<CrmCompaniesOneRequest>;
export type CrmCompaniesOneResponse = GetCompanyResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmCompaniesOneResponse$zodSchema: z.ZodType<CrmCompaniesOneResponse>;
//# sourceMappingURL=crmcompaniesoneop.d.ts.map