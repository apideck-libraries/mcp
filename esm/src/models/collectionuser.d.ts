import * as z from "zod";
export type CollectionUser = {
    id?: string | null | undefined;
    name?: string | null | undefined;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    email?: string | null | undefined;
    photo_url?: string | null | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
};
export declare const CollectionUser$zodSchema: z.ZodType<CollectionUser>;
//# sourceMappingURL=collectionuser.d.ts.map