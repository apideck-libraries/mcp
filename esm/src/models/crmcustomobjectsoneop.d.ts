import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetCustomObjectResponse } from "./getcustomobjectresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmCustomObjectsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmCustomObjectsOneGlobals$zodSchema: z.ZodType<CrmCustomObjectsOneGlobals>;
export type CrmCustomObjectsOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    object_id: string;
};
export declare const CrmCustomObjectsOneRequest$zodSchema: z.ZodType<CrmCustomObjectsOneRequest>;
export type CrmCustomObjectsOneResponse = GetCustomObjectResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmCustomObjectsOneResponse$zodSchema: z.ZodType<CrmCustomObjectsOneResponse>;
//# sourceMappingURL=crmcustomobjectsoneop.d.ts.map