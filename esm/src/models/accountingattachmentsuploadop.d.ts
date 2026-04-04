import * as z from "zod";
import { AttachmentReferenceType } from "./attachmentreferencetype.js";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateAttachmentResponse } from "./createattachmentresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export declare const AccountingAttachmentsUploadOpServerList: readonly ["https://upload.apideck.com"];
export type AccountingAttachmentsUploadGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingAttachmentsUploadGlobals$zodSchema: z.ZodType<AccountingAttachmentsUploadGlobals>;
export type AccountingAttachmentsUploadRequest = {
    reference_type: AttachmentReferenceType;
    reference_id: string;
    raw?: boolean | undefined;
    xApideckMetadata?: string | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: Uint8Array | string;
};
export declare const AccountingAttachmentsUploadRequest$zodSchema: z.ZodType<AccountingAttachmentsUploadRequest>;
export type AccountingAttachmentsUploadResponse = CreateAttachmentResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingAttachmentsUploadResponse$zodSchema: z.ZodType<AccountingAttachmentsUploadResponse>;
//# sourceMappingURL=accountingattachmentsuploadop.d.ts.map