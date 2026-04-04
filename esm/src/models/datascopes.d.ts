import * as z from "zod";
import { DataScopesResourcesUnion } from "./datascopesresourcesunion.js";
export type DataScopes = {
    enabled?: boolean | undefined;
    updated_at?: string | undefined;
    resources?: DataScopesResourcesUnion | undefined;
};
export declare const DataScopes$zodSchema: z.ZodType<DataScopes>;
//# sourceMappingURL=datascopes.d.ts.map