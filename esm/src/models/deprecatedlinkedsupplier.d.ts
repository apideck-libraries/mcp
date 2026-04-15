import * as z from "zod";
import { Address } from "./address.js";
/**
 * The supplier this entity is linked to.
 *
 * @deprecated class: This field is deprecated and may be removed in a future version..
 */
export type DeprecatedLinkedSupplier = {
    id?: string | undefined;
    display_id?: string | null | undefined;
    display_name?: string | null | undefined;
    company_name?: string | null | undefined;
    address?: Address | undefined;
};
export declare const DeprecatedLinkedSupplier$zodSchema: z.ZodType<DeprecatedLinkedSupplier>;
//# sourceMappingURL=deprecatedlinkedsupplier.d.ts.map