import * as z from "zod";
import { AttachmentReferenceType } from "./attachmentreferencetype.js";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetAttachmentsResponse } from "./getattachmentsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingAttachmentsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingAttachmentsAllGlobals$zodSchema: z.ZodType<AccountingAttachmentsAllGlobals>;
export type AccountingAttachmentsAllRequest = {
    reference_type: AttachmentReferenceType;
    reference_id: string;
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingAttachmentsAllRequest$zodSchema: z.ZodType<AccountingAttachmentsAllRequest>;
export type AccountingAttachmentsAllResponseResult = GetAttachmentsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingAttachmentsAllResponseResult$zodSchema: z.ZodType<AccountingAttachmentsAllResponseResult>;
export type AccountingAttachmentsAllResponse = {
    Result: GetAttachmentsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingAttachmentsAllResponse$zodSchema: z.ZodType<AccountingAttachmentsAllResponse>;
//# sourceMappingURL=accountingattachmentsallop.d.ts.map