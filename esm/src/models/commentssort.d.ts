import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { SortDirection } from "./sortdirection.js";
/**
 * The field on which to sort the Comments
 */
export declare const CommentsSortBy: {
    readonly CreatedAt: "created_at";
    readonly UpdatedAt: "updated_at";
};
/**
 * The field on which to sort the Comments
 */
export type CommentsSortBy = OpenEnum<typeof CommentsSortBy>;
export declare const CommentsSortBy$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    updated_at: "updated_at";
    created_at: "created_at";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type CommentsSort = {
    by?: CommentsSortBy | undefined;
    direction?: SortDirection | undefined;
};
export declare const CommentsSort$zodSchema: z.ZodType<CommentsSort>;
//# sourceMappingURL=commentssort.d.ts.map