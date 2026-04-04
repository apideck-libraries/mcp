import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DriveGroupInput } from "./drivegroupinput.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateDriveGroupResponse } from "./updatedrivegroupresponse.js";
export type FileStorageDriveGroupsUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageDriveGroupsUpdateGlobals$zodSchema: z.ZodType<FileStorageDriveGroupsUpdateGlobals>;
export type FileStorageDriveGroupsUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: DriveGroupInput;
};
export declare const FileStorageDriveGroupsUpdateRequest$zodSchema: z.ZodType<FileStorageDriveGroupsUpdateRequest>;
export type FileStorageDriveGroupsUpdateResponse = UpdateDriveGroupResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageDriveGroupsUpdateResponse$zodSchema: z.ZodType<FileStorageDriveGroupsUpdateResponse>;
//# sourceMappingURL=filestoragedrivegroupsupdateop.d.ts.map