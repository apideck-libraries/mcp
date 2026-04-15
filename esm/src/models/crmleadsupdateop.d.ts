import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { LeadInput } from "./leadinput.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateLeadResponse } from "./updateleadresponse.js";
export type CrmLeadsUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmLeadsUpdateGlobals$zodSchema: z.ZodType<CrmLeadsUpdateGlobals>;
export type CrmLeadsUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: LeadInput;
};
export declare const CrmLeadsUpdateRequest$zodSchema: z.ZodType<CrmLeadsUpdateRequest>;
export type CrmLeadsUpdateResponse = UpdateLeadResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmLeadsUpdateResponse$zodSchema: z.ZodType<CrmLeadsUpdateResponse>;
//# sourceMappingURL=crmleadsupdateop.d.ts.map