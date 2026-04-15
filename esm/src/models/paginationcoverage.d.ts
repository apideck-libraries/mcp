import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * How pagination is implemented on this connector. Native mode means Apideck is using the pagination parameters of the connector. With virtual pagination, the connector does not support pagination, but Apideck emulates it.
 */
export declare const PaginationCoverageMode: {
    readonly Native: "native";
    readonly Virtual: "virtual";
};
/**
 * How pagination is implemented on this connector. Native mode means Apideck is using the pagination parameters of the connector. With virtual pagination, the connector does not support pagination, but Apideck emulates it.
 */
export type PaginationCoverageMode = OpenEnum<typeof PaginationCoverageMode>;
export declare const PaginationCoverageMode$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    native: "native";
    virtual: "virtual";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type PaginationCoverage = {
    mode?: PaginationCoverageMode | undefined;
    paging_support?: boolean | undefined;
    limit_support?: boolean | undefined;
};
export declare const PaginationCoverage$zodSchema: z.ZodType<PaginationCoverage>;
//# sourceMappingURL=paginationcoverage.d.ts.map