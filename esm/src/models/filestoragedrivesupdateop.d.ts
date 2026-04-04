import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DriveInput } from "./driveinput.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateDriveResponse } from "./updatedriveresponse.js";
export type FileStorageDrivesUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageDrivesUpdateGlobals$zodSchema: z.ZodType<FileStorageDrivesUpdateGlobals>;
export type FileStorageDrivesUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: DriveInput;
};
export declare const FileStorageDrivesUpdateRequest$zodSchema: z.ZodType<FileStorageDrivesUpdateRequest>;
export type FileStorageDrivesUpdateResponse = UpdateDriveResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageDrivesUpdateResponse$zodSchema: z.ZodType<FileStorageDrivesUpdateResponse>;
//# sourceMappingURL=filestoragedrivesupdateop.d.ts.map