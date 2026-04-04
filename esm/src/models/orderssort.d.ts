import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { SortDirection } from "./sortdirection.js";
/**
 * The field on which to sort the Orders
 */
export declare const OrdersSortBy: {
    readonly CreatedAt: "created_at";
    readonly UpdatedAt: "updated_at";
    readonly Name: "name";
};
/**
 * The field on which to sort the Orders
 */
export type OrdersSortBy = OpenEnum<typeof OrdersSortBy>;
export declare const OrdersSortBy$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    name: "name";
    updated_at: "updated_at";
    created_at: "created_at";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type OrdersSort = {
    by?: OrdersSortBy | undefined;
    direction?: SortDirection | undefined;
};
export declare const OrdersSort$zodSchema: z.ZodType<OrdersSort>;
//# sourceMappingURL=orderssort.d.ts.map