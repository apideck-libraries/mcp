import * as z from "zod";
import { CustomObjectSchema } from "./customobjectschema.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Custom object schemas
 */
export type GetCustomObjectSchemasResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<CustomObjectSchema>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetCustomObjectSchemasResponse$zodSchema: z.ZodType<GetCustomObjectSchemasResponse>;
//# sourceMappingURL=getcustomobjectschemasresponse.d.ts.map