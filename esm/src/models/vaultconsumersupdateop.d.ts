import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateConsumerRequest } from "./updateconsumerrequest.js";
import { UpdateConsumerResponse } from "./updateconsumerresponse.js";
export type VaultConsumersUpdateGlobals = {
    xApideckAppId?: string | undefined;
};
export declare const VaultConsumersUpdateGlobals$zodSchema: z.ZodType<VaultConsumersUpdateGlobals>;
export type VaultConsumersUpdateRequest = {
    xApideckAppId?: string | undefined;
    consumer_id: string;
    body: UpdateConsumerRequest;
};
export declare const VaultConsumersUpdateRequest$zodSchema: z.ZodType<VaultConsumersUpdateRequest>;
export type VaultConsumersUpdateResponse = UpdateConsumerResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const VaultConsumersUpdateResponse$zodSchema: z.ZodType<VaultConsumersUpdateResponse>;
//# sourceMappingURL=vaultconsumersupdateop.d.ts.map