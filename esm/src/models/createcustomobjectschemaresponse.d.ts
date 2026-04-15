import * as z from "zod";
import { CustomObjectSchema } from "./customobjectschema.js";
/**
 * Custom object schema created
 */
export type CreateCustomObjectSchemaResponse = {
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
export declare const CreateCustomObjectSchemaResponse$zodSchema: z.ZodType<CreateCustomObjectSchemaResponse>;
//# sourceMappingURL=createcustomobjectschemaresponse.d.ts.map