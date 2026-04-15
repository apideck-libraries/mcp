import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateFolderRequest } from "./createfolderrequest.js";
import { CreateFolderResponse } from "./createfolderresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type FileStorageFoldersAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageFoldersAddGlobals$zodSchema: z.ZodType<FileStorageFoldersAddGlobals>;
export type FileStorageFoldersAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    fields?: string | null | undefined;
    body: CreateFolderRequest;
};
export declare const FileStorageFoldersAddRequest$zodSchema: z.ZodType<FileStorageFoldersAddRequest>;
export type FileStorageFoldersAddResponse = CreateFolderResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageFoldersAddResponse$zodSchema: z.ZodType<FileStorageFoldersAddResponse>;
//# sourceMappingURL=filestoragefoldersaddop.d.ts.map