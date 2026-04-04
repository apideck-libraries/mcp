import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteJournalEntryResponse } from "./deletejournalentryresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingJournalEntriesDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingJournalEntriesDeleteGlobals$zodSchema: z.ZodType<AccountingJournalEntriesDeleteGlobals>;
export type AccountingJournalEntriesDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingJournalEntriesDeleteRequest$zodSchema: z.ZodType<AccountingJournalEntriesDeleteRequest>;
export type AccountingJournalEntriesDeleteResponse = DeleteJournalEntryResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingJournalEntriesDeleteResponse$zodSchema: z.ZodType<AccountingJournalEntriesDeleteResponse>;
//# sourceMappingURL=accountingjournalentriesdeleteop.d.ts.map