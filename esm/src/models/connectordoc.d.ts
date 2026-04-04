import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Audience for the doc.
 */
export declare const Audience: {
    readonly ApplicationOwner: "application_owner";
    readonly Consumer: "consumer";
};
/**
 * Audience for the doc.
 */
export type Audience = OpenEnum<typeof Audience>;
export declare const Audience$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    application_owner: "application_owner";
    consumer: "consumer";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * Format of the doc.
 */
export declare const Format: {
    readonly Markdown: "markdown";
};
/**
 * Format of the doc.
 */
export type Format = OpenEnum<typeof Format>;
export declare const Format$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    markdown: "markdown";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type ConnectorDoc = {
    id?: string | undefined;
    name?: string | undefined;
    audience?: Audience | undefined;
    format?: Format | undefined;
    url?: string | undefined;
};
export declare const ConnectorDoc$zodSchema: z.ZodType<ConnectorDoc>;
//# sourceMappingURL=connectordoc.d.ts.map