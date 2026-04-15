import * as z from "zod";
import { AttachmentReferenceType } from "./attachmentreferencetype.js";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingAttachmentsDownloadGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingAttachmentsDownloadGlobals$zodSchema: z.ZodType<AccountingAttachmentsDownloadGlobals>;
export type AccountingAttachmentsDownloadRequest = {
    reference_type: AttachmentReferenceType;
    reference_id: string;
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingAttachmentsDownloadRequest$zodSchema: z.ZodType<AccountingAttachmentsDownloadRequest>;
export type AccountingAttachmentsDownloadResponse = Uint8Array | string | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingAttachmentsDownloadResponse$zodSchema: z.ZodType<AccountingAttachmentsDownloadResponse>;
//# sourceMappingURL=accountingattachmentsdownloadop.d.ts.map