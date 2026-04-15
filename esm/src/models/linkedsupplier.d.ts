import * as z from "zod";
import { Address } from "./address.js";
/**
 * The supplier this entity is linked to.
 */
export type LinkedSupplier = {
    id?: string | undefined;
    display_id?: string | null | undefined;
    display_name?: string | null | undefined;
    company_name?: string | null | undefined;
    address?: Address | undefined;
};
export declare const LinkedSupplier$zodSchema: z.ZodType<LinkedSupplier>;
//# sourceMappingURL=linkedsupplier.d.ts.map