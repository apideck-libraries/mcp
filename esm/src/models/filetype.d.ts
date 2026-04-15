import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * The type of resource. Could be file, folder or url
 */
export declare const FileType: {
    readonly File: "file";
    readonly Folder: "folder";
    readonly Url: "url";
};
/**
 * The type of resource. Could be file, folder or url
 */
export type FileType = OpenEnum<typeof FileType>;
export declare const FileType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    url: "url";
    file: "file";
    folder: "folder";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
//# sourceMappingURL=filetype.d.ts.map