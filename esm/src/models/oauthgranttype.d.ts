import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types
 */
export declare const OAuthGrantType: {
    readonly AuthorizationCode: "authorization_code";
    readonly ClientCredentials: "client_credentials";
    readonly Password: "password";
};
/**
 * OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types
 */
export type OAuthGrantType = OpenEnum<typeof OAuthGrantType>;
export declare const OAuthGrantType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    password: "password";
    authorization_code: "authorization_code";
    client_credentials: "client_credentials";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
//# sourceMappingURL=oauthgranttype.d.ts.map