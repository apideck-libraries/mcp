import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetLogsResponse } from "./getlogsresponse.js";
import { LogsFilter } from "./logsfilter.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type VaultLogsAllGlobals = {
    xApideckAppId?: string | undefined;
    xApideckConsumerId?: string | undefined;
};
export declare const VaultLogsAllGlobals$zodSchema: z.ZodType<VaultLogsAllGlobals>;
export type VaultLogsAllRequest = {
    xApideckAppId?: string | undefined;
    xApideckConsumerId?: string | undefined;
    filter?: LogsFilter | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
};
export declare const VaultLogsAllRequest$zodSchema: z.ZodType<VaultLogsAllRequest>;
export type VaultLogsAllResponseResult = GetLogsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const VaultLogsAllResponseResult$zodSchema: z.ZodType<VaultLogsAllResponseResult>;
export type VaultLogsAllResponse = {
    Result: GetLogsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const VaultLogsAllResponse$zodSchema: z.ZodType<VaultLogsAllResponse>;
//# sourceMappingURL=vaultlogsallop.d.ts.map