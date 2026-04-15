import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteCreditNoteResponse } from "./deletecreditnoteresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingCreditNotesDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingCreditNotesDeleteGlobals$zodSchema: z.ZodType<AccountingCreditNotesDeleteGlobals>;
export type AccountingCreditNotesDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingCreditNotesDeleteRequest$zodSchema: z.ZodType<AccountingCreditNotesDeleteRequest>;
export type AccountingCreditNotesDeleteResponse = DeleteCreditNoteResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingCreditNotesDeleteResponse$zodSchema: z.ZodType<AccountingCreditNotesDeleteResponse>;
//# sourceMappingURL=accountingcreditnotesdeleteop.d.ts.map