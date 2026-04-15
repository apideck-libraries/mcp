import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type FileStorageFilesExportGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageFilesExportGlobals$zodSchema: z.ZodType<FileStorageFilesExportGlobals>;
export type FileStorageFilesExportRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    fields?: string | null | undefined;
    format: string;
};
export declare const FileStorageFilesExportRequest$zodSchema: z.ZodType<FileStorageFilesExportRequest>;
export type FileStorageFilesExportResponse = Uint8Array | string | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageFilesExportResponse$zodSchema: z.ZodType<FileStorageFilesExportResponse>;
//# sourceMappingURL=filestoragefilesexportop.d.ts.map