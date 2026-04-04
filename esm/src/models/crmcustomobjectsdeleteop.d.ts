import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteCustomObjectResponse } from "./deletecustomobjectresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmCustomObjectsDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmCustomObjectsDeleteGlobals$zodSchema: z.ZodType<CrmCustomObjectsDeleteGlobals>;
export type CrmCustomObjectsDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    object_id: string;
};
export declare const CrmCustomObjectsDeleteRequest$zodSchema: z.ZodType<CrmCustomObjectsDeleteRequest>;
export type CrmCustomObjectsDeleteResponse = DeleteCustomObjectResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmCustomObjectsDeleteResponse$zodSchema: z.ZodType<CrmCustomObjectsDeleteResponse>;
//# sourceMappingURL=crmcustomobjectsdeleteop.d.ts.map