import * as z from "zod";
import { CustomObjectSchema } from "./customobjectschema.js";
/**
 * Custom object schema
 */
export type GetCustomObjectSchemaResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: CustomObjectSchema;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetCustomObjectSchemaResponse$zodSchema: z.ZodType<GetCustomObjectSchemaResponse>;
//# sourceMappingURL=getcustomobjectschemaresponse.d.ts.map