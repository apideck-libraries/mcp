import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreatePipelineResponse } from "./createpipelineresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { PipelineInput } from "./pipelineinput.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmPipelinesAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmPipelinesAddGlobals$zodSchema: z.ZodType<CrmPipelinesAddGlobals>;
export type CrmPipelinesAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: PipelineInput;
};
export declare const CrmPipelinesAddRequest$zodSchema: z.ZodType<CrmPipelinesAddRequest>;
export type CrmPipelinesAddResponse = CreatePipelineResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmPipelinesAddResponse$zodSchema: z.ZodType<CrmPipelinesAddResponse>;
//# sourceMappingURL=crmpipelinesaddop.d.ts.map