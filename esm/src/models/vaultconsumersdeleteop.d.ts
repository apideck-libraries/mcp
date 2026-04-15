import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteConsumerResponse } from "./deleteconsumerresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type VaultConsumersDeleteGlobals = {
    xApideckAppId?: string | undefined;
};
export declare const VaultConsumersDeleteGlobals$zodSchema: z.ZodType<VaultConsumersDeleteGlobals>;
export type VaultConsumersDeleteRequest = {
    xApideckAppId?: string | undefined;
    consumer_id: string;
};
export declare const VaultConsumersDeleteRequest$zodSchema: z.ZodType<VaultConsumersDeleteRequest>;
export type VaultConsumersDeleteResponse = DeleteConsumerResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const VaultConsumersDeleteResponse$zodSchema: z.ZodType<VaultConsumersDeleteResponse>;
//# sourceMappingURL=vaultconsumersdeleteop.d.ts.map