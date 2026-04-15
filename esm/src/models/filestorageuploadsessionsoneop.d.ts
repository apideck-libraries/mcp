import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetUploadSessionResponse } from "./getuploadsessionresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export declare const FileStorageUploadSessionsOneOpServerList: readonly ["https://upload.apideck.com"];
export type FileStorageUploadSessionsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageUploadSessionsOneGlobals$zodSchema: z.ZodType<FileStorageUploadSessionsOneGlobals>;
export type FileStorageUploadSessionsOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const FileStorageUploadSessionsOneRequest$zodSchema: z.ZodType<FileStorageUploadSessionsOneRequest>;
export type FileStorageUploadSessionsOneResponse = GetUploadSessionResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageUploadSessionsOneResponse$zodSchema: z.ZodType<FileStorageUploadSessionsOneResponse>;
//# sourceMappingURL=filestorageuploadsessionsoneop.d.ts.map