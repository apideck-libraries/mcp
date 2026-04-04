import * as z from "zod";
import { Department } from "./department.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Departments
 */
export type GetDepartmentsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Department>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetDepartmentsResponse$zodSchema: z.ZodType<GetDepartmentsResponse>;
//# sourceMappingURL=getdepartmentsresponse.d.ts.map