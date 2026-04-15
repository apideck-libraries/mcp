import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * The current status of the product (active or archived).
 */
export declare const ProductStatus: {
    readonly Active: "active";
    readonly Archived: "archived";
};
/**
 * The current status of the product (active or archived).
 */
export type ProductStatus = OpenEnum<typeof ProductStatus>;
export declare const ProductStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    active: "active";
    archived: "archived";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type Image = {
    id?: string | null | undefined;
    url?: string | null | undefined;
};
export declare const Image$zodSchema: z.ZodType<Image>;
export type EcommerceProductOption = {
    id?: string | null | undefined;
    name?: string | null | undefined;
    values?: Array<string | null> | undefined;
};
export declare const EcommerceProductOption$zodSchema: z.ZodType<EcommerceProductOption>;
export type VariantOption = {
    id?: string | null | undefined;
    name?: string | null | undefined;
    value?: string | null | undefined;
};
export declare const VariantOption$zodSchema: z.ZodType<VariantOption>;
export type VariantImage = {
    id?: string | null | undefined;
    url?: string | null | undefined;
};
export declare const VariantImage$zodSchema: z.ZodType<VariantImage>;
export type Variant = {
    id?: string | null | undefined;
    name?: string | null | undefined;
    price?: string | null | undefined;
    sku?: string | null | undefined;
    inventory_quantity?: string | null | undefined;
    weight?: string | null | undefined;
    weight_unit?: string | null | undefined;
    options?: Array<VariantOption> | undefined;
    images?: Array<VariantImage> | undefined;
};
export declare const Variant$zodSchema: z.ZodType<Variant>;
export type EcommerceProductCategory = {
    id?: string | null | undefined;
    name?: string | null | undefined;
};
export declare const EcommerceProductCategory$zodSchema: z.ZodType<EcommerceProductCategory>;
export type EcommerceProduct = {
    id: string;
    name?: string | null | undefined;
    description?: string | null | undefined;
    status?: ProductStatus | null | undefined;
    price?: string | null | undefined;
    sku?: string | null | undefined;
    inventory_quantity?: string | null | undefined;
    images?: Array<Image> | null | undefined;
    weight?: string | null | undefined;
    weight_unit?: string | null | undefined;
    options?: Array<EcommerceProductOption> | undefined;
    variants?: Array<Variant> | undefined;
    tags?: Array<string | null> | undefined;
    categories?: Array<EcommerceProductCategory> | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    created_at?: string | null | undefined;
    updated_at?: string | null | undefined;
};
export declare const EcommerceProduct$zodSchema: z.ZodType<EcommerceProduct>;
//# sourceMappingURL=ecommerceproduct.d.ts.map