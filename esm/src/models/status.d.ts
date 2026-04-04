import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * The status of the webhook.
 */
export declare const Status: {
    readonly Enabled: "enabled";
    readonly Disabled: "disabled";
};
/**
 * The status of the webhook.
 */
export type Status = OpenEnum<typeof Status>;
export declare const Status$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    disabled: "disabled";
    enabled: "enabled";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
//# sourceMappingURL=status.d.ts.map