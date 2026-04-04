import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateFileRequest } from "./updatefilerequest.js";
import { UpdateFileResponse } from "./updatefileresponse.js";
export type FileStorageFilesUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageFilesUpdateGlobals$zodSchema: z.ZodType<FileStorageFilesUpdateGlobals>;
export type FileStorageFilesUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: UpdateFileRequest;
};
export declare const FileStorageFilesUpdateRequest$zodSchema: z.ZodType<FileStorageFilesUpdateRequest>;
export type FileStorageFilesUpdateResponse = UpdateFileResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageFilesUpdateResponse$zodSchema: z.ZodType<FileStorageFilesUpdateResponse>;
//# sourceMappingURL=filestoragefilesupdateop.d.ts.map