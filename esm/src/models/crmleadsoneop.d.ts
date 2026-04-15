import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetLeadResponse } from "./getleadresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmLeadsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmLeadsOneGlobals$zodSchema: z.ZodType<CrmLeadsOneGlobals>;
export type CrmLeadsOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const CrmLeadsOneRequest$zodSchema: z.ZodType<CrmLeadsOneRequest>;
export type CrmLeadsOneResponse = GetLeadResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmLeadsOneResponse$zodSchema: z.ZodType<CrmLeadsOneResponse>;
//# sourceMappingURL=crmleadsoneop.d.ts.map