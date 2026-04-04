import * as z from "zod";
import { PaginationCoverage } from "./paginationcoverage.js";
import { ResourceStatus } from "./resourcestatus.js";
import { SupportedProperty } from "./supportedproperty.js";
export type ConnectorResource = {
    id?: string | undefined;
    name?: string | undefined;
    downstream_id?: string | undefined;
    downstream_name?: string | undefined;
    status?: ResourceStatus | undefined;
    pagination_supported?: boolean | undefined;
    pagination?: PaginationCoverage | undefined;
    custom_fields_supported?: boolean | undefined;
    supported_operations?: Array<string> | undefined;
    downstream_unsupported_operations?: Array<string> | undefined;
    supported_filters?: Array<string> | undefined;
    supported_sort_by?: Array<string> | undefined;
    supported_fields?: Array<SupportedProperty> | undefined;
    supported_list_fields?: Array<SupportedProperty> | undefined;
};
export declare const ConnectorResource$zodSchema: z.ZodType<ConnectorResource>;
//# sourceMappingURL=connectorresource.d.ts.map