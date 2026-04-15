import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateUploadSessionResponse } from "./updateuploadsessionresponse.js";
export declare const FileStorageUploadSessionsUploadOpServerList: readonly ["https://upload.apideck.com"];
export type FileStorageUploadSessionsUploadGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageUploadSessionsUploadGlobals$zodSchema: z.ZodType<FileStorageUploadSessionsUploadGlobals>;
export type FileStorageUploadSessionsUploadRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    part_number: number;
    digest?: string | undefined;
    raw?: boolean | undefined;
    body: Uint8Array | string;
};
export declare const FileStorageUploadSessionsUploadRequest$zodSchema: z.ZodType<FileStorageUploadSessionsUploadRequest>;
export type FileStorageUploadSessionsUploadResponse = UpdateUploadSessionResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageUploadSessionsUploadResponse$zodSchema: z.ZodType<FileStorageUploadSessionsUploadResponse>;
//# sourceMappingURL=filestorageuploadsessionsuploadop.d.ts.map