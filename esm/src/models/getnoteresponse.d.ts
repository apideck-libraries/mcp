import * as z from "zod";
import { Note } from "./note.js";
/**
 * Note
 */
export type GetNoteResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Note;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetNoteResponse$zodSchema: z.ZodType<GetNoteResponse>;
//# sourceMappingURL=getnoteresponse.d.ts.map