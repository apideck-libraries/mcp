import * as z from "zod";
import { Currency } from "./currency.js";
import { PassThroughBody } from "./passthroughbody.js";
export type StageInput = {
    name?: string | null | undefined;
    value?: string | null | undefined;
    win_probability?: number | null | undefined;
    display_order?: number | null | undefined;
    archived?: boolean | null | undefined;
};
export declare const StageInput$zodSchema: z.ZodType<StageInput>;
export type PipelineInput = {
    id?: string | undefined;
    name: string;
    currency?: Currency | null | undefined;
    archived?: boolean | undefined;
    active?: boolean | undefined;
    display_order?: number | null | undefined;
    win_probability_enabled?: boolean | undefined;
    stages?: Array<StageInput> | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const PipelineInput$zodSchema: z.ZodType<PipelineInput>;
//# sourceMappingURL=pipelineinput.d.ts.map