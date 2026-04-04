import * as z from "zod";
import { ApisFilter } from "./apisfilter.js";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetApisResponse } from "./getapisresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
export type ConnectorApisAllGlobals = {
    xApideckAppId?: string | undefined;
};
export declare const ConnectorApisAllGlobals$zodSchema: z.ZodType<ConnectorApisAllGlobals>;
export type ConnectorApisAllRequest = {
    xApideckAppId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: ApisFilter | undefined;
};
export declare const ConnectorApisAllRequest$zodSchema: z.ZodType<ConnectorApisAllRequest>;
export type ConnectorApisAllResponseResult = GetApisResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | UnexpectedErrorResponse;
export declare const ConnectorApisAllResponseResult$zodSchema: z.ZodType<ConnectorApisAllResponseResult>;
export type ConnectorApisAllResponse = {
    Result: GetApisResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | UnexpectedErrorResponse;
};
export declare const ConnectorApisAllResponse$zodSchema: z.ZodType<ConnectorApisAllResponse>;
//# sourceMappingURL=connectorapisallop.d.ts.map