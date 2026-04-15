import * as z from "zod";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
import { Supplier } from "./supplier.js";
/**
 * Suppliers
 */
export type GetSuppliersResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Supplier>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetSuppliersResponse$zodSchema: z.ZodType<GetSuppliersResponse>;
//# sourceMappingURL=getsuppliersresponse.d.ts.map