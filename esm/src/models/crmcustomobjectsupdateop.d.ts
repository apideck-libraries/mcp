import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CustomObjectInput } from "./customobject.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateCustomObjectResponse } from "./updatecustomobjectresponse.js";
export type CrmCustomObjectsUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmCustomObjectsUpdateGlobals$zodSchema: z.ZodType<CrmCustomObjectsUpdateGlobals>;
export type CrmCustomObjectsUpdateRequest = {
    id: string;
    object_id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: CustomObjectInput;
};
export declare const CrmCustomObjectsUpdateRequest$zodSchema: z.ZodType<CrmCustomObjectsUpdateRequest>;
export type CrmCustomObjectsUpdateResponse = UpdateCustomObjectResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmCustomObjectsUpdateResponse$zodSchema: z.ZodType<CrmCustomObjectsUpdateResponse>;
//# sourceMappingURL=crmcustomobjectsupdateop.d.ts.map