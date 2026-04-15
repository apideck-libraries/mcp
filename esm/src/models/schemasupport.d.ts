import * as z from "zod";
/**
 * When a connector has schema_support, a call can be made to retrieve a json schema that describes a downstream resource.
 */
export type SchemaSupport = {
    supported?: boolean | undefined;
};
export declare const SchemaSupport$zodSchema: z.ZodType<SchemaSupport>;
//# sourceMappingURL=schemasupport.d.ts.map