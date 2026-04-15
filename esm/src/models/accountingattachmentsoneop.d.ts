import * as z from "zod";
import { AttachmentReferenceType } from "./attachmentreferencetype.js";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetAttachmentResponse } from "./getattachmentresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingAttachmentsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingAttachmentsOneGlobals$zodSchema: z.ZodType<AccountingAttachmentsOneGlobals>;
export type AccountingAttachmentsOneRequest = {
    reference_type: AttachmentReferenceType;
    reference_id: string;
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingAttachmentsOneRequest$zodSchema: z.ZodType<AccountingAttachmentsOneRequest>;
export type AccountingAttachmentsOneResponse = GetAttachmentResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingAttachmentsOneResponse$zodSchema: z.ZodType<AccountingAttachmentsOneResponse>;
//# sourceMappingURL=accountingattachmentsoneop.d.ts.map