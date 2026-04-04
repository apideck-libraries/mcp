import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { SortDirection } from "./sortdirection.js";
/**
 * The field on which to sort the Tickets
 */
export declare const TicketsSortBy: {
    readonly CreatedAt: "created_at";
    readonly UpdatedAt: "updated_at";
};
/**
 * The field on which to sort the Tickets
 */
export type TicketsSortBy = OpenEnum<typeof TicketsSortBy>;
export declare const TicketsSortBy$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    updated_at: "updated_at";
    created_at: "created_at";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type TicketsSort = {
    by?: TicketsSortBy | undefined;
    direction?: SortDirection | undefined;
};
export declare const TicketsSort$zodSchema: z.ZodType<TicketsSort>;
//# sourceMappingURL=ticketssort.d.ts.map