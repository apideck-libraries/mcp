import * as z from "zod";
import { ResourceStatus } from "./resourcestatus.js";
export type LinkedResource = {
    id?: string | undefined;
    unified_property?: string | undefined;
};
export declare const LinkedResource$zodSchema: z.ZodType<LinkedResource>;
/**
 * JSON Schema of the resource in our Unified API
 */
export type Schema = {};
export declare const Schema$zodSchema: z.ZodType<Schema>;
export type ApiResource = {
    id?: string | undefined;
    name?: string | undefined;
    status?: ResourceStatus | undefined;
    linked_resources?: Array<LinkedResource> | undefined;
    schema?: Schema | undefined;
};
export declare const ApiResource$zodSchema: z.ZodType<ApiResource>;
//# sourceMappingURL=apiresource.d.ts.map