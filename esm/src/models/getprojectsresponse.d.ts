import * as z from "zod";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
import { Project } from "./project.js";
/**
 * Projects
 */
export type GetProjectsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Project>;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetProjectsResponse$zodSchema: z.ZodType<GetProjectsResponse>;
//# sourceMappingURL=getprojectsresponse.d.ts.map