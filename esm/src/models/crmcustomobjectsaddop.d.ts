import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateCustomObjectResponse } from "./createcustomobjectresponse.js";
import { CustomObjectInput } from "./customobject.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmCustomObjectsAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmCustomObjectsAddGlobals$zodSchema: z.ZodType<CrmCustomObjectsAddGlobals>;
export type CrmCustomObjectsAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    object_id: string;
    body: CustomObjectInput;
};
export declare const CrmCustomObjectsAddRequest$zodSchema: z.ZodType<CrmCustomObjectsAddRequest>;
export type CrmCustomObjectsAddResponse = CreateCustomObjectResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmCustomObjectsAddResponse$zodSchema: z.ZodType<CrmCustomObjectsAddResponse>;
//# sourceMappingURL=crmcustomobjectsaddop.d.ts.map