import { LocalContext } from "../../cli.js";
import { ConsoleLoggerLevel } from "../../console-logger.js";
import { MCPServerFlags } from "../../flags.js";
interface StartCommandFlags extends MCPServerFlags {
    readonly transport: "stdio" | "sse";
    readonly port: number;
    readonly "log-level": ConsoleLoggerLevel;
    readonly env?: [string, string][];
}
export declare function main(this: LocalContext, flags: StartCommandFlags): Promise<void>;
export {};
//# sourceMappingURL=impl.d.ts.map