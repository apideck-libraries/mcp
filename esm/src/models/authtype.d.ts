import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Type of authorization used by the connector
 */
export declare const AuthType: {
    readonly Oauth2: "oauth2";
    readonly ApiKey: "apiKey";
    readonly Basic: "basic";
    readonly Custom: "custom";
    readonly None: "none";
};
/**
 * Type of authorization used by the connector
 */
export type AuthType = OpenEnum<typeof AuthType>;
export declare const AuthType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    custom: "custom";
    apiKey: "apiKey";
    none: "none";
    oauth2: "oauth2";
    basic: "basic";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
//# sourceMappingURL=authtype.d.ts.map