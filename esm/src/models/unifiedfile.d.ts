import * as z from "zod";
import { FileType } from "./filetype.js";
import { LinkedFolder } from "./linkedfolder.js";
import { Owner } from "./owner.js";
/**
 * Permissions the current user has on this file.
 */
export type Permissions = {
    download?: boolean | undefined;
};
export declare const Permissions$zodSchema: z.ZodType<Permissions>;
export type UnifiedFile = {
    id: string;
    downstream_id?: string | null | undefined;
    name: string | null;
    description?: string | null | undefined;
    type: FileType | null;
    path?: string | null | undefined;
    mime_type?: string | null | undefined;
    downloadable?: boolean | undefined;
    size?: number | null | undefined;
    owner?: Owner | undefined;
    parent_folders?: Array<LinkedFolder> | undefined;
    parent_folders_complete?: boolean | undefined;
    permissions?: Permissions | undefined;
    exportable?: boolean | undefined;
    export_formats?: Array<string> | null | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
};
export declare const UnifiedFile$zodSchema: z.ZodType<UnifiedFile>;
//# sourceMappingURL=unifiedfile.d.ts.map