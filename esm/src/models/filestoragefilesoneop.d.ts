import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetFileResponse } from "./getfileresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type FileStorageFilesOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageFilesOneGlobals$zodSchema: z.ZodType<FileStorageFilesOneGlobals>;
export type FileStorageFilesOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const FileStorageFilesOneRequest$zodSchema: z.ZodType<FileStorageFilesOneRequest>;
export type FileStorageFilesOneResponse = GetFileResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageFilesOneResponse$zodSchema: z.ZodType<FileStorageFilesOneResponse>;
//# sourceMappingURL=filestoragefilesoneop.d.ts.map