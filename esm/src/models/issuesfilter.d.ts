import * as z from "zod";
export type IssuesFilter = {
    status?: Array<string> | undefined;
    since?: string | undefined;
    assignee_id?: string | undefined;
};
export declare const IssuesFilter$zodSchema: z.ZodType<IssuesFilter>;
//# sourceMappingURL=issuesfilter.d.ts.map