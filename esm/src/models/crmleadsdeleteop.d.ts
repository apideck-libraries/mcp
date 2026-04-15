import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteLeadResponse } from "./deleteleadresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmLeadsDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmLeadsDeleteGlobals$zodSchema: z.ZodType<CrmLeadsDeleteGlobals>;
export type CrmLeadsDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const CrmLeadsDeleteRequest$zodSchema: z.ZodType<CrmLeadsDeleteRequest>;
export type CrmLeadsDeleteResponse = DeleteLeadResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmLeadsDeleteResponse$zodSchema: z.ZodType<CrmLeadsDeleteResponse>;
//# sourceMappingURL=crmleadsdeleteop.d.ts.map