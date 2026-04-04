import * as z from "zod";
import { EcommerceOrderStatus } from "./ecommerceorderstatus.js";
/**
 * The order this entity is linked to.
 */
export type LinkedEcommerceOrder = {
    id?: string | undefined;
    total?: string | null | undefined;
    status?: EcommerceOrderStatus | null | undefined;
};
export declare const LinkedEcommerceOrder$zodSchema: z.ZodType<LinkedEcommerceOrder>;
//# sourceMappingURL=linkedecommerceorder.d.ts.map