import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetSharedLinksResponse } from "./getsharedlinksresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type FileStorageSharedLinksAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageSharedLinksAllGlobals$zodSchema: z.ZodType<FileStorageSharedLinksAllGlobals>;
export type FileStorageSharedLinksAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const FileStorageSharedLinksAllRequest$zodSchema: z.ZodType<FileStorageSharedLinksAllRequest>;
export type FileStorageSharedLinksAllResponseResult = GetSharedLinksResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageSharedLinksAllResponseResult$zodSchema: z.ZodType<FileStorageSharedLinksAllResponseResult>;
export type FileStorageSharedLinksAllResponse = {
    Result: GetSharedLinksResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const FileStorageSharedLinksAllResponse$zodSchema: z.ZodType<FileStorageSharedLinksAllResponse>;
//# sourceMappingURL=filestoragesharedlinksallop.d.ts.map