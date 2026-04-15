import * as z from "zod";
import { ConnectorStatus } from "./connectorstatus.js";
import { UnifiedApiId } from "./unifiedapiid.js";
export type ConnectorsFilter = {
    unified_api?: UnifiedApiId | undefined;
    status?: ConnectorStatus | undefined;
};
export declare const ConnectorsFilter$zodSchema: z.ZodType<ConnectorsFilter>;
//# sourceMappingURL=connectorsfilter.d.ts.map