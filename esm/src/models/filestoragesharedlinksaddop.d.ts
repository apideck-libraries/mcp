import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateSharedLinkResponse } from "./createsharedlinkresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { SharedLinkInput } from "./sharedlinkoutput.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type FileStorageSharedLinksAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageSharedLinksAddGlobals$zodSchema: z.ZodType<FileStorageSharedLinksAddGlobals>;
export type FileStorageSharedLinksAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: SharedLinkInput;
};
export declare const FileStorageSharedLinksAddRequest$zodSchema: z.ZodType<FileStorageSharedLinksAddRequest>;
export type FileStorageSharedLinksAddResponse = CreateSharedLinkResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageSharedLinksAddResponse$zodSchema: z.ZodType<FileStorageSharedLinksAddResponse>;
//# sourceMappingURL=filestoragesharedlinksaddop.d.ts.map