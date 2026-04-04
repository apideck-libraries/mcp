import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Email type
 */
export declare const EmailType: {
    readonly Primary: "primary";
    readonly Secondary: "secondary";
    readonly Work: "work";
    readonly Personal: "personal";
    readonly Billing: "billing";
    readonly Other: "other";
};
/**
 * Email type
 */
export type EmailType = OpenEnum<typeof EmailType>;
export declare const EmailType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    other: "other";
    primary: "primary";
    secondary: "secondary";
    billing: "billing";
    work: "work";
    personal: "personal";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type Email = {
    id?: string | null | undefined;
    email: string | null;
    type?: EmailType | null | undefined;
};
export declare const Email$zodSchema: z.ZodType<Email>;
//# sourceMappingURL=email.d.ts.map