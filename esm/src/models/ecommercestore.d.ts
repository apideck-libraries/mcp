import * as z from "zod";
export type EcommerceStore = {
    id: string;
    name?: string | null | undefined;
    store_url?: string | null | undefined;
    admin_url?: string | null | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    created_at?: string | null | undefined;
    updated_at?: string | null | undefined;
};
export declare const EcommerceStore$zodSchema: z.ZodType<EcommerceStore>;
//# sourceMappingURL=ecommercestore.d.ts.map