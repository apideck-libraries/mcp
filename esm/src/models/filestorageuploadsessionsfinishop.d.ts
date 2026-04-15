import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetFileResponse } from "./getfileresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export declare const FileStorageUploadSessionsFinishOpServerList: readonly ["https://upload.apideck.com"];
export type FileStorageUploadSessionsFinishGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageUploadSessionsFinishGlobals$zodSchema: z.ZodType<FileStorageUploadSessionsFinishGlobals>;
export type FileStorageUploadSessionsFinishRequestBody = {};
export declare const FileStorageUploadSessionsFinishRequestBody$zodSchema: z.ZodType<FileStorageUploadSessionsFinishRequestBody>;
export type FileStorageUploadSessionsFinishRequest = {
    id: string;
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    digest?: string | undefined;
    body?: FileStorageUploadSessionsFinishRequestBody | undefined;
};
export declare const FileStorageUploadSessionsFinishRequest$zodSchema: z.ZodType<FileStorageUploadSessionsFinishRequest>;
export type FileStorageUploadSessionsFinishResponse = GetFileResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageUploadSessionsFinishResponse$zodSchema: z.ZodType<FileStorageUploadSessionsFinishResponse>;
//# sourceMappingURL=filestorageuploadsessionsfinishop.d.ts.map