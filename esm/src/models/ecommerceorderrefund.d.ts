import * as z from "zod";
import { Currency } from "./currency.js";
/**
 * A refund for an ecommerce order.
 */
export type EcommerceOrderRefund = {
    id?: string | null | undefined;
    amount?: string | undefined;
    currency?: Currency | null | undefined;
    reason?: string | undefined;
    created_at?: string | null | undefined;
};
export declare const EcommerceOrderRefund$zodSchema: z.ZodType<EcommerceOrderRefund>;
//# sourceMappingURL=ecommerceorderrefund.d.ts.map