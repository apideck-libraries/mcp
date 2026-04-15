import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { FilesFilter } from "./filesfilter.js";
import { FilesSort } from "./filessort.js";
import { GetFilesResponse } from "./getfilesresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type FileStorageFilesAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageFilesAllGlobals$zodSchema: z.ZodType<FileStorageFilesAllGlobals>;
export type FileStorageFilesAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: FilesFilter | undefined;
    sort?: FilesSort | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const FileStorageFilesAllRequest$zodSchema: z.ZodType<FileStorageFilesAllRequest>;
export type FileStorageFilesAllResponseResult = GetFilesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageFilesAllResponseResult$zodSchema: z.ZodType<FileStorageFilesAllResponseResult>;
export type FileStorageFilesAllResponse = {
    Result: GetFilesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const FileStorageFilesAllResponse$zodSchema: z.ZodType<FileStorageFilesAllResponse>;
//# sourceMappingURL=filestoragefilesallop.d.ts.map