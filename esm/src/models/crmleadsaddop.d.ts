import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateLeadResponse } from "./createleadresponse.js";
import { LeadInput } from "./leadinput.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmLeadsAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmLeadsAddGlobals$zodSchema: z.ZodType<CrmLeadsAddGlobals>;
export type CrmLeadsAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: LeadInput;
};
export declare const CrmLeadsAddRequest$zodSchema: z.ZodType<CrmLeadsAddRequest>;
export type CrmLeadsAddResponse = CreateLeadResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmLeadsAddResponse$zodSchema: z.ZodType<CrmLeadsAddResponse>;
//# sourceMappingURL=crmleadsaddop.d.ts.map