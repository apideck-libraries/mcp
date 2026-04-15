import * as z from "zod";
/**
 * Links to navigate to previous or next pages through the API
 */
export type Links = {
    previous?: string | null | undefined;
    current?: string | undefined;
    next?: string | null | undefined;
};
export declare const Links$zodSchema: z.ZodType<Links>;
//# sourceMappingURL=links.d.ts.map