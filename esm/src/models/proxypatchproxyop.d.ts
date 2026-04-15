import * as z from "zod";
import { Unauthorized } from "./unauthorized.js";
export type ProxyPatchProxyGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const ProxyPatchProxyGlobals$zodSchema: z.ZodType<ProxyPatchProxyGlobals>;
export type ProxyPatchProxyRequestBody2 = {};
export declare const ProxyPatchProxyRequestBody2$zodSchema: z.ZodType<ProxyPatchProxyRequestBody2>;
export type ProxyPatchProxyRequestBody1 = {};
export declare const ProxyPatchProxyRequestBody1$zodSchema: z.ZodType<ProxyPatchProxyRequestBody1>;
export type ProxyPatchProxyRequest = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId: string;
    xApideckUnifiedApi?: string | undefined;
    xApideckDownstreamUrl: string;
    xApideckDownstreamAuthorization?: string | undefined;
    xApideckTimeout?: number | undefined;
    body?: Uint8Array | string | undefined;
};
export declare const ProxyPatchProxyRequest$zodSchema: z.ZodType<ProxyPatchProxyRequest>;
export type ProxyPatchProxyResponseResult = {
    [k: string]: any;
} | Uint8Array | string | Uint8Array | string | string | string | string | Unauthorized | {
    [k: string]: any;
} | string | string | string;
export declare const ProxyPatchProxyResponseResult$zodSchema: z.ZodType<ProxyPatchProxyResponseResult>;
export type ProxyPatchProxyResponse = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: {
        [k: string]: any;
    } | Uint8Array | string | Uint8Array | string | string | string | string | Unauthorized | {
        [k: string]: any;
    } | string | string | string;
};
export declare const ProxyPatchProxyResponse$zodSchema: z.ZodType<ProxyPatchProxyResponse>;
//# sourceMappingURL=proxypatchproxyop.d.ts.map