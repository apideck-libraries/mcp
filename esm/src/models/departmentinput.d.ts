import * as z from "zod";
import { PassThroughBody } from "./passthroughbody.js";
export type DepartmentInput = {
    name?: string | null | undefined;
    code?: string | null | undefined;
    description?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const DepartmentInput$zodSchema: z.ZodType<DepartmentInput>;
//# sourceMappingURL=departmentinput.d.ts.map