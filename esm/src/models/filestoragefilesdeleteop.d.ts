import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteFileResponse } from "./deletefileresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type FileStorageFilesDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageFilesDeleteGlobals$zodSchema: z.ZodType<FileStorageFilesDeleteGlobals>;
export type FileStorageFilesDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const FileStorageFilesDeleteRequest$zodSchema: z.ZodType<FileStorageFilesDeleteRequest>;
export type FileStorageFilesDeleteResponse = DeleteFileResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageFilesDeleteResponse$zodSchema: z.ZodType<FileStorageFilesDeleteResponse>;
//# sourceMappingURL=filestoragefilesdeleteop.d.ts.map