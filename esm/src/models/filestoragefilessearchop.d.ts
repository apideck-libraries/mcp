import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { FilesFilter } from "./filesfilter.js";
import { FilesSearch } from "./filessearch.js";
import { GetFilesResponse } from "./getfilesresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type FileStorageFilesSearchGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageFilesSearchGlobals$zodSchema: z.ZodType<FileStorageFilesSearchGlobals>;
export type FileStorageFilesSearchRequest = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    raw?: boolean | undefined;
    filter?: FilesFilter | undefined;
    body: FilesSearch;
};
export declare const FileStorageFilesSearchRequest$zodSchema: z.ZodType<FileStorageFilesSearchRequest>;
export type FileStorageFilesSearchResponse = GetFilesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageFilesSearchResponse$zodSchema: z.ZodType<FileStorageFilesSearchResponse>;
//# sourceMappingURL=filestoragefilessearchop.d.ts.map