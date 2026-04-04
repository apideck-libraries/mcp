import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * The current consent state of the connection
 */
export declare const ConsentState: {
    readonly Implicit: "implicit";
    readonly Pending: "pending";
    readonly Granted: "granted";
    readonly Denied: "denied";
    readonly Revoked: "revoked";
    readonly RequiresReconsent: "requires_reconsent";
};
/**
 * The current consent state of the connection
 */
export type ConsentState = OpenEnum<typeof ConsentState>;
export declare const ConsentState$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    pending: "pending";
    granted: "granted";
    implicit: "implicit";
    denied: "denied";
    revoked: "revoked";
    requires_reconsent: "requires_reconsent";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
//# sourceMappingURL=consentstate.d.ts.map