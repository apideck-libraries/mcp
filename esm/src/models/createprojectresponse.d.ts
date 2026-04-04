import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Projects
 */
export type CreateProjectResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: UnifiedId;
};
export declare const CreateProjectResponse$zodSchema: z.ZodType<CreateProjectResponse>;
//# sourceMappingURL=createprojectresponse.d.ts.map