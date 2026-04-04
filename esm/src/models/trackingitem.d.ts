import * as z from "zod";
/**
 * Represents the tracking information associated with an ecommerce order.
 */
export type TrackingItem = {
    provider: string | null;
    number: string | null;
    url?: string | null | undefined;
    updated_at?: string | null | undefined;
};
export declare const TrackingItem$zodSchema: z.ZodType<TrackingItem>;
//# sourceMappingURL=trackingitem.d.ts.map