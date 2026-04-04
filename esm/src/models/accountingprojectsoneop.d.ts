import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetProjectResponse } from "./getprojectresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingProjectsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingProjectsOneGlobals$zodSchema: z.ZodType<AccountingProjectsOneGlobals>;
export type AccountingProjectsOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingProjectsOneRequest$zodSchema: z.ZodType<AccountingProjectsOneRequest>;
export type AccountingProjectsOneResponse = GetProjectResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingProjectsOneResponse$zodSchema: z.ZodType<AccountingProjectsOneResponse>;
//# sourceMappingURL=accountingprojectsoneop.d.ts.map