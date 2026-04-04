import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * The current state of the Integration.
 */
export declare const IntegrationState: {
    readonly Disabled: "disabled";
    readonly NeedsConfiguration: "needs_configuration";
    readonly Configured: "configured";
};
/**
 * The current state of the Integration.
 */
export type IntegrationState = OpenEnum<typeof IntegrationState>;
export declare const IntegrationState$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    disabled: "disabled";
    needs_configuration: "needs_configuration";
    configured: "configured";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
//# sourceMappingURL=integrationstate.d.ts.map