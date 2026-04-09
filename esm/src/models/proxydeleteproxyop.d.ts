import * as z from "zod";
import { Unauthorized } from "./unauthorized.js";
export type ProxyDeleteProxyGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const ProxyDeleteProxyGlobals$zodSchema: z.ZodType<ProxyDeleteProxyGlobals>;
export type ProxyDeleteProxyRequest = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId: string;
    xApideckUnifiedApi?: string | undefined;
    xApideckDownstreamUrl: string;
    xApideckDownstreamAuthorization?: string | undefined;
    xApideckTimeout?: number | undefined;
};
export declare const ProxyDeleteProxyRequest$zodSchema: z.ZodType<ProxyDeleteProxyRequest>;
export type ProxyDeleteProxyResponseResult = {
    [k: string]: any;
} | Uint8Array | string | Uint8Array | string | string | string | string | Unauthorized | {
    [k: string]: any;
} | string | string | string;
export declare const ProxyDeleteProxyResponseResult$zodSchema: z.ZodType<ProxyDeleteProxyResponseResult>;
export type ProxyDeleteProxyResponse = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: {
        [k: string]: any;
    } | Uint8Array | string | Uint8Array | string | string | string | string | Unauthorized | {
        [k: string]: any;
    } | string | string | string;
};
export declare const ProxyDeleteProxyResponse$zodSchema: z.ZodType<ProxyDeleteProxyResponse>;
//# sourceMappingURL=proxydeleteproxyop.d.ts.map