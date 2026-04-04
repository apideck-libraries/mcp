import * as z from "zod";
import { PassThroughBody } from "./passthroughbody.js";
export type DriveInput = {
    name: string;
    description?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const DriveInput$zodSchema: z.ZodType<DriveInput>;
//# sourceMappingURL=driveinput.d.ts.map