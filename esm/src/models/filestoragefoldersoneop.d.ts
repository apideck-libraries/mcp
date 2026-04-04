import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetFolderResponse } from "./getfolderresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type FileStorageFoldersOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageFoldersOneGlobals$zodSchema: z.ZodType<FileStorageFoldersOneGlobals>;
export type FileStorageFoldersOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const FileStorageFoldersOneRequest$zodSchema: z.ZodType<FileStorageFoldersOneRequest>;
export type FileStorageFoldersOneResponse = GetFolderResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageFoldersOneResponse$zodSchema: z.ZodType<FileStorageFoldersOneResponse>;
//# sourceMappingURL=filestoragefoldersoneop.d.ts.map