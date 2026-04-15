import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Status of the connector. Connectors with status live or beta are callable.
 */
export declare const ConnectorStatus: {
    readonly Live: "live";
    readonly Beta: "beta";
    readonly EarlyAccess: "early-access";
    readonly Development: "development";
    readonly Considering: "considering";
};
/**
 * Status of the connector. Connectors with status live or beta are callable.
 */
export type ConnectorStatus = OpenEnum<typeof ConnectorStatus>;
export declare const ConnectorStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    live: "live";
    beta: "beta";
    development: "development";
    considering: "considering";
    "early-access": "early-access";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
//# sourceMappingURL=connectorstatus.d.ts.map