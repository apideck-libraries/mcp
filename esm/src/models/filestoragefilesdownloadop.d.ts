import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type FileStorageFilesDownloadGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageFilesDownloadGlobals$zodSchema: z.ZodType<FileStorageFilesDownloadGlobals>;
export type FileStorageFilesDownloadRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    fields?: string | null | undefined;
};
export declare const FileStorageFilesDownloadRequest$zodSchema: z.ZodType<FileStorageFilesDownloadRequest>;
export type FileStorageFilesDownloadResponse = Uint8Array | string | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageFilesDownloadResponse$zodSchema: z.ZodType<FileStorageFilesDownloadResponse>;
//# sourceMappingURL=filestoragefilesdownloadop.d.ts.map