import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DriveGroupsFilter } from "./drivegroupsfilter.js";
import { GetDriveGroupsResponse } from "./getdrivegroupsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type FileStorageDriveGroupsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageDriveGroupsAllGlobals$zodSchema: z.ZodType<FileStorageDriveGroupsAllGlobals>;
export type FileStorageDriveGroupsAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: DriveGroupsFilter | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const FileStorageDriveGroupsAllRequest$zodSchema: z.ZodType<FileStorageDriveGroupsAllRequest>;
export type FileStorageDriveGroupsAllResponseResult = GetDriveGroupsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageDriveGroupsAllResponseResult$zodSchema: z.ZodType<FileStorageDriveGroupsAllResponseResult>;
export type FileStorageDriveGroupsAllResponse = {
    Result: GetDriveGroupsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const FileStorageDriveGroupsAllResponse$zodSchema: z.ZodType<FileStorageDriveGroupsAllResponse>;
//# sourceMappingURL=filestoragedrivegroupsallop.d.ts.map