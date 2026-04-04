import * as z from "zod";
import { FileType } from "./filetype.js";
export type SharedLinkTarget = {
    id: string;
    name?: string | null | undefined;
    type?: FileType | null | undefined;
};
export declare const SharedLinkTarget$zodSchema: z.ZodType<SharedLinkTarget>;
//# sourceMappingURL=sharedlinktarget.d.ts.map