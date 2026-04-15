import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetDriveGroupResponse } from "./getdrivegroupresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type FileStorageDriveGroupsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageDriveGroupsOneGlobals$zodSchema: z.ZodType<FileStorageDriveGroupsOneGlobals>;
export type FileStorageDriveGroupsOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const FileStorageDriveGroupsOneRequest$zodSchema: z.ZodType<FileStorageDriveGroupsOneRequest>;
export type FileStorageDriveGroupsOneResponse = GetDriveGroupResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageDriveGroupsOneResponse$zodSchema: z.ZodType<FileStorageDriveGroupsOneResponse>;
//# sourceMappingURL=filestoragedrivegroupsoneop.d.ts.map