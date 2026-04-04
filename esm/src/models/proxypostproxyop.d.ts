import * as z from "zod";
import { Unauthorized } from "./unauthorized.js";
export type ProxyPostProxyGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const ProxyPostProxyGlobals$zodSchema: z.ZodType<ProxyPostProxyGlobals>;
export type ProxyPostProxyRequestBody2 = {};
export declare const ProxyPostProxyRequestBody2$zodSchema: z.ZodType<ProxyPostProxyRequestBody2>;
export type ProxyPostProxyRequestBody1 = {};
export declare const ProxyPostProxyRequestBody1$zodSchema: z.ZodType<ProxyPostProxyRequestBody1>;
export type ProxyPostProxyRequest = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId: string;
    xApideckUnifiedApi?: string | undefined;
    xApideckDownstreamUrl: string;
    xApideckDownstreamAuthorization?: string | undefined;
    body?: Uint8Array | string | undefined;
};
export declare const ProxyPostProxyRequest$zodSchema: z.ZodType<ProxyPostProxyRequest>;
export type ProxyPostProxyResponseResult = {
    [k: string]: any;
} | Uint8Array | string | Uint8Array | string | string | string | string | Unauthorized | {
    [k: string]: any;
} | string | string | string;
export declare const ProxyPostProxyResponseResult$zodSchema: z.ZodType<ProxyPostProxyResponseResult>;
export type ProxyPostProxyResponse = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: {
        [k: string]: any;
    } | Uint8Array | string | Uint8Array | string | string | string | string | Unauthorized | {
        [k: string]: any;
    } | string | string | string;
};
export declare const ProxyPostProxyResponse$zodSchema: z.ZodType<ProxyPostProxyResponse>;
//# sourceMappingURL=proxypostproxyop.d.ts.map