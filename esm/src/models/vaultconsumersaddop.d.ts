import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateConsumerRequest } from "./createconsumerrequest.js";
import { CreateConsumerResponse } from "./createconsumerresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type VaultConsumersAddGlobals = {
    xApideckAppId?: string | undefined;
};
export declare const VaultConsumersAddGlobals$zodSchema: z.ZodType<VaultConsumersAddGlobals>;
export type VaultConsumersAddRequest = {
    xApideckAppId?: string | undefined;
    body: CreateConsumerRequest;
};
export declare const VaultConsumersAddRequest$zodSchema: z.ZodType<VaultConsumersAddRequest>;
export type VaultConsumersAddResponse = CreateConsumerResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const VaultConsumersAddResponse$zodSchema: z.ZodType<VaultConsumersAddResponse>;
//# sourceMappingURL=vaultconsumersaddop.d.ts.map