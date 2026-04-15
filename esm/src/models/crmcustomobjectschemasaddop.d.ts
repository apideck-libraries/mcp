import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateCustomObjectSchemaResponse } from "./createcustomobjectschemaresponse.js";
import { CustomObjectSchemaInput } from "./customobjectschema.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmCustomObjectSchemasAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmCustomObjectSchemasAddGlobals$zodSchema: z.ZodType<CrmCustomObjectSchemasAddGlobals>;
export type CrmCustomObjectSchemasAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: CustomObjectSchemaInput;
};
export declare const CrmCustomObjectSchemasAddRequest$zodSchema: z.ZodType<CrmCustomObjectSchemasAddRequest>;
export type CrmCustomObjectSchemasAddResponse = CreateCustomObjectSchemaResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmCustomObjectSchemasAddResponse$zodSchema: z.ZodType<CrmCustomObjectSchemasAddResponse>;
//# sourceMappingURL=crmcustomobjectschemasaddop.d.ts.map