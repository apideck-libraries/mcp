import * as z from "zod";
export type AgedReportFilter = {
    customer_id?: string | undefined;
    supplier_id?: string | undefined;
    report_as_of_date?: string | undefined;
    period_count?: number | undefined;
    period_length?: number | undefined;
};
export declare const AgedReportFilter$zodSchema: z.ZodType<AgedReportFilter>;
//# sourceMappingURL=agedreportfilter.d.ts.map