import * as z from "zod";
export type LinkedTrackingCategory = {
    id?: string | undefined;
    code?: string | null | undefined;
    name?: string | null | undefined;
    parent_id?: string | undefined;
    parent_name?: string | null | undefined;
};
export declare const LinkedTrackingCategory$zodSchema: z.ZodType<LinkedTrackingCategory>;
//# sourceMappingURL=linkedtrackingcategory.d.ts.map