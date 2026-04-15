import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { ProjectInput } from "./project.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateProjectResponse } from "./updateprojectresponse.js";
export type AccountingProjectsUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingProjectsUpdateGlobals$zodSchema: z.ZodType<AccountingProjectsUpdateGlobals>;
export type AccountingProjectsUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    body: ProjectInput;
};
export declare const AccountingProjectsUpdateRequest$zodSchema: z.ZodType<AccountingProjectsUpdateRequest>;
export type AccountingProjectsUpdateResponse = UpdateProjectResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingProjectsUpdateResponse$zodSchema: z.ZodType<AccountingProjectsUpdateResponse>;
//# sourceMappingURL=accountingprojectsupdateop.d.ts.map