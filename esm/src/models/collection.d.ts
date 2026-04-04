import * as z from "zod";
export type Collection = {
    id: string;
    parent_id?: string | null | undefined;
    type?: string | null | undefined;
    name?: string | null | undefined;
    description?: string | null | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
};
export declare const Collection$zodSchema: z.ZodType<Collection>;
//# sourceMappingURL=collection.d.ts.map