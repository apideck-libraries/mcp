import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Projects
 */
export type UpdateProjectResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: UnifiedId;
};
export declare const UpdateProjectResponse$zodSchema: z.ZodType<UpdateProjectResponse>;
//# sourceMappingURL=updateprojectresponse.d.ts.map