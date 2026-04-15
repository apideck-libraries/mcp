import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteCustomObjectSchemaResponse } from "./deletecustomobjectschemaresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmCustomObjectSchemasDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmCustomObjectSchemasDeleteGlobals$zodSchema: z.ZodType<CrmCustomObjectSchemasDeleteGlobals>;
export type CrmCustomObjectSchemasDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const CrmCustomObjectSchemasDeleteRequest$zodSchema: z.ZodType<CrmCustomObjectSchemasDeleteRequest>;
export type CrmCustomObjectSchemasDeleteResponse = DeleteCustomObjectSchemaResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmCustomObjectSchemasDeleteResponse$zodSchema: z.ZodType<CrmCustomObjectSchemasDeleteResponse>;
//# sourceMappingURL=crmcustomobjectschemasdeleteop.d.ts.map