import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * The operational health status of the connection
 */
export declare const ConnectionHealth: {
    readonly Ok: "ok";
    readonly PendingRefresh: "pending_refresh";
    readonly NeedsAuth: "needs_auth";
    readonly NeedsConsent: "needs_consent";
    readonly Revoked: "revoked";
    readonly MissingSettings: "missing_settings";
};
/**
 * The operational health status of the connection
 */
export type ConnectionHealth = OpenEnum<typeof ConnectionHealth>;
export declare const ConnectionHealth$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    ok: "ok";
    revoked: "revoked";
    missing_settings: "missing_settings";
    needs_consent: "needs_consent";
    needs_auth: "needs_auth";
    pending_refresh: "pending_refresh";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
//# sourceMappingURL=connectionhealth.d.ts.map