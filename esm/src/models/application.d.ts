import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { PassThroughBody } from "./passthroughbody.js";
export declare const ApplicationStatus: {
    readonly Open: "open";
    readonly Rejected: "rejected";
    readonly Hired: "hired";
    readonly Converted: "converted";
    readonly Other: "other";
};
export type ApplicationStatus = OpenEnum<typeof ApplicationStatus>;
export declare const ApplicationStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    other: "other";
    rejected: "rejected";
    open: "open";
    converted: "converted";
    hired: "hired";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type ApplicationStage = {
    id?: string | null | undefined;
    name?: string | null | undefined;
};
export declare const ApplicationStage$zodSchema: z.ZodType<ApplicationStage>;
export type Application = {
    id?: string | undefined;
    applicant_id: string | null;
    job_id: string | null;
    status?: ApplicationStatus | null | undefined;
    stage?: ApplicationStage | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const Application$zodSchema: z.ZodType<Application>;
export type ApplicationInput = {
    applicant_id: string | null;
    job_id: string | null;
    status?: ApplicationStatus | null | undefined;
    stage?: ApplicationStage | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const ApplicationInput$zodSchema: z.ZodType<ApplicationInput>;
//# sourceMappingURL=application.d.ts.map