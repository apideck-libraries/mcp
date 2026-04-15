import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteNoteResponse } from "./deletenoteresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmNotesDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmNotesDeleteGlobals$zodSchema: z.ZodType<CrmNotesDeleteGlobals>;
export type CrmNotesDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const CrmNotesDeleteRequest$zodSchema: z.ZodType<CrmNotesDeleteRequest>;
export type CrmNotesDeleteResponse = DeleteNoteResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmNotesDeleteResponse$zodSchema: z.ZodType<CrmNotesDeleteResponse>;
//# sourceMappingURL=crmnotesdeleteop.d.ts.map