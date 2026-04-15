import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Unify event source
 */
export declare const EventSource: {
    readonly Native: "native";
    readonly Virtual: "virtual";
};
/**
 * Unify event source
 */
export type EventSource = OpenEnum<typeof EventSource>;
export declare const EventSource$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    native: "native";
    virtual: "virtual";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * Unify event that is supported on the connector. Events are delivered via Webhooks.
 */
export type ConnectorEvent = {
    event_type?: string | undefined;
    event_source?: EventSource | undefined;
    downstream_event_type?: string | undefined;
    resources?: Array<string> | undefined;
    entity_type?: string | undefined;
};
export declare const ConnectorEvent$zodSchema: z.ZodType<ConnectorEvent>;
//# sourceMappingURL=connectorevent.d.ts.map