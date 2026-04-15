import * as z from "zod";
export type OddWeeks = {
    hours_monday?: number | undefined;
    hours_tuesday?: number | undefined;
    hours_wednesday?: number | undefined;
    hours_thursday?: number | undefined;
    hours_friday?: number | undefined;
    hours_saturday?: number | undefined;
    hours_sunday?: number | undefined;
};
export declare const OddWeeks$zodSchema: z.ZodType<OddWeeks>;
export type EvenWeeks = {
    hours_monday?: number | undefined;
    hours_tuesday?: number | undefined;
    hours_wednesday?: number | undefined;
    hours_thursday?: number | undefined;
    hours_friday?: number | undefined;
    hours_saturday?: number | undefined;
    hours_sunday?: number | undefined;
};
export declare const EvenWeeks$zodSchema: z.ZodType<EvenWeeks>;
export type WorkPattern = {
    odd_weeks?: OddWeeks | undefined;
    even_weeks?: EvenWeeks | undefined;
};
export declare const WorkPattern$zodSchema: z.ZodType<WorkPattern>;
export type Schedule = {
    id: string;
    start_date: string;
    end_date: string;
    work_pattern: WorkPattern;
};
export declare const Schedule$zodSchema: z.ZodType<Schedule>;
//# sourceMappingURL=schedule.d.ts.map