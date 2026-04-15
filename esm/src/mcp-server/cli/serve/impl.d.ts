import { LocalContext } from "../../cli.js";
import { ConsoleLoggerLevel } from "../../console-logger.js";
import { MCPServerFlags } from "../../flags.js";
interface ServeCommandFlags extends MCPServerFlags {
    readonly port: number;
    readonly "disable-static-auth": boolean;
    readonly "log-level": ConsoleLoggerLevel;
    readonly env?: [string, string][];
}
export declare function main(this: LocalContext, flags: ServeCommandFlags): Promise<void>;
export {};
//# sourceMappingURL=impl.d.ts.map