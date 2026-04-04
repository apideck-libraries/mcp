import * as z from "zod";
export type LinkedDepartment = {
    id?: string | undefined;
    display_id?: string | null | undefined;
    name?: string | null | undefined;
    downstream_id?: string | null | undefined;
};
export declare const LinkedDepartment$zodSchema: z.ZodType<LinkedDepartment>;
//# sourceMappingURL=linkeddepartment.d.ts.map