import * as z from "zod";
import { DataScopesResourcesUnion } from "./datascopesresourcesunion.js";
export type ConsentRecord = {
    id: string;
    created_at: string;
    granted: boolean;
    resources: DataScopesResourcesUnion;
};
export declare const ConsentRecord$zodSchema: z.ZodType<ConsentRecord>;
//# sourceMappingURL=consentrecord.d.ts.map