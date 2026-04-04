import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateDriveResponse } from "./createdriveresponse.js";
import { DriveInput } from "./driveinput.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type FileStorageDrivesAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageDrivesAddGlobals$zodSchema: z.ZodType<FileStorageDrivesAddGlobals>;
export type FileStorageDrivesAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: DriveInput;
};
export declare const FileStorageDrivesAddRequest$zodSchema: z.ZodType<FileStorageDrivesAddRequest>;
export type FileStorageDrivesAddResponse = CreateDriveResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageDrivesAddResponse$zodSchema: z.ZodType<FileStorageDrivesAddResponse>;
//# sourceMappingURL=filestoragedrivesaddop.d.ts.map