import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteCompanyResponse } from "./deletecompanyresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmCompaniesDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmCompaniesDeleteGlobals$zodSchema: z.ZodType<CrmCompaniesDeleteGlobals>;
export type CrmCompaniesDeleteRequest = {
    id: string;
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
};
export declare const CrmCompaniesDeleteRequest$zodSchema: z.ZodType<CrmCompaniesDeleteRequest>;
export type CrmCompaniesDeleteResponse = DeleteCompanyResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmCompaniesDeleteResponse$zodSchema: z.ZodType<CrmCompaniesDeleteResponse>;
//# sourceMappingURL=crmcompaniesdeleteop.d.ts.map