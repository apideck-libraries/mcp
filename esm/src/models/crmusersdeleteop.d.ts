import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteUserResponse } from "./deleteuserresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmUsersDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmUsersDeleteGlobals$zodSchema: z.ZodType<CrmUsersDeleteGlobals>;
export type CrmUsersDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const CrmUsersDeleteRequest$zodSchema: z.ZodType<CrmUsersDeleteRequest>;
export type CrmUsersDeleteResponse = DeleteUserResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmUsersDeleteResponse$zodSchema: z.ZodType<CrmUsersDeleteResponse>;
//# sourceMappingURL=crmusersdeleteop.d.ts.map