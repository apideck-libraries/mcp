import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateProjectResponse } from "./createprojectresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { ProjectInput } from "./project.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingProjectsAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingProjectsAddGlobals$zodSchema: z.ZodType<AccountingProjectsAddGlobals>;
export type AccountingProjectsAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    body: ProjectInput;
};
export declare const AccountingProjectsAddRequest$zodSchema: z.ZodType<AccountingProjectsAddRequest>;
export type AccountingProjectsAddResponse = CreateProjectResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingProjectsAddResponse$zodSchema: z.ZodType<AccountingProjectsAddResponse>;
//# sourceMappingURL=accountingprojectsaddop.d.ts.map