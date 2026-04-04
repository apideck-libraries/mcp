import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteProjectResponse } from "./deleteprojectresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingProjectsDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingProjectsDeleteGlobals$zodSchema: z.ZodType<AccountingProjectsDeleteGlobals>;
export type AccountingProjectsDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingProjectsDeleteRequest$zodSchema: z.ZodType<AccountingProjectsDeleteRequest>;
export type AccountingProjectsDeleteResponse = DeleteProjectResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingProjectsDeleteResponse$zodSchema: z.ZodType<AccountingProjectsDeleteResponse>;
//# sourceMappingURL=accountingprojectsdeleteop.d.ts.map