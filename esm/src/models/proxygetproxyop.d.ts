import * as z from "zod";
import { Unauthorized } from "./unauthorized.js";
export type ProxyGetProxyGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const ProxyGetProxyGlobals$zodSchema: z.ZodType<ProxyGetProxyGlobals>;
export type ProxyGetProxyRequest = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId: string;
    xApideckUnifiedApi?: string | undefined;
    xApideckDownstreamUrl: string;
    xApideckDownstreamAuthorization?: string | undefined;
    xApideckTimeout?: number | undefined;
};
export declare const ProxyGetProxyRequest$zodSchema: z.ZodType<ProxyGetProxyRequest>;
export type ProxyGetProxyResponseResult = {
    [k: string]: any;
} | Uint8Array | string | Uint8Array | string | string | string | string | Unauthorized | {
    [k: string]: any;
} | string | string | string;
export declare const ProxyGetProxyResponseResult$zodSchema: z.ZodType<ProxyGetProxyResponseResult>;
export type ProxyGetProxyResponse = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: {
        [k: string]: any;
    } | Uint8Array | string | Uint8Array | string | string | string | string | Unauthorized | {
        [k: string]: any;
    } | string | string | string;
};
export declare const ProxyGetProxyResponse$zodSchema: z.ZodType<ProxyGetProxyResponse>;
//# sourceMappingURL=proxygetproxyop.d.ts.map