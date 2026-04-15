import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetConsumerResponse } from "./getconsumerresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type VaultConsumersOneGlobals = {
    xApideckAppId?: string | undefined;
};
export declare const VaultConsumersOneGlobals$zodSchema: z.ZodType<VaultConsumersOneGlobals>;
export type VaultConsumersOneRequest = {
    xApideckAppId?: string | undefined;
    consumer_id: string;
};
export declare const VaultConsumersOneRequest$zodSchema: z.ZodType<VaultConsumersOneRequest>;
export type VaultConsumersOneResponse = GetConsumerResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const VaultConsumersOneResponse$zodSchema: z.ZodType<VaultConsumersOneResponse>;
//# sourceMappingURL=vaultconsumersoneop.d.ts.map