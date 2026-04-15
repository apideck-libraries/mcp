import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * [Connection state flow](#section/Connection-state)
 */
export declare const ConnectionState: {
    readonly Available: "available";
    readonly Callable: "callable";
    readonly Added: "added";
    readonly Authorized: "authorized";
    readonly Invalid: "invalid";
};
/**
 * [Connection state flow](#section/Connection-state)
 */
export type ConnectionState = OpenEnum<typeof ConnectionState>;
export declare const ConnectionState$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    invalid: "invalid";
    available: "available";
    callable: "callable";
    added: "added";
    authorized: "authorized";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
//# sourceMappingURL=connectionstate.d.ts.map