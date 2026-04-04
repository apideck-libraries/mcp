import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Current status of the order.
 */
export declare const EcommerceOrderStatus: {
    readonly Active: "active";
    readonly Completed: "completed";
    readonly Cancelled: "cancelled";
    readonly Archived: "archived";
    readonly Unknown: "unknown";
    readonly Other: "other";
};
/**
 * Current status of the order.
 */
export type EcommerceOrderStatus = OpenEnum<typeof EcommerceOrderStatus>;
export declare const EcommerceOrderStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    unknown: "unknown";
    completed: "completed";
    cancelled: "cancelled";
    other: "other";
    active: "active";
    archived: "archived";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
//# sourceMappingURL=ecommerceorderstatus.d.ts.map