import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { SortDirection } from "./sortdirection.js";
/**
 * The field on which to sort the Collections
 */
export declare const CollectionsSortBy: {
    readonly Name: "name";
    readonly CreatedAt: "created_at";
    readonly UpdatedAt: "updated_at";
};
/**
 * The field on which to sort the Collections
 */
export type CollectionsSortBy = OpenEnum<typeof CollectionsSortBy>;
export declare const CollectionsSortBy$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    name: "name";
    updated_at: "updated_at";
    created_at: "created_at";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type CollectionsSort = {
    by?: CollectionsSortBy | undefined;
    direction?: SortDirection | undefined;
};
export declare const CollectionsSort$zodSchema: z.ZodType<CollectionsSort>;
//# sourceMappingURL=collectionssort.d.ts.map