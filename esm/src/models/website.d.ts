import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * The type of website
 */
export declare const WebsiteType: {
    readonly Primary: "primary";
    readonly Secondary: "secondary";
    readonly Work: "work";
    readonly Personal: "personal";
    readonly Other: "other";
};
/**
 * The type of website
 */
export type WebsiteType = OpenEnum<typeof WebsiteType>;
export declare const WebsiteType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    other: "other";
    primary: "primary";
    secondary: "secondary";
    work: "work";
    personal: "personal";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type Website = {
    id?: string | null | undefined;
    url: string;
    type?: WebsiteType | null | undefined;
};
export declare const Website$zodSchema: z.ZodType<Website>;
//# sourceMappingURL=website.d.ts.map