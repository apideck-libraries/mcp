import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeletePipelineResponse } from "./deletepipelineresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmPipelinesDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmPipelinesDeleteGlobals$zodSchema: z.ZodType<CrmPipelinesDeleteGlobals>;
export type CrmPipelinesDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const CrmPipelinesDeleteRequest$zodSchema: z.ZodType<CrmPipelinesDeleteRequest>;
export type CrmPipelinesDeleteResponse = DeletePipelineResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmPipelinesDeleteResponse$zodSchema: z.ZodType<CrmPipelinesDeleteResponse>;
//# sourceMappingURL=crmpipelinesdeleteop.d.ts.map