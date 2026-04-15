import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetNoteResponse } from "./getnoteresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmNotesOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmNotesOneGlobals$zodSchema: z.ZodType<CrmNotesOneGlobals>;
export type CrmNotesOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const CrmNotesOneRequest$zodSchema: z.ZodType<CrmNotesOneRequest>;
export type CrmNotesOneResponse = GetNoteResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmNotesOneResponse$zodSchema: z.ZodType<CrmNotesOneResponse>;
//# sourceMappingURL=crmnotesoneop.d.ts.map