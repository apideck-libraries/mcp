import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { PipelineInput } from "./pipelineinput.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdatePipelineResponse } from "./updatepipelineresponse.js";
export type CrmPipelinesUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmPipelinesUpdateGlobals$zodSchema: z.ZodType<CrmPipelinesUpdateGlobals>;
export type CrmPipelinesUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: PipelineInput;
};
export declare const CrmPipelinesUpdateRequest$zodSchema: z.ZodType<CrmPipelinesUpdateRequest>;
export type CrmPipelinesUpdateResponse = UpdatePipelineResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmPipelinesUpdateResponse$zodSchema: z.ZodType<CrmPipelinesUpdateResponse>;
//# sourceMappingURL=crmpipelinesupdateop.d.ts.map