import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateFolderRequest } from "./updatefolderrequest.js";
import { UpdateFolderResponse } from "./updatefolderresponse.js";
export type FileStorageFoldersUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageFoldersUpdateGlobals$zodSchema: z.ZodType<FileStorageFoldersUpdateGlobals>;
export type FileStorageFoldersUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: UpdateFolderRequest;
};
export declare const FileStorageFoldersUpdateRequest$zodSchema: z.ZodType<FileStorageFoldersUpdateRequest>;
export type FileStorageFoldersUpdateResponse = UpdateFolderResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageFoldersUpdateResponse$zodSchema: z.ZodType<FileStorageFoldersUpdateResponse>;
//# sourceMappingURL=filestoragefoldersupdateop.d.ts.map