import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetNotesResponse } from "./getnotesresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmNotesAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmNotesAllGlobals$zodSchema: z.ZodType<CrmNotesAllGlobals>;
export type CrmNotesAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const CrmNotesAllRequest$zodSchema: z.ZodType<CrmNotesAllRequest>;
export type CrmNotesAllResponseResult = GetNotesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmNotesAllResponseResult$zodSchema: z.ZodType<CrmNotesAllResponseResult>;
export type CrmNotesAllResponse = {
    Result: GetNotesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const CrmNotesAllResponse$zodSchema: z.ZodType<CrmNotesAllResponse>;
//# sourceMappingURL=crmnotesallop.d.ts.map