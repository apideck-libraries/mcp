import * as z from "zod";
import { DataScopesResourcesUnion } from "./datascopesresourcesunion.js";
export type ConsentRecordInput = {
    granted: boolean;
    resources: DataScopesResourcesUnion;
};
export declare const ConsentRecordInput$zodSchema: z.ZodType<ConsentRecordInput>;
//# sourceMappingURL=consentrecordinput.d.ts.map