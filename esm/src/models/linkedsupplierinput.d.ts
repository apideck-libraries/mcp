import * as z from "zod";
import { Address } from "./address.js";
/**
 * The supplier this entity is linked to.
 */
export type LinkedSupplierInput = {
    id?: string | undefined;
    display_name?: string | null | undefined;
    address?: Address | undefined;
};
export declare const LinkedSupplierInput$zodSchema: z.ZodType<LinkedSupplierInput>;
//# sourceMappingURL=linkedsupplierinput.d.ts.map