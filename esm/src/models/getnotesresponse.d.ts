import * as z from "zod";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
import { Note } from "./note.js";
/**
 * Notes
 */
export type GetNotesResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Note>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetNotesResponse$zodSchema: z.ZodType<GetNotesResponse>;
//# sourceMappingURL=getnotesresponse.d.ts.map