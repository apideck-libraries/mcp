import * as z from "zod";
export type ExtendPath = {
    path: string;
    value?: any | undefined;
};
export declare const ExtendPath$zodSchema: z.ZodType<ExtendPath>;
export type PassThroughBody = {
    service_id: string;
    operation_id?: string | undefined;
    extend_object?: {
        [k: string]: any;
    } | undefined;
    extend_paths?: Array<ExtendPath> | undefined;
};
export declare const PassThroughBody$zodSchema: z.ZodType<PassThroughBody>;
//# sourceMappingURL=passthroughbody.d.ts.map