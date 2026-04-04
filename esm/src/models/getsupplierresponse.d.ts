import * as z from "zod";
import { Supplier } from "./supplier.js";
/**
 * Supplier
 */
export type GetSupplierResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Supplier;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetSupplierResponse$zodSchema: z.ZodType<GetSupplierResponse>;
//# sourceMappingURL=getsupplierresponse.d.ts.map