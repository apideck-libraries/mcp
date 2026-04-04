import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CopyFolderRequest } from "./copyfolderrequest.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateFolderResponse } from "./updatefolderresponse.js";
export type FileStorageFoldersCopyGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageFoldersCopyGlobals$zodSchema: z.ZodType<FileStorageFoldersCopyGlobals>;
export type FileStorageFoldersCopyRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
    body: CopyFolderRequest;
};
export declare const FileStorageFoldersCopyRequest$zodSchema: z.ZodType<FileStorageFoldersCopyRequest>;
export type FileStorageFoldersCopyResponse = UpdateFolderResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageFoldersCopyResponse$zodSchema: z.ZodType<FileStorageFoldersCopyResponse>;
//# sourceMappingURL=filestoragefolderscopyop.d.ts.map