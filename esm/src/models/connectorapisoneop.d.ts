import * as z from "zod";
import { GetApiResponse } from "./getapiresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
export type ConnectorApisOneGlobals = {
    xApideckAppId?: string | undefined;
};
export declare const ConnectorApisOneGlobals$zodSchema: z.ZodType<ConnectorApisOneGlobals>;
export type ConnectorApisOneRequest = {
    xApideckAppId?: string | undefined;
    id: string;
};
export declare const ConnectorApisOneRequest$zodSchema: z.ZodType<ConnectorApisOneRequest>;
export type ConnectorApisOneResponse = GetApiResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnexpectedErrorResponse;
export declare const ConnectorApisOneResponse$zodSchema: z.ZodType<ConnectorApisOneResponse>;
//# sourceMappingURL=connectorapisoneop.d.ts.map