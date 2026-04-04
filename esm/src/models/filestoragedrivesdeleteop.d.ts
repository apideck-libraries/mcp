import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteDriveResponse } from "./deletedriveresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type FileStorageDrivesDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageDrivesDeleteGlobals$zodSchema: z.ZodType<FileStorageDrivesDeleteGlobals>;
export type FileStorageDrivesDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const FileStorageDrivesDeleteRequest$zodSchema: z.ZodType<FileStorageDrivesDeleteRequest>;
export type FileStorageDrivesDeleteResponse = DeleteDriveResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageDrivesDeleteResponse$zodSchema: z.ZodType<FileStorageDrivesDeleteResponse>;
//# sourceMappingURL=filestoragedrivesdeleteop.d.ts.map