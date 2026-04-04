import * as z from "zod";
import { SDKOptions } from "./config.js";
export interface Env {
    APIDECK_API_KEY?: string | undefined;
    /**
     * Sets the consumerId parameter for all supported operations
     */
    APIDECK_CONSUMER_ID?: string | undefined;
    /**
     * Sets the appId parameter for all supported operations
     */
    APIDECK_APP_ID?: string | undefined;
    APIDECK_DEBUG?: boolean | undefined;
}
export declare const envSchema: z.ZodType<Env>;
/**
 * Reads and validates environment variables.
 */
export declare function env(): Env;
/**
 * Clears the cached env object. Useful for testing with a fresh environment.
 */
export declare function resetEnv(): void;
/**
 * Populates global parameters with environment variables.
 */
export declare function fillGlobals(options: SDKOptions): SDKOptions;
//# sourceMappingURL=env.d.ts.map