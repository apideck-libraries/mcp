import * as z from "zod";
import { DataScopesResourcesUnion } from "./datascopesresourcesunion.js";
export type DataScopesInput = {
    enabled?: boolean | undefined;
    resources?: DataScopesResourcesUnion | undefined;
};
export declare const DataScopesInput$zodSchema: z.ZodType<DataScopesInput>;
//# sourceMappingURL=datascopesinput.d.ts.map