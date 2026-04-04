import * as z from "zod";
import { LinkedFolder } from "./linkedfolder.js";
import { Owner } from "./owner.js";
export type Folder = {
    id?: string | undefined;
    downstream_id?: string | null | undefined;
    name: string;
    description?: string | null | undefined;
    path?: string | null | undefined;
    size?: number | null | undefined;
    downloadable?: boolean | null | undefined;
    owner?: Owner | undefined;
    parent_folders: Array<LinkedFolder>;
    parent_folders_complete?: boolean | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
};
export declare const Folder$zodSchema: z.ZodType<Folder>;
//# sourceMappingURL=folder.d.ts.map