import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { SortDirection } from "./sortdirection.js";
/**
 * The field to sort by
 */
export declare const ProjectsSortSortBy: {
    readonly Name: "name";
    readonly Status: "status";
    readonly StartDate: "start_date";
    readonly EndDate: "end_date";
    readonly BudgetAmount: "budget_amount";
    readonly ActualAmount: "actual_amount";
    readonly CreatedAt: "created_at";
    readonly UpdatedAt: "updated_at";
};
/**
 * The field to sort by
 */
export type ProjectsSortSortBy = OpenEnum<typeof ProjectsSortSortBy>;
export declare const ProjectsSortSortBy$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    name: "name";
    status: "status";
    start_date: "start_date";
    end_date: "end_date";
    updated_at: "updated_at";
    created_at: "created_at";
    budget_amount: "budget_amount";
    actual_amount: "actual_amount";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type ProjectsSort = {
    by?: ProjectsSortSortBy | undefined;
    direction?: SortDirection | undefined;
};
export declare const ProjectsSort$zodSchema: z.ZodType<ProjectsSort>;
//# sourceMappingURL=projectssort.d.ts.map