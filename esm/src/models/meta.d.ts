import * as z from "zod";
/**
 * Cursors to navigate to previous or next pages through the API
 */
export type Cursors = {
    previous?: string | null | undefined;
    current?: string | null | undefined;
    next?: string | null | undefined;
};
export declare const Cursors$zodSchema: z.ZodType<Cursors>;
/**
 * Response metadata
 */
export type Meta = {
    items_on_page?: number | undefined;
    cursors?: Cursors | undefined;
};
export declare const Meta$zodSchema: z.ZodType<Meta>;
//# sourceMappingURL=meta.d.ts.map