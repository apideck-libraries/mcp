import * as z from "zod";
export type CollectionTag = {
    id: string | null;
    name?: string | null | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const CollectionTag$zodSchema: z.ZodType<CollectionTag>;
//# sourceMappingURL=collectiontag.d.ts.map