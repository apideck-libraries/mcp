import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetCustomObjectSchemaResponse } from "./getcustomobjectschemaresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmCustomObjectSchemasOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmCustomObjectSchemasOneGlobals$zodSchema: z.ZodType<CrmCustomObjectSchemasOneGlobals>;
export type CrmCustomObjectSchemasOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const CrmCustomObjectSchemasOneRequest$zodSchema: z.ZodType<CrmCustomObjectSchemasOneRequest>;
export type CrmCustomObjectSchemasOneResponse = GetCustomObjectSchemaResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmCustomObjectSchemasOneResponse$zodSchema: z.ZodType<CrmCustomObjectSchemasOneResponse>;
//# sourceMappingURL=crmcustomobjectschemasoneop.d.ts.map