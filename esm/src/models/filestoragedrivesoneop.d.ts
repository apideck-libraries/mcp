import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetDriveResponse } from "./getdriveresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type FileStorageDrivesOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const FileStorageDrivesOneGlobals$zodSchema: z.ZodType<FileStorageDrivesOneGlobals>;
export type FileStorageDrivesOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const FileStorageDrivesOneRequest$zodSchema: z.ZodType<FileStorageDrivesOneRequest>;
export type FileStorageDrivesOneResponse = GetDriveResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const FileStorageDrivesOneResponse$zodSchema: z.ZodType<FileStorageDrivesOneResponse>;
//# sourceMappingURL=filestoragedrivesoneop.d.ts.map