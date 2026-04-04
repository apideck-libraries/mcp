import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteDriveGroupResponse } from "./deletedrivegroupresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type FileStorageDriveGroupsDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageDriveGroupsDeleteGlobals$zodSchema: z.ZodType<FileStorageDriveGroupsDeleteGlobals>;
export type FileStorageDriveGroupsDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const FileStorageDriveGroupsDeleteRequest$zodSchema: z.ZodType<FileStorageDriveGroupsDeleteRequest>;
export type FileStorageDriveGroupsDeleteResponse = DeleteDriveGroupResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageDriveGroupsDeleteResponse$zodSchema: z.ZodType<FileStorageDriveGroupsDeleteResponse>;
//# sourceMappingURL=filestoragedrivegroupsdeleteop.d.ts.map