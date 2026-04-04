import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateNoteResponse } from "./createnoteresponse.js";
import { NoteInput } from "./noteinput.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmNotesAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmNotesAddGlobals$zodSchema: z.ZodType<CrmNotesAddGlobals>;
export type CrmNotesAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: NoteInput;
};
export declare const CrmNotesAddRequest$zodSchema: z.ZodType<CrmNotesAddRequest>;
export type CrmNotesAddResponse = CreateNoteResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmNotesAddResponse$zodSchema: z.ZodType<CrmNotesAddResponse>;
//# sourceMappingURL=crmnotesaddop.d.ts.map