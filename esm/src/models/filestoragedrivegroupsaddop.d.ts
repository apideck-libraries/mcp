import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateDriveGroupResponse } from "./createdrivegroupresponse.js";
import { DriveGroupInput } from "./drivegroupinput.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type FileStorageDriveGroupsAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageDriveGroupsAddGlobals$zodSchema: z.ZodType<FileStorageDriveGroupsAddGlobals>;
export type FileStorageDriveGroupsAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: DriveGroupInput;
};
export declare const FileStorageDriveGroupsAddRequest$zodSchema: z.ZodType<FileStorageDriveGroupsAddRequest>;
export type FileStorageDriveGroupsAddResponse = CreateDriveGroupResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageDriveGroupsAddResponse$zodSchema: z.ZodType<FileStorageDriveGroupsAddResponse>;
//# sourceMappingURL=filestoragedrivegroupsaddop.d.ts.map