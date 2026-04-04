import * as z from "zod";
import { ResourceStatus } from "./resourcestatus.js";
export type LinkedConnectorResource = {
    id?: string | undefined;
    name?: string | undefined;
    status?: ResourceStatus | undefined;
    downstream_id?: string | undefined;
    downstream_name?: string | undefined;
};
export declare const LinkedConnectorResource$zodSchema: z.ZodType<LinkedConnectorResource>;
//# sourceMappingURL=linkedconnectorresource.d.ts.map