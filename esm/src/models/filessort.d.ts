import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { SortDirection } from "./sortdirection.js";
/**
 * The field on which to sort the Files
 */
export declare const FilesSortBy: {
    readonly CreatedAt: "created_at";
    readonly UpdatedAt: "updated_at";
    readonly Name: "name";
};
/**
 * The field on which to sort the Files
 */
export type FilesSortBy = OpenEnum<typeof FilesSortBy>;
export declare const FilesSortBy$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    name: "name";
    updated_at: "updated_at";
    created_at: "created_at";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type FilesSort = {
    by?: FilesSortBy | undefined;
    direction?: SortDirection | undefined;
};
export declare const FilesSort$zodSchema: z.ZodType<FilesSort>;
//# sourceMappingURL=filessort.d.ts.map