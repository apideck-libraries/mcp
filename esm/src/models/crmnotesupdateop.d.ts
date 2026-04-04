import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NoteInput } from "./noteinput.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateNoteResponse } from "./updatenoteresponse.js";
export type CrmNotesUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmNotesUpdateGlobals$zodSchema: z.ZodType<CrmNotesUpdateGlobals>;
export type CrmNotesUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: NoteInput;
};
export declare const CrmNotesUpdateRequest$zodSchema: z.ZodType<CrmNotesUpdateRequest>;
export type CrmNotesUpdateResponse = UpdateNoteResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmNotesUpdateResponse$zodSchema: z.ZodType<CrmNotesUpdateResponse>;
//# sourceMappingURL=crmnotesupdateop.d.ts.map