import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { SharedLinkInput } from "./sharedlinkoutput.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateSharedLinkResponse } from "./updatesharedlinkresponse.js";
export type FileStorageSharedLinksUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageSharedLinksUpdateGlobals$zodSchema: z.ZodType<FileStorageSharedLinksUpdateGlobals>;
export type FileStorageSharedLinksUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: SharedLinkInput;
};
export declare const FileStorageSharedLinksUpdateRequest$zodSchema: z.ZodType<FileStorageSharedLinksUpdateRequest>;
export type FileStorageSharedLinksUpdateResponse = UpdateSharedLinkResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageSharedLinksUpdateResponse$zodSchema: z.ZodType<FileStorageSharedLinksUpdateResponse>;
//# sourceMappingURL=filestoragesharedlinksupdateop.d.ts.map