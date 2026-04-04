import * as z from "zod";
import { PaginationCoverage } from "./paginationcoverage.js";
import { ResourceStatus } from "./resourcestatus.js";
import { SupportedProperty } from "./supportedproperty.js";
export type Coverage = {
    downstream_id?: string | undefined;
    downstream_name?: string | undefined;
    pagination_supported?: boolean | undefined;
    pagination?: PaginationCoverage | undefined;
    supported_operations?: Array<string> | undefined;
    supported_filters?: Array<string> | undefined;
    supported_sort_by?: Array<string> | undefined;
    supported_fields?: Array<SupportedProperty> | undefined;
    supported_list_fields?: Array<SupportedProperty> | undefined;
};
export declare const Coverage$zodSchema: z.ZodType<Coverage>;
export type ApiResourceCoverage = {
    id?: string | undefined;
    name?: string | undefined;
    status?: ResourceStatus | undefined;
    coverage?: Array<Coverage> | undefined;
};
export declare const ApiResourceCoverage$zodSchema: z.ZodType<ApiResourceCoverage>;
//# sourceMappingURL=apiresourcecoverage.d.ts.map