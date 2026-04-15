import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteSharedLinkResponse } from "./deletesharedlinkresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type FileStorageSharedLinksDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageSharedLinksDeleteGlobals$zodSchema: z.ZodType<FileStorageSharedLinksDeleteGlobals>;
export type FileStorageSharedLinksDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const FileStorageSharedLinksDeleteRequest$zodSchema: z.ZodType<FileStorageSharedLinksDeleteRequest>;
export type FileStorageSharedLinksDeleteResponse = DeleteSharedLinkResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageSharedLinksDeleteResponse$zodSchema: z.ZodType<FileStorageSharedLinksDeleteResponse>;
//# sourceMappingURL=filestoragesharedlinksdeleteop.d.ts.map