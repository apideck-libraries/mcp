import * as z from "zod";
import { Unauthorized } from "./unauthorized.js";
export type ProxyPutProxyGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const ProxyPutProxyGlobals$zodSchema: z.ZodType<ProxyPutProxyGlobals>;
export type ProxyPutProxyRequestBody2 = {};
export declare const ProxyPutProxyRequestBody2$zodSchema: z.ZodType<ProxyPutProxyRequestBody2>;
export type ProxyPutProxyRequestBody1 = {};
export declare const ProxyPutProxyRequestBody1$zodSchema: z.ZodType<ProxyPutProxyRequestBody1>;
export type ProxyPutProxyRequest = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId: string;
    xApideckUnifiedApi?: string | undefined;
    xApideckDownstreamUrl: string;
    xApideckDownstreamAuthorization?: string | undefined;
    xApideckTimeout?: number | undefined;
    body?: Uint8Array | string | undefined;
};
export declare const ProxyPutProxyRequest$zodSchema: z.ZodType<ProxyPutProxyRequest>;
export type ProxyPutProxyResponseResult = {
    [k: string]: any;
} | Uint8Array | string | Uint8Array | string | string | string | string | Unauthorized | {
    [k: string]: any;
} | string | string | string;
export declare const ProxyPutProxyResponseResult$zodSchema: z.ZodType<ProxyPutProxyResponseResult>;
export type ProxyPutProxyResponse = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: {
        [k: string]: any;
    } | Uint8Array | string | Uint8Array | string | string | string | string | Unauthorized | {
        [k: string]: any;
    } | string | string | string;
};
export declare const ProxyPutProxyResponse$zodSchema: z.ZodType<ProxyPutProxyResponse>;
//# sourceMappingURL=proxyputproxyop.d.ts.map