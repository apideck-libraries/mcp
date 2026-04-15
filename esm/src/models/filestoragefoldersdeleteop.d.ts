import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteFolderResponse } from "./deletefolderresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type FileStorageFoldersDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageFoldersDeleteGlobals$zodSchema: z.ZodType<FileStorageFoldersDeleteGlobals>;
export type FileStorageFoldersDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const FileStorageFoldersDeleteRequest$zodSchema: z.ZodType<FileStorageFoldersDeleteRequest>;
export type FileStorageFoldersDeleteResponse = DeleteFolderResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageFoldersDeleteResponse$zodSchema: z.ZodType<FileStorageFoldersDeleteResponse>;
//# sourceMappingURL=filestoragefoldersdeleteop.d.ts.map