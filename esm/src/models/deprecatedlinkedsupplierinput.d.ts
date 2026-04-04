import * as z from "zod";
import { Address } from "./address.js";
/**
 * The supplier this entity is linked to.
 *
 * @deprecated class: This field is deprecated and may be removed in a future version..
 */
export type DeprecatedLinkedSupplierInput = {
    display_name?: string | null | undefined;
    address?: Address | undefined;
};
export declare const DeprecatedLinkedSupplierInput$zodSchema: z.ZodType<DeprecatedLinkedSupplierInput>;
//# sourceMappingURL=deprecatedlinkedsupplierinput.d.ts.map