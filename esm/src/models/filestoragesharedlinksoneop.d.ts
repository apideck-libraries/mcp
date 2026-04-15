import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetSharedLinkResponse } from "./getsharedlinkresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type FileStorageSharedLinksOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageSharedLinksOneGlobals$zodSchema: z.ZodType<FileStorageSharedLinksOneGlobals>;
export type FileStorageSharedLinksOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const FileStorageSharedLinksOneRequest$zodSchema: z.ZodType<FileStorageSharedLinksOneRequest>;
export type FileStorageSharedLinksOneResponse = GetSharedLinkResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageSharedLinksOneResponse$zodSchema: z.ZodType<FileStorageSharedLinksOneResponse>;
//# sourceMappingURL=filestoragesharedlinksoneop.d.ts.map