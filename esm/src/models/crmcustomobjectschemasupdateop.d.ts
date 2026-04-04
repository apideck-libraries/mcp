import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CustomObjectSchemaInput } from "./customobjectschema.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateCustomObjectSchemaResponse } from "./updatecustomobjectschemaresponse.js";
export type CrmCustomObjectSchemasUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmCustomObjectSchemasUpdateGlobals$zodSchema: z.ZodType<CrmCustomObjectSchemasUpdateGlobals>;
export type CrmCustomObjectSchemasUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: CustomObjectSchemaInput;
};
export declare const CrmCustomObjectSchemasUpdateRequest$zodSchema: z.ZodType<CrmCustomObjectSchemasUpdateRequest>;
export type CrmCustomObjectSchemasUpdateResponse = UpdateCustomObjectSchemaResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmCustomObjectSchemasUpdateResponse$zodSchema: z.ZodType<CrmCustomObjectSchemasUpdateResponse>;
//# sourceMappingURL=crmcustomobjectschemasupdateop.d.ts.map