import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DrivesFilter } from "./drivesfilter.js";
import { GetDrivesResponse } from "./getdrivesresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type FileStorageDrivesAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageDrivesAllGlobals$zodSchema: z.ZodType<FileStorageDrivesAllGlobals>;
export type FileStorageDrivesAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: DrivesFilter | undefined;
    fields?: string | null | undefined;
};
export declare const FileStorageDrivesAllRequest$zodSchema: z.ZodType<FileStorageDrivesAllRequest>;
export type FileStorageDrivesAllResponseResult = GetDrivesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageDrivesAllResponseResult$zodSchema: z.ZodType<FileStorageDrivesAllResponseResult>;
export type FileStorageDrivesAllResponse = {
    Result: GetDrivesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const FileStorageDrivesAllResponse$zodSchema: z.ZodType<FileStorageDrivesAllResponse>;
//# sourceMappingURL=filestoragedrivesallop.d.ts.map