import * as z from "zod";
import { ApiStatus } from "./apistatus.js";
export type ApisFilter = {
    status?: ApiStatus | undefined;
};
export declare const ApisFilter$zodSchema: z.ZodType<ApisFilter>;
//# sourceMappingURL=apisfilter.d.ts.map