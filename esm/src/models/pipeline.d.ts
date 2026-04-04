import * as z from "zod";
import { Currency } from "./currency.js";
import { PassThroughBody } from "./passthroughbody.js";
export type PipelineStage = {
    id?: string | null | undefined;
    name?: string | null | undefined;
    value?: string | null | undefined;
    win_probability?: number | null | undefined;
    display_order?: number | null | undefined;
    archived?: boolean | null | undefined;
    created_at?: string | null | undefined;
    updated_at?: string | null | undefined;
};
export declare const PipelineStage$zodSchema: z.ZodType<PipelineStage>;
export type Pipeline = {
    id?: string | undefined;
    name: string;
    currency?: Currency | null | undefined;
    archived?: boolean | undefined;
    active?: boolean | undefined;
    display_order?: number | null | undefined;
    win_probability_enabled?: boolean | undefined;
    stages?: Array<PipelineStage> | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const Pipeline$zodSchema: z.ZodType<Pipeline>;
//# sourceMappingURL=pipeline.d.ts.map