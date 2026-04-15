import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Projects
 */
export type DeleteProjectResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: UnifiedId;
};
export declare const DeleteProjectResponse$zodSchema: z.ZodType<DeleteProjectResponse>;
//# sourceMappingURL=deleteprojectresponse.d.ts.map