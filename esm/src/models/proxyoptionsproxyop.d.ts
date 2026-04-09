import * as z from "zod";
import { Unauthorized } from "./unauthorized.js";
export type ProxyOptionsProxyGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const ProxyOptionsProxyGlobals$zodSchema: z.ZodType<ProxyOptionsProxyGlobals>;
export type ProxyOptionsProxyRequest = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId: string;
    xApideckUnifiedApi?: string | undefined;
    xApideckDownstreamUrl: string;
    xApideckDownstreamAuthorization?: string | undefined;
    xApideckTimeout?: number | undefined;
};
export declare const ProxyOptionsProxyRequest$zodSchema: z.ZodType<ProxyOptionsProxyRequest>;
export type ProxyOptionsProxyResponseResult = {
    [k: string]: any;
} | Uint8Array | string | Uint8Array | string | string | string | string | Unauthorized | {
    [k: string]: any;
} | string | string | string;
export declare const ProxyOptionsProxyResponseResult$zodSchema: z.ZodType<ProxyOptionsProxyResponseResult>;
export type ProxyOptionsProxyResponse = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: {
        [k: string]: any;
    } | Uint8Array | string | Uint8Array | string | string | string | string | Unauthorized | {
        [k: string]: any;
    } | string | string | string;
};
export declare const ProxyOptionsProxyResponse$zodSchema: z.ZodType<ProxyOptionsProxyResponse>;
//# sourceMappingURL=proxyoptionsproxyop.d.ts.map