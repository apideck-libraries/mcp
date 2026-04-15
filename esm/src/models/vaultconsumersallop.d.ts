import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { ConsumersFilter } from "./consumersfilter.js";
import { GetConsumersResponse } from "./getconsumersresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type VaultConsumersAllGlobals = {
    xApideckAppId?: string | undefined;
};
export declare const VaultConsumersAllGlobals$zodSchema: z.ZodType<VaultConsumersAllGlobals>;
export type VaultConsumersAllRequest = {
    xApideckAppId?: string | undefined;
    filter?: ConsumersFilter | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
};
export declare const VaultConsumersAllRequest$zodSchema: z.ZodType<VaultConsumersAllRequest>;
export type VaultConsumersAllResponseResult = GetConsumersResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const VaultConsumersAllResponseResult$zodSchema: z.ZodType<VaultConsumersAllResponseResult>;
export type VaultConsumersAllResponse = {
    Result: GetConsumersResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const VaultConsumersAllResponse$zodSchema: z.ZodType<VaultConsumersAllResponse>;
//# sourceMappingURL=vaultconsumersallop.d.ts.map