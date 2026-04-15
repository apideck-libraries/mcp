import * as z from "zod";
import { AttachmentReferenceType } from "./attachmentreferencetype.js";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteAttachmentResponse } from "./deleteattachmentresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingAttachmentsDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingAttachmentsDeleteGlobals$zodSchema: z.ZodType<AccountingAttachmentsDeleteGlobals>;
export type AccountingAttachmentsDeleteRequest = {
    reference_type: AttachmentReferenceType;
    reference_id: string;
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingAttachmentsDeleteRequest$zodSchema: z.ZodType<AccountingAttachmentsDeleteRequest>;
export type AccountingAttachmentsDeleteResponse = DeleteAttachmentResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingAttachmentsDeleteResponse$zodSchema: z.ZodType<AccountingAttachmentsDeleteResponse>;
//# sourceMappingURL=accountingattachmentsdeleteop.d.ts.map