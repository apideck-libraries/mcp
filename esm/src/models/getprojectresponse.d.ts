import * as z from "zod";
import { Project } from "./project.js";
/**
 * Projects
 */
export type GetProjectResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Project;
};
export declare const GetProjectResponse$zodSchema: z.ZodType<GetProjectResponse>;
//# sourceMappingURL=getprojectresponse.d.ts.map