import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateUploadSessionRequest } from "./createuploadsessionrequest.js";
import { CreateUploadSessionResponse } from "./createuploadsessionresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export declare const FileStorageUploadSessionsAddOpServerList: readonly ["https://upload.apideck.com"];
export type FileStorageUploadSessionsAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageUploadSessionsAddGlobals$zodSchema: z.ZodType<FileStorageUploadSessionsAddGlobals>;
export type FileStorageUploadSessionsAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: CreateUploadSessionRequest;
};
export declare const FileStorageUploadSessionsAddRequest$zodSchema: z.ZodType<FileStorageUploadSessionsAddRequest>;
export type FileStorageUploadSessionsAddResponse = CreateUploadSessionResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageUploadSessionsAddResponse$zodSchema: z.ZodType<FileStorageUploadSessionsAddResponse>;
//# sourceMappingURL=filestorageuploadsessionsaddop.d.ts.map