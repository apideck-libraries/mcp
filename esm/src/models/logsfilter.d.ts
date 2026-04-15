import * as z from "zod";
export type LogsFilter = {
    connector_id?: string | null | undefined;
    status_code?: number | null | undefined;
    status_codes?: Array<number> | null | undefined;
    exclude_unified_apis?: string | null | undefined;
};
export declare const LogsFilter$zodSchema: z.ZodType<LogsFilter>;
//# sourceMappingURL=logsfilter.d.ts.map