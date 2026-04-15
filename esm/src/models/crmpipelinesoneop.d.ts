import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetPipelineResponse } from "./getpipelineresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmPipelinesOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmPipelinesOneGlobals$zodSchema: z.ZodType<CrmPipelinesOneGlobals>;
export type CrmPipelinesOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const CrmPipelinesOneRequest$zodSchema: z.ZodType<CrmPipelinesOneRequest>;
export type CrmPipelinesOneResponse = GetPipelineResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmPipelinesOneResponse$zodSchema: z.ZodType<CrmPipelinesOneResponse>;
//# sourceMappingURL=crmpipelinesoneop.d.ts.map