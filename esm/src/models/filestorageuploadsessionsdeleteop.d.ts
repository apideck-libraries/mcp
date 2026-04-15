import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteUploadSessionResponse } from "./deleteuploadsessionresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type FileStorageUploadSessionsDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageUploadSessionsDeleteGlobals$zodSchema: z.ZodType<FileStorageUploadSessionsDeleteGlobals>;
export type FileStorageUploadSessionsDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const FileStorageUploadSessionsDeleteRequest$zodSchema: z.ZodType<FileStorageUploadSessionsDeleteRequest>;
export type FileStorageUploadSessionsDeleteResponse = DeleteUploadSessionResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageUploadSessionsDeleteResponse$zodSchema: z.ZodType<FileStorageUploadSessionsDeleteResponse>;
//# sourceMappingURL=filestorageuploadsessionsdeleteop.d.ts.map