import * as z from "zod";
import { PassThroughBody } from "./passthroughbody.js";
export type DriveGroupInput = {
    name: string;
    display_name?: string | null | undefined;
    description?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const DriveGroupInput$zodSchema: z.ZodType<DriveGroupInput>;
//# sourceMappingURL=drivegroupinput.d.ts.map